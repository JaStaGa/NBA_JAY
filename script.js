// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected and ready!");

    const searchForm = document.getElementById("search-form");

    // Handle form submission
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the page from reloading

        const playerName = document.getElementById("player-name").value;
        const bet = document.getElementById("bet").value;

        // Log the values to ensure they are being captured
        console.log("Player Name:", playerName);
        console.log("Bet:", bet);

        // Placeholder for later API call
        alert(`Player: ${playerName} | Bet: ${bet}`);
    });
});
