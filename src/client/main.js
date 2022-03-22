import "virtual:windi-base.css";
import "./scss/style.scss";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "./js/section-observer";
import "./js/student-handler";
import "./js/timer";
const impMap = () => {
  if (location.hash === "#vernissage" || location.hash === "#vilka-ar-vi") {
    import("./js/map");
    console.log("imported map");
    removeEventListener("popstate", impMap);
  }
};
// Hamburger
addEventListener("popstate", impMap);
document.querySelector("body > header > nav").addEventListener("click", e => {
  const docElement = document.documentElement;
  const state = docElement.dataset.menuState;
  docElement.dataset.menuState = state ? "" : "open";
  if (e.target.tagName === "A") {
    // e.preventDefault();
    // location.assign(e.target.href);
  }
});
