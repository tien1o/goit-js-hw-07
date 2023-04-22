import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
  );

  gallery.insertAdjacentHTML("beforeend", galleryMarkup.join(""));
  console.log(galleryItems);

  const onContainerClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${source}"width="800" height="600">`);

    instance.show();
  };

  gallery.addEventListener("click", onContainerClick);
});
