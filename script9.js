const displayBox = document.getElementById('main-display');
const displayText = document.getElementById('display-text');
const statusLog = document.getElementById('status-log');
const originalText = "Welcome to the Dynamic Customizer!";

// --- 1. Modular Functions (Callbacks) ---

/**
 * Callback 1: Changes the background color of the main display box.
 * @param {string} color - The new color to apply.
 */
function colorChanger(color) {
    displayBox.style.backgroundColor = color;
    displayBox.style.borderColor = color; // Change border color too
    statusLog.textContent = `Status: Color changed to ${color.toUpperCase()}`;
}

/**
 * Callback 2: Transforms the text content.
 * @param {string} type - The transformation type ('uppercase', 'lowercase', 'reset').
 */
function textTransformer(type) {
    let newText = displayText.textContent;
    let logMessage = '';

    // Task 4: Use conditional structures (switch) to route actions
    switch (type) {
        case 'uppercase':
            newText = newText.toUpperCase();
            logMessage = 'Text set to UPPERCASE';
            break;
        case 'lowercase':
            newText = newText.toLowerCase();
            logMessage = 'Text set to lowercase';
            break;
        case 'reset':
            newText = originalText;
            logMessage = 'Text has been reset';
            break;
        default:
            logMessage = 'Unknown text action';
            break;
    }

    displayText.textContent = newText;
    statusLog.textContent = `Status: ${logMessage}`;
}

// --- 2. Central Dispatcher Function (Uses Callbacks) ---

/**
 * Task 2: Central function to dispatch actions using callback functions.
 * @param {string} mode - The interaction mode ('color' or 'text').
 * @param {string} param - The parameter to pass to the callback.
 */
function applyAction(mode, param) {
    if (mode === 'color') {
        // Use colorChanger as a callback
        colorChanger(param); 
    } else if (mode === 'text') {
        // Use textTransformer as a callback
        textTransformer(param); 
    }
}


// --- 3. Higher-Order Function (HOF) Implementation ---

/**
 * Task 3: Higher-Order Function: logs the action and then executes a callback.
 * It accepts a function (callback) as an argument.
 * @param {Function} callback - A function to execute after logging.
 * @param {string} arg1 - The first argument for the callback.
 * @param {string} arg2 - The second argument for the callback.
 */
function executeAndLog(callback, arg1, arg2) {
    // 1. Log the action (Higher-Order Function logic)
    console.log(`[HOF] Preparing to run action: ${callback.name}`);
    statusLog.textContent = `Status: HOF executing ${callback.name}`;

    // 2. Execute the function passed as an argument (The Callback)
    if (arg2) {
        callback(arg1, arg2); // For applyAction
    } else {
        callback(arg1); // For single-argument callbacks
    }

    console.log(`[HOF] Action completed.`);
}

// --- HOF Demo Function ---

// Demonstrate the HOF by passing the central applyAction function as the callback.
function runHigherOrderDemo() {
    // Pass 'applyAction' as the callback function to 'executeAndLog'.
    // The HOF will first log, and then execute applyAction('color', 'purple').
    executeAndLog(applyAction, 'color', 'purple');
}