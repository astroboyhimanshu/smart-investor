const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function askGemini(prompt: string): Promise<string> {
  const response = await fetch(`${baseUrl}/gemini/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch investment recommendation");
  }

  const data = await response.json();
  return data.result;
}
