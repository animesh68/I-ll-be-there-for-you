document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

// Pool of supportive responses
const botResponses = [
  "Thank you for sharing 🌸. Remember, it's okay to feel what you're feeling. You're not alone 💜.",
  "I hear you 💭. Take things one step at a time—you’re stronger than you think ✨.",
  "Your feelings are valid 💙. I’m here to listen whenever you need to talk.",
  "Sometimes it’s hard, but talking about it helps 💌. You’re doing a brave thing right now.",
  "You deserve kindness and patience 🌿. Remember to take care of yourself today.",
  "It’s okay to rest when you need to 🕊️. You don’t have to carry everything at once."
];

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (!message) return;

  // Show user message
  addMessage(message, "user");

  // Clear input
  inputField.value = "";

  // Random supportive bot response
  setTimeout(() => {
    const randomMsg = botResponses[Math.floor(Math.random() * botResponses.length)];
    addMessage(randomMsg, "bot");
  }, 600);
}

function addMessage(text, sender) {
  const chatWindow = document.getElementById("chat-window");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.innerText = text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

