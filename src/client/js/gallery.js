const gallery = document.querySelector(".gallery");
const alster = document.querySelector(".student > .alster ul");

let currentIndex;
let alsters = [...document.querySelectorAll(".student > .alster img")];

alster.addEventListener("click", e => {
  const { target } = e;
  gallery.querySelector("div:nth-child(2) img").src = target.src;
  gallery.querySelector("div:nth-child(2) img").srcset = target.srcset;
  currentIndex = alsters.findIndex(alster => alster.src == target.src);
  gallery.dataset.index = currentIndex;
  document.documentElement.classList.add("fullscreen");

  if (currentIndex == 0) {
    gallery.dataset.position = "first";
  }
  if (currentIndex == alsters.length - 1) {
    gallery.dataset.position = "last";
  }
});

// const light = document.getElementById("light");
// light.addEventListener("click", e => {
//   document.documentElement.classList.remove("fullscreen");
// });

gallery.querySelector(":scope > svg").addEventListener("click", e => {
  document.documentElement.classList.remove("fullscreen");
});

gallery.addEventListener("click", e => {
  const { target } = e;
  switch (target.dataset.target) {
    case "prev":
      gallery.querySelector("div:nth-child(2) img").src =
        alsters[currentIndex - 1].src;
      gallery.querySelector("div:nth-child(2) img").srcset =
        alsters[currentIndex - 1].srcset;
      currentIndex--;
      if (currentIndex == 0) {
        gallery.dataset.position = "first";
      } else {
        gallery.dataset.position = "";
      }
      break;
    case "next":
      gallery.querySelector("div:nth-child(2) img").src =
        alsters[currentIndex + 1].src;
      gallery.querySelector("div:nth-child(2) img").srcset =
        alsters[currentIndex + 1].srcset;
      currentIndex++;
      if (currentIndex == alsters.length - 1) {
        gallery.dataset.position = "last";
      } else {
        gallery.dataset.position = "";
      }
  }
  gallery.dataset.index = currentIndex;
});
