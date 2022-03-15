const sections = document.querySelectorAll("body > section");
document.querySelectorAll("main > section").forEach(section => {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector("body > header").dataset.current = section.id;
          section.classList.add("intersecting");
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
