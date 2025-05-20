import { getRandomFact } from "./src/js/utils/fetchFacts.js";
import { goToGamePage } from "./src/js/homePage.js";
import { createStars } from "./src/js/components/stars.js";

document
  .getElementById("get-fact-button")
  ?.addEventListener("click", getRandomFact);

document.getElementById("play-game")?.addEventListener("click", goToGamePage);

document.addEventListener("DOMContentLoaded", createStars);
