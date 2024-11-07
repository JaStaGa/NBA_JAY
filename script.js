// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected and ready!");

    const searchForm = document.getElementById("search-form");
    const statsTitle = document.getElementById("stats-title");

    // Handle form submission
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from reloading the page

        const playerName = document.getElementById("player-name").value;
        const bet = document.getElementById("bet").value;

        // Change the stats title to show the player name and bet
        statsTitle.textContent = `Stats: ${playerName} for ${bet}`;
    });
});


