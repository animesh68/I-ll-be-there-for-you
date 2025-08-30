const API_BASE = "http://localhost:3000"; // change to your deployed backend URL

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const inputField = document.getElementById("user-input");

  sendBtn.addEventListener("click", sendMessage);
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  async function sendMessage() {
    const message = inputField.value.trim();
    if (!message) return;

    addMessage(message, "user");
    inputField.value = "";

    const thinkingMsg = addMessage("...", "bot");

    try {
      const res = await fetch(`${API_BASE}/api/ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "chat", content: message }),
      });

      const data = await res.json();
      console.log("Chat API response:", data);

      thinkingMsg.innerText = data.reply || "⚠️ No response from AI";
    } catch (err) {
      console.error("Chat error:", err);
      thinkingMsg.innerText = "⚠️ Sorry, I couldn’t connect right now.";
    }
  }

  function addMessage(text, sender) {
    const chatWindow = document.getElementById("chat-window");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageDiv.innerText = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return messageDiv;
  }
});
