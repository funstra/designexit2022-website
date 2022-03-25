const init = () => {
  document.querySelectorAll("main > section").forEach(section => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelector("body > header").dataset.current =
              section.id == "vilka-ar-vi" ? "vilka är vi" : section.id;
            section.classList.add("intersecting");
            if (location.hash != `#${section.id}`) {
              if (
                !(history.state === "student" && section.id === "vilka-ar-vi")
              ) {
                history.replaceState(null, null, `#${section.id}`);
              }
            }
            if (section.id === "vilka-ar-vi" || section.id === "vernissage") {
              import("./map");
            }
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
};

if (location.pathname === "/") {
  init();
}
