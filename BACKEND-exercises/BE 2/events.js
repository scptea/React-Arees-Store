const customEventEmitter = require('./customEmitter');

// Simulate users logging in every random number of seconds
function simulateUserLogin() {
  const randomSeconds = Math.random() * (2 - 0.1) + 0.1;
  const userNumber = Math.floor(Math.random() * 1000); // Generate a random user number

  setTimeout(() => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: USER_${userNumber} logged in`;

    console.log(logMessage);

    customEventEmitter.emit('userLoggedIn', logMessage);
    // Simulate user logout after a random period as well
    simulateUserLogout(userNumber);
    simulateUserLogin();
  }, randomSeconds * 1000);
}

// Simulate users logging out after a random number of seconds
function simulateUserLogout(userNumber) {
  const randomSeconds = Math.random() * (2 - 0.1) + 0.1;

  setTimeout(() => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: USER_${userNumber} logged out`;

    console.log(logMessage);

    customEventEmitter.emit('userLoggedOut', logMessage);
  }, randomSeconds * 1000);
}

customEventEmitter.on('userLoggedIn', (message) => {
  console.log(`Logged In Event: ${message}`);
});

customEventEmitter.on('userLoggedOut', (message) => {
  console.log(`Logged Out Event: ${message}`);
});

console.log('Simulating user logins and logouts...');
simulateUserLogin();
