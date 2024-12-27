// Select the celebrate button
const celebrateButton = document.getElementById('celebrate-btn');

// Add a click event listener to the button
celebrateButton.addEventListener('click', () => {
    // Create confetti effect
    generateConfetti();
    // Change button text
    celebrateButton.textContent = "🎉 Thanks for Celebrating! 🎉";
    celebrateButton.style.backgroundColor = "#ffd700"; // Gold color
    celebrateButton.style.transform = "scale(1.2)";
});

// Function to generate confetti
function generateConfetti() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        body.appendChild(confetti);
    }

    // Remove confetti after 5 seconds
    setTimeout(() => {
        document.querySelectorAll('.confetti').forEach((c) => c.remove());
    }, 5000);
}

// Function to generate random colors
function getRandomColor() {
    const colors = ['#ff6f61', '#ffd700', '#ff9a9e', '#fad0c4', '#85e3ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}