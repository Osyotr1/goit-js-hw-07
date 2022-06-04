import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryEl = galleryItems.map((item) => 
   `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`
).join(" ");

galleryList.insertAdjacentHTML('afterbegin', galleryEl);


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

gallery.on('show.simplelightbox', function () {
      //
});