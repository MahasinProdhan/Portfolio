const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendContactForm = async (data) => {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
};
