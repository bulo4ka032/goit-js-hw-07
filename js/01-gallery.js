import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);

let currentBasicLigthBox = null;

const images = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
const gallery = galleryList.insertAdjacentHTML("beforeend", images);
console.log(gallery);

// const image = document.querySelector(".gallery__item");

function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  currentBasicLigthBox = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}"></img>
    `,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscPressed);
      },
    }
  );
  currentBasicLigthBox.show();
  document.addEventListener("keydown", onEscPressed);
}

function onEscPressed(event) {
  if (event.code === "Escape") {
    currentBasicLigthBox.close();
  }
}
