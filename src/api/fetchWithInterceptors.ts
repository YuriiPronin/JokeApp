export const fetchWithInterceptor = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Помилка ${response.status}: неможливо отримати дані`;
      console.error("❌", message);
      throw new Error(message);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("❌ Fetch failed:", error);
    throw new Error("Невдала спроба з'єднання з сервером. Спробуйте пізніше.");
  }
};
