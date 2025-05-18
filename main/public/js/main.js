import { getRandomFact } from "./utils/fetchFacts.js";
import { goToGamePage } from "./pages/homePage.js";
import { createStars } from "./components/stars.js";

document
  .getElementById("get-fact-button")
  ?.addEventListener("click", getRandomFact);

document.getElementById("play-game")?.addEventListener("click", goToGamePage);

document.addEventListener("DOMContentLoaded", createStars);
