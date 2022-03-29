import "virtual:windi-base.css";
import "./scss/style.scss";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "./js/timer";

if (location.pathname === "/") {
  import("./js/section-observer");
}
const impMap = () => {
  if (location.hash === "#vernissage" || location.hash === "#vilka-ar-vi") {
    import("./js/map");
    removeEventListener("popstate", impMap);
  }
};
addEventListener("popstate", impMap);

// // Hamburger
document.querySelector("body > header > nav").addEventListener("click", e => {
  const docElement = document.documentElement;
  const state = docElement.dataset.menuState;
  docElement.dataset.menuState = state ? "" : "open";
});

// const darkObserver = new MutationObserver(event => {
//   const sponsorer = document.getElementById('sponsorer')
//   sponsorer.querySelectorAll('img')
// });
// darkObserver.observe(document.documentElement, {
//   childList: false,
//   attributeFilter: ["class"],
// });
