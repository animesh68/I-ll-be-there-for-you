const API_BASE = "http://localhost:3000"; // change to your deployed backend URL

document.getElementById("date").innerText = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const entryText = document.getElementById("entry-text");
const charCount = document.getElementById("char-count");

entryText.addEventListener("input", () => {
  charCount.innerText = `${entryText.value.length} characters written`;
});

document.getElementById("save-entry").addEventListener("click", async () => {
  if (entryText.value.trim() === "") {
    alert("Please write something before saving 💜");
    return;
  }

  const aiBox = document.getElementById("ai-response");
  aiBox.innerText = "Reflecting on your entry... ✨";

  try {
    const res = await fetch(`${API_BASE}/api/ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "journal", content: entryText.value }),
    });

    const data = await res.json();
    console.log("Journal API response:", data);

    aiBox.innerText = data.reply || "⚠️ No response from AI";
  } catch (error) {
    console.error("Journal error:", error);
    aiBox.innerText = "⚠️ Sorry, I couldn’t reflect right now.";
  }

  entryText.value = "";
  charCount.innerText = "0 characters written";
});
