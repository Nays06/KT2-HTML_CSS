let isScrollingBlocked = false;

function blockScrolling() {
  isScrollingBlocked = true;
  document.body.addEventListener("wheel", preventDefault, {
    passive: false,
  });
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false,
  });
  document.body.addEventListener("scroll", preventDefault, {
    passive: false,
  });
}

function unblockScrolling() {
  isScrollingBlocked = false;
  document.body.removeEventListener("wheel", preventDefault);
  document.body.removeEventListener("touchmove", preventDefault);
  document.body.removeEventListener("scroll", preventDefault);
}

blockScrolling();

function preventDefault(e) {
  if (isScrollingBlocked) {
    e.preventDefault();
  }
}

const anchorElements = document.querySelectorAll(".anchor-link");

anchorElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    unblockScrolling();

    const targetId = element.dataset.target;

    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector(".block_4-sleva-butt").addEventListener("click", () => {
  document.querySelector(".block_4-sprava").style.opacity = 1;
});

const images = document.querySelectorAll(".block_6-img img");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.querySelector(".modal-image");

images.forEach((image) => {
  image.addEventListener("dblclick", () => {
    modal.style.display = "block";
    modalImage.src = image.src;
  });
});

window.addEventListener("click", (event) => {
  modal.style.display = "none";
});

const galleryImgs = document.querySelector(".block_7-gallery-imgs");
const prevBtn = document.querySelector(".block_7-gallery-strelka.prev");
const nextBtn = document.querySelector(".block_7-gallery-strelka.next");
const imgs = galleryImgs.querySelectorAll(".block_7-gallery-img");
let currentIndex = 1;
const imgWidth = 150;
const centralImgWidth = 200;
const spacing = 20;

function updateGallery() {
  const totalWidth = imgWidth * 2 + centralImgWidth + spacing * 2;
  const translateX = -currentIndex * (imgWidth + spacing);
  galleryImgs.style.transform = `translateX(${translateX + 170}px)`;
  imgs.forEach((img) => (img.style.width = `${imgWidth}px`));
  imgs[currentIndex].style.width = `${centralImgWidth}px`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < imgs.length - 1) {
    currentIndex++;
    updateGallery();
  }
});
