// Function to copy contact information to the clipboard
function copyToClipboard() {
    const contactText = document.getElementById('contact').innerText;
    navigator.clipboard.writeText(contactText).then(() => {
        showStatusMessage("Contact copied to clipboard!");
    }).catch(() => {
        showStatusMessage("Failed to copy contact.");
    });
}

// Function to display status message
function showStatusMessage(message) {
    const statusElement = document.getElementById('status');
    statusElement.innerText = message;

    // Fade out status message after 3 seconds
    setTimeout(() => {
        statusElement.innerText = '';
    }, 3000);
}