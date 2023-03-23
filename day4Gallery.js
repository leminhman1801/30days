const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const galleryInner = document.querySelector(".gallery-inner");
const imgSlide = document.querySelectorAll(".img-inner");
const modal = document.querySelector(".gallery-modal");
const btnTrans = document.querySelector(".btn-trans");
const imgGallery = document.querySelectorAll(".img-item");
let currentIndex = 0;
let size = 721;
let firstImgIndex = 0;
let lastImgIndex = imgSlide.length - 1;

imgGallery.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    console.log("hello");
    modal.classList.add("show");
    galleryInner.style.transform = "translateX(" + -size * currentIndex + "px)";
  });
});

function closeModal() {
  modal.classList.remove("show");
}

function clickOutside(event) {
  event.stopPropagation();
}
modal.addEventListener("click", closeModal);
galleryInner.addEventListener("click", clickOutside);
btnTrans.addEventListener("click", clickOutside);

function prevPic() {
  if (currentIndex >= 1) currentIndex--;
  if (imgSlide[currentIndex].id === "first-img") {
    currentIndex = firstImgIndex;
  }

  galleryInner.style.transform = "translateX(" + -size * currentIndex + "px)";
}
function nextPic() {
  if (imgSlide[currentIndex].id === "last-img") {
    currentIndex = lastImgIndex;
  }
  galleryInner.style.transform = "translateX(" + -size * currentIndex + "px)";
  currentIndex++;
}

nextBtn.addEventListener("click", nextPic);
prevBtn.addEventListener("click", prevPic);
