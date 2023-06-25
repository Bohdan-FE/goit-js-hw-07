import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

function createMarkup(obj) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
    <img
      class="gallery__image"
      src="${obj.preview}"
      data-source="${obj.original}"
      alt="${obj.description}"
    />
  </a>
</li>`;
}

list.insertAdjacentHTML(
  "beforeend",
  galleryItems.map((obj) => createMarkup(obj)).join("")
);

function createMarkupInstance({ source } = {}) {
  return `
    <img src="${source}" width="800" height="600">
    `;
}

list.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    // findItem(evt.target);
    const instance = basicLightbox.create(
      createMarkupInstance(evt.target.dataset)
    );
    instance.show();

    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
}
