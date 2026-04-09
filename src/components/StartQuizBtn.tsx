// ──────────────────────────────────────────────────────────────
//  فایل: StartQuizBtn.tsx
// ──────────────────────────────────────────────────────────────
import Spinner from "./Spinner"; // مسیر را بر حسب پروژه تنظیم کنید

/* ----------------------------------------------------------------
   Props
----------------------------------------------------------------- */
type StartQuizBtnProps = {
  /** نمایش یا مخفی شدن دکمه (برای انیمیشن) */
  show?: boolean;

  /** حالت Loading – آیتم‌های spinner و متن جایگزین می‌شوند */
  loading?: boolean;

  /** حالت غیرفعال (به‌علاوه حالت loading) */
  disabled?: boolean;

  /** handler کلیک (اگر داخل فرم استفاده می‌کنید می‌توانید `type="submit"` بگذارید) */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** نوع دکمه – پیش‌فرض "button" (می‌توانید "submit" هم بدهید) */
  type?: "button" | "submit";
};

/* ----------------------------------------------------------------
   کامپوننت
----------------------------------------------------------------- */
export const StartQuizBtn = ({
  show = true,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
}: StartQuizBtnProps) => {
  /* ----------  کلاس‑های wrapper  ---------- */
  const wrapperCls = `flex items-center min-w-57.5 h-16 border-2 rounded-full z-4
    opacity-0 transition-all duration-300 bg-white
    ${show ? "visible opacity-100 -translate-y-6.75" : "invisible"}`;

  /* ----------  کلاس‑های دکمه  ---------- */
  const btnCls = `w-[95.6%] h-12 mx-[2.2%] rounded-full bg-black text-white
    cursor-pointer transition-colors hover:bg-gray-800
    disabled:opacity-70 disabled:cursor-not-allowed
    flex items-center justify-center gap-2`;

  const isDisabled = disabled || loading;

  return (
    <div className={wrapperCls}>
      <button type={type} className={btnCls} onClick={onClick} disabled={isDisabled}>
        {loading ? (
          <>
            <Spinner />
            <span>در حال شروع تمرین ...</span>
          </>
        ) : (
          <span>شروع تمرین</span>
        )}
      </button>
    </div>
  );
};

export default StartQuizBtn;
