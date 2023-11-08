const readline = require('readline');

const predefinedResponses = {
    'hello': 'Hello there!','hi': 'Hello there!',
    'how are you': 'I am good if you are!',
    'what is your name': 'I am a chatbot, you can name me however you see fit',
    'exit': 'bye!',
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Chatbot: Hello! Type "exit" or "quit" to end the conversation.');

function chat() {
    rl.question('You: ', (userInput) => {
        const input = userInput.toLowerCase().trim();

        if (predefinedResponses[input]) {
            console.log(`Chatbot: ${predefinedResponses[input]}`);
        } else {
            console.log('Chatbot: I do not understand. Please ask a different question.');
        }

        if (input === 'exit' || input === 'quit') {
            rl.close(); // Terminate the chatbot
        } else {
            chat(); // Continue the conversation
        }
    });
}

chat();