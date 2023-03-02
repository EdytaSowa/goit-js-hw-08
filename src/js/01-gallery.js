import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const newGallery = galleryItems
  .map(
    image => `
    <a class="gallery__item" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"
      />
    </a>`
  )
  .join(``);
list.insertAdjacentHTML('beforeend', newGallery);




let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
