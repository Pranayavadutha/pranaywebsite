document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'sent');
        // Add logic to process user input and get chatbot response
        // For demonstration purposes, adding a dummy response
        setTimeout(function() {
            appendMessage('I am a chatbot response!', 'received');
        }, 500);
        document.getElementById('user-input').value = '';
    }
}

function appendMessage(message, type) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
