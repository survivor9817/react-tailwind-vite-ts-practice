// src/hooks/useQuiz.ts
import { useState, useEffect, useCallback, useMemo } from "react";
import { getQuestionFromDB, getQuestionIds } from "../data/questionsData";
import { fakeFetch } from "./fakeFetch";

// ==================== Types ====================
export type QuizFiltersType = {
  Book: number | undefined;
  Where: { value: string; label: string };
  Level: { value: string; label: string };
  Source: { value: string; label: string };
};

// ==================== هوک اصلی ====================
export const useQuiz = (currentBookId: number | undefined, options: QuizOptions = {}) => {
  const { idsDelay = 800, questionDelay = 500, errorChance = 0.1 } = options;

  // ==================== View State ====================
  const [isQuizOn, setIsQuizOn] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  const showQuizView = useCallback(() => setIsQuizOn(true), []);
  const showFilterView = useCallback(() => setIsQuizOn(false), []);

  // ==================== Filters State ====================
  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>({
    Book: currentBookId,
    Where: { value: "", label: "" },
    Level: { value: "", label: "" },
    Source: { value: "", label: "" },
  });

  const resetFilters = useCallback(() => {
    setQuizFilters({
      Book: currentBookId,
      Where: { value: "", label: "" },
      Level: { value: "", label: "" },
      Source: { value: "", label: "" },
    });
  }, [currentBookId]);

  // ریست فیلترها وقتی کتاب یا ویو عوض شد
  useEffect(() => {
    resetFilters();
  }, [currentBookId, isQuizOn, resetFilters]);

  // ==================== Progressive Disclosure ====================
  const [showLevel, setShowLevel] = useState(false);
  const [showSource, setShowSource] = useState(false);

  useEffect(() => {
    setShowLevel(!!quizFilters.Where.value);
  }, [quizFilters.Where.value]);

  useEffect(() => {
    setShowSource(!!quizFilters.Level.value);
  }, [quizFilters.Level.value]);

  const showBtn = useMemo(
    () => showSource && !!quizFilters.Source.value,
    [showSource, quizFilters.Source.value],
  );

  // ==================== Question IDs (یک بار لود) ====================
  const [questionIds, setQuestionIds] = useState<string[] | null>(null);
  const [idsLoading, setIdsLoading] = useState(false);
  const [idsError, setIdsError] = useState<Error | null>(null);

  const loadQuestionIds = useCallback(async () => {
    setIdsLoading(true);
    setIdsError(null);

    try {
      const ids = await fakeFetch(
        () => getQuestionIds(quizFilters), // ← فیلترها رو پاس بده
        { delay: idsDelay, errorChance },
      );
      setQuestionIds(ids);
    } catch (error) {
      setIdsError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setIdsLoading(false);
    }
  }, [quizFilters, idsDelay, errorChance]);

  // ==================== Current Question State ====================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState<Error | null>(null);

  // ==================== Load Question ====================
  const loadQuestion = useCallback(
    async (index: number) => {
      if (!questionIds || index < 0 || index >= questionIds.length) return;

      setQuestionLoading(true);
      setQuestionError(null);
      setQuestion(null);
      setIsAnswerVisible(false);

      const currentId = questionIds[index];

      try {
        const q = await fakeFetch(() => getQuestionFromDB(currentId), {
          delay: questionDelay,
          errorChance,
          errorMessage: "خطا در دریافت سوال",
        });
        setQuestion(q);
      } catch (error) {
        setQuestionError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setQuestionLoading(false);
      }
    },
    [questionIds, questionDelay, errorChance],
  );

  // لود سوال اولیه
  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      loadQuestion(0);
    }
  }, [questionIds, loadQuestion]);

  // ==================== Navigation ====================
  const lastIndex = (questionIds?.length ?? 1) - 1;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === lastIndex;

  const goToQuestion = useCallback(
    async (index: number) => {
      if (!questionIds || index < 0 || index >= questionIds.length) return;
      await loadQuestion(index);
      setCurrentIndex(index);
    },
    [questionIds, loadQuestion],
  );

  const goToPrevQuestion = useCallback(async () => {
    if (isFirstQuestion) return;
    await goToQuestion(currentIndex - 1);
  }, [isFirstQuestion, goToQuestion, currentIndex]);

  const goToNextQuestion = useCallback(async () => {
    if (isLastQuestion) {
      setEndConfirmOpen(true);
      return;
    }
    await goToQuestion(currentIndex + 1);
  }, [isLastQuestion, goToQuestion, currentIndex]);

  // ==================== UI States ====================
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [endConfirmOpen, setEndConfirmOpen] = useState(false);
  const [resultsModalOpen, setResultsModalOpen] = useState(false);

  const toggleAnswer = useCallback(() => setIsAnswerVisible((prev) => !prev), []);
  const hideAnswer = useCallback(() => setIsAnswerVisible(false), []);

  const openEndConfirm = useCallback(() => setEndConfirmOpen(true), []);
  const closeEndConfirm = useCallback(() => setEndConfirmOpen(false), []);

  const openResultsModal = useCallback(() => {
    setEndConfirmOpen(false);
    setResultsModalOpen(true);
  }, []);
  const closeResultsModal = useCallback(() => setResultsModalOpen(false), []);

  // ==================== Reaction Buttons ====================
  const [reactions, setReactions] = useState<Record<string, ReactionBtn>>({});

  const currentQuestionId = questionIds?.[currentIndex];

  useEffect(() => {
    if (!currentQuestionId) return;

    // لود reactions از سرور یا تولید تصادفی
    const mockReactions: Record<string, ReactionBtn> = {
      like: {
        id: "like",
        icon: "thumb_up",
        count: Math.floor(Math.random() * 20),
        isActive: false,
      },
      difficult: {
        id: "difficult",
        icon: "psychology",
        count: Math.floor(Math.random() * 10),
        isActive: false,
      },
      bookmark: { id: "bookmark", icon: "bookmark", count: 0, isActive: false },
    };
    setReactions(mockReactions);
  }, [currentQuestionId]);

  const updateReactionOnClick = useCallback((btnId: string) => {
    setReactions((prev) => ({
      ...prev,
      [btnId]: {
        ...prev[btnId],
        isActive: !prev[btnId]?.isActive,
        count: prev[btnId]?.isActive ? prev[btnId].count - 1 : prev[btnId].count + 1,
      },
    }));
  }, []);

  // ==================== Start Quiz ====================
  const startQuiz = useCallback(
    async (formData?: FormData) => {
      setLoadingQuiz(true);

      // اگه نیاز داری فیلترها رو به سرور بفرستی
      // const response = await fetch('/api/quiz/start', { method: 'POST', body: formData });

      // شبیه‌سازی
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showQuizView();
      setLoadingQuiz(false);
    },
    [showQuizView],
  );

  // ==================== End Quiz ====================
  const endQuiz = useCallback(() => {
    closeEndConfirm();
    openResultsModal();
  }, [closeEndConfirm, openResultsModal]);

  // ==================== Refetch ====================
  const refetch = useCallback(async () => {
    await loadQuestion(currentIndex);
  }, [loadQuestion, currentIndex]);

  // ==================== Return ====================
  return {
    // View
    isQuizOn,
    showQuizView,
    showFilterView,
    loadingQuiz,
    startQuiz,

    // Filters
    quizFilters,
    setQuizFilters,
    showLevel,
    showSource,
    showBtn,

    // Question IDs
    questionIds,
    idsLoading,
    idsError,

    // Current Question
    currentIndex,
    question,
    questionLoading,
    questionError,

    // Navigation
    isFirstQuestion,
    isLastQuestion,
    goToPrevQuestion,
    goToNextQuestion,
    goToQuestion,

    // UI
    isAnswerVisible,
    toggleAnswer,
    hideAnswer,
    endConfirmOpen,
    closeEndConfirm,
    resultsModalOpen,
    openResultsModal,
    closeResultsModal,
    endQuiz,

    // Reactions
    reactions,
    updateReactionOnClick,

    // Utility
    refetch,
  };
};
