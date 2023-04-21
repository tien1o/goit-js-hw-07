import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  );

  gallery.insertAdjacentHTML("beforeend", galleryMarkup.join(""));
  console.log(galleryItems);

  const galleryLinks = document.querySelectorAll(".gallery__link");
  galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });

  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const itemsLigthbox = document.querySelectorAll(".gallery__link");
  itemsLigthbox.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      lightbox.classList.add("active");
      const itm = document.createElement("img");
      itm.src = item.href;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(itm);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
});
