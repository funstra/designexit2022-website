const sections = document.querySelectorAll("body > section");
document.querySelectorAll("main > section").forEach(section => {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector("body > header").dataset.current = section.id;
          section.classList.add("intersecting");
          // location.hash = section.id;
          if (location.hash != `#${section.id}`) {
            // history.pushState(null, null, `/#${section.id}`);
            history.replaceState(null, null, `/#${section.id}`);
            // location.replace(`#${section.id}`);
          }
          if (section.id === "vilka-ar-vi" || section.id === "vernissage") {
            import("./map");
            console.log("imported map");
          }
          // location.pathname = `/#${section.id}`
        } else if (!entry.isIntersecting) {
          section.classList.remove("intersecting");
        }
      });
    },
    {
      rootMargin: "-20% 0px -80% 0px",
    }
  );
  obs.observe(section);
});
// addEventListener("popstate", e => {
//   // e.preventDefault();
//   console.log(e);
//   // console.log(e);
//   // location.hash = location.hash.replace("#", "");
//   if (!location.hash) {
//     // location.hash = "start";
//   } else {
//     console.log(location.hash);
//     location.hash = location.hash.replace("#", "");
//   }
// });
