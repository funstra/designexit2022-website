const iframe = document.querySelector("#artstep");

const artObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    const { target } = entries[0];
    console.log(target);
    target.src = "https://www.artsteps.com/embed/6294bb26d49dd68939cb9b9f/1280/720"
  }
});

artObs.observe(iframe);
