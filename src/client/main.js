import "virtual:windi-base.css";
import "./scss/style.scss";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "./js/section-observer";
import "./js/student-handler";
import "./js/timer";
import "./js/map";
import "./js/knappar";

// Hamburger
document.querySelector("body > header > nav").addEventListener("click", e => {
  const docElement = document.documentElement;
  const state = docElement.dataset.menuState;
  docElement.dataset.menuState = state ? "" : "open";
});
