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
addEventListener("popstate", e => {
  console.log(e.state);
  console.log("popin");
  if (e.state === "student") {
    location.reload();
  }
});
document.querySelector("#vilka-ar-vi")?.addEventListener("click", e => {
  if (e.target.tagName === "A" && e.target.origin == location.origin) {
    e.preventDefault();
    history.replaceState("student", null, `/#${e.target.closest(".card").id}`);
    history.pushState("student", null, e.target.href);
    location.reload();
  }
});
if (location.hash) {
  document.querySelector("main").style.scrollBehavior = "auto";
  document.querySelector(location.hash).scrollIntoView({
    behavior: "auto",
  });
  setTimeout(() => {
    document.querySelector("main").style.scrollBehavior = "smooth";
  }, 1);
}
document.querySelector("body > header > nav").addEventListener("click", e => {
  const docElement = document.documentElement;
  const state = docElement.dataset.menuState;
  docElement.dataset.menuState = state ? "" : "open";
  if (e.target.tagName === "A") {
    e.preventDefault();
    location.replace(e.target.href);
  }
});
