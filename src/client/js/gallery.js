const gallery = document.querySelector(".gallery");
const frame = gallery.querySelector(".frame");
const updateFrame = el => {
  frame.innerHTML = "";
  frame.appendChild(el);
};
const alster = document.querySelector(".student > .alster ul");

let currentIndex;
let alsters = [
  ...document.querySelectorAll(".student > .alster :is(img,video)"),
];

alster.addEventListener("click", e => {
  const target = e.target.firstElementChild;

  const clone = target.cloneNode();
  updateFrame(clone);

  currentIndex = alsters.findIndex(alster => alster.src == target.src);
  gallery.dataset.index = currentIndex;

  document.documentElement.classList.add("fullscreen");

  if (currentIndex == 0) {
    gallery.dataset.position = "first";
  } else if (currentIndex == alsters.length - 1) {
    gallery.dataset.position = "last";
  } else {
    gallery.dataset.position = "";
  }
});

gallery.querySelector(":scope > svg").addEventListener("click", e => {
  document.documentElement.classList.remove("fullscreen");
  frame.querySelector("video")?.pause();
});

gallery.addEventListener("click", e => {
  const { target } = e;
  const changeFrame = () => updateFrame(alsters[currentIndex].cloneNode());
  switch (target.dataset.target) {
    case "prev":
      currentIndex--;
      changeFrame();
      if (currentIndex == 0) {
        gallery.dataset.position = "first";
      } else {
        gallery.dataset.position = "";
      }
      break;
    case "next":
      currentIndex++;
      changeFrame();
      if (currentIndex == alsters.length - 1) {
        gallery.dataset.position = "last";
      } else {
        gallery.dataset.position = "";
      }
      break;
  }
});
