import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
function createMarkup(obj) {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${obj.original}">
      <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
   </a>
</li>`;
}

list.insertAdjacentHTML(
  "beforeend",
  galleryItems.map((obj) => createMarkup(obj)).join("")
);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
