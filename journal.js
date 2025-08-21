// Set today's date
document.getElementById("date").innerText = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

// Track character count
const entryText = document.getElementById("entry-text");
const charCount = document.getElementById("char-count");

entryText.addEventListener("input", () => {
  charCount.innerText = `${entryText.value.length} characters written`;
});

// AI supportive responses
const aiResponses = [
  "Thank you for writing 🌸. Sometimes letting thoughts out helps lighten the heart 💜.",
  "I can feel your honesty through your words ✨. Journaling is a powerful step toward healing.",
  "Your reflections matter 💭. Remember, even small steps forward are progress.",
  "What you wrote is important 🕊️. Be gentle with yourself as you process these thoughts.",
  "Every word you share is part of your journey 🌿. I’m here with you through it."
];

document.getElementById("save-entry").addEventListener("click", () => {
  if (entryText.value.trim() === "") {
    alert("Please write something before saving 💜");
    return;
  }

  // Pick random AI response
  const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
  document.getElementById("ai-response").innerText = randomResponse;

  // Clear text area (simulate save)
  entryText.value = "";
  charCount.innerText = "0 characters written";
});
