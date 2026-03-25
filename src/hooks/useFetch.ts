// src/hooks/useFetch.ts
import { useState, useEffect, useCallback } from "react";

/**
 * @template T   نوع داده‌ای که سرور می‌فرستد
 * @param url       رشتهٔ URL (می‌تواند به‌صورت پارامتر یا template literal باشد)
 * @param options   تنظیمات اختیاری fetch (headers، method، …)
 * @param deps      آرایهٔ وابستگی – هر زمان یکی از موارد تغییر کند درخواست دوباره اجرا می‌شود
 *
 * @returns
 *   data      – دادهٔ دریافت‌شده یا null
 *   loading   – آیا در حال fetch است؟
 *   error     – خطا (اگر پیش آمد)
 *   refetch   – تابعی برای فراخوانی دستی دوباره
 */
export const useFetch = <T = unknown>(
  url: string | null,
  options?: RequestInit,
  deps: unknown[] = [],
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // تابعی که می‌تواند توسط کامپوننت یا effect صدا زده شود
  const fetchData = useCallback(async () => {
    if (!url) return; // URL نال → کاری انجام نمی‌شود
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      if (!response.ok) {
        // خطای HTTP (404, 500 …)
        throw new Error(`HTTP ${response.status} – ${response.statusText}`);
      }

      const json = (await response.json()) as T;
      setData(json);
    } catch (e) {
      // اگر درخواست به‌دلیل abort قطع شد، خطایی ثبت نمی‌کنیم
      if ((e as any).name !== "AbortError") {
        setError(e as Error);
      }
    } finally {
      setLoading(false);
    }

    // بازگشت توابع cleanup برای abort
    return () => controller.abort();
  }, [url, JSON.stringify(options), ...deps]); // eslint: react-hooks/exhaustive-deps

  // اجرا به‑صورت خودکار وقتی یکی از deps تغییر کند
  useEffect(() => {
    const cleanup = fetchData();
    return () => {
      // اگر fetchData یک توابع cleanup برگرداند، آن را اجرا می‌کنیم
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  // امکان فراخوانی دستی (مثلاً پس از عمل Refresh یا Mutation)
  const refetch = useCallback(() => fetchData(), [fetchData]);

  return { data, loading, error, refetch };
};
