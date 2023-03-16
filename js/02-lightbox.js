import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const images = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
const galleryContainer = galleryList.insertAdjacentHTML("beforeend", images);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryContainer);
