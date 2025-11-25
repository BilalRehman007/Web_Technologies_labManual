// --- 1. Changing colors or styles (Uses 'this' keyword) ---
// Triggered by: Click on Button 1
function changeColor(element) {
    // The 'this' keyword from the HTML is passed as the 'element' argument.
    const colors = ["#2ecc71", "#f39c12", "#e74c3c", "#9b59b6"];
    const currentColor = element.style.backgroundColor;
    let newColor;

    // Cycle through colors
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    // Apply the new background color and text style using the referenced element
    element.style.backgroundColor = newColor;
    element.style.fontWeight = 'bold';
    element.textContent = `Color Changed to ${newColor}!`;
}

// --- 2. Modifying text ---
// Triggered by: Click on Text Block
function modifyText() {
    const textBlock = document.getElementById('text-block');
    const originalText = "Click Me to Change Text!";
    const newText = "Text Successfully Modified!";
    
    if (textBlock.textContent === originalText) {
        textBlock.textContent = newText;
        textBlock.style.backgroundColor = '#d1f2eb'; // Light teal
    } else {
        textBlock.textContent = originalText;
        textBlock.style.backgroundColor = '#ecf0f1'; // Original gray
    }
}

// --- 3. Increasing/decreasing size (Hover events) ---
const icon = document.getElementById('icon');

// Triggered by: mouseover event
function increaseSize() {
    // Increases size by scaling the element (visual demonstration)
    icon.style.transform = 'scale(1.8) rotate(360deg)';
}

// Triggered by: mouseout event
function decreaseSize() {
    // Returns to original size
    icon.style.transform = 'scale(1) rotate(0deg)';
}

// --- 4. Moving or transforming shapes (Double-click event) ---
// Triggered by: ondblclick event
function transformShape() {
    const shape = document.getElementById('shape');
    
    // Check current state to toggle transformation
    if (shape.style.borderRadius === '50%') {
        // Transform back to original square
        shape.style.borderRadius = '10px';
        shape.style.backgroundColor = '#e74c3c';
        shape.style.transform = 'translate(0)';
        shape.textContent = "Double Click to Transform";
    } else {
        // Transform into a circle and move it slightly
        shape.style.borderRadius = '50%'; // Make it a circle
        shape.style.backgroundColor = '#2980b9'; // Blue
        shape.style.transform = 'translateX(50px)'; // Move right by 50px
        shape.textContent = "I'm a Circle Now!";
    }
}

// --- 5. Modifying visibility (Toggle) ---
// Triggered by: Click on Toggle button
function toggleVisibility() {
    const box = document.getElementById('box-to-hide');
    
    if (box.style.opacity === '0' || box.style.visibility === 'hidden') {
        // Show the box
        box.style.opacity = '1';
        box.style.visibility = 'visible';
    } else {
        // Hide the box using opacity for a smooth fade effect (instead of display: none)
        box.style.opacity = '0';
        // Use a timeout or CSS transition for a smooth visual effect, 
        // but set visibility to hidden afterward to remove it from the layout flow
        setTimeout(() => {
            box.style.visibility = 'hidden';
        }, 500); // 500ms matches the CSS transition time
    }
}