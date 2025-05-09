function getFact() {
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    .then((response) => response.JSON())
    .then((data) => {
      document.getElementById("fact").textContent = data.text;
    })

    .catch((error) => {
      console.error("Error fetching fact:", error);
      document.getElementById("fact").textContent =
        "Oops, something went wrong!";
    });
}
getFact();

function goToGamePage() {
  window.location.href = "../game/game.html";
}

document.getElementById("play-game").addEventListener("click", goToGamePage);
