import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryEl = galleryItems.map((item) => 
   `<div class="gallery__item"><a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
).join(" ");

galleryList.insertAdjacentHTML('afterbegin', galleryEl);

galleryList.addEventListener('click', onPictureClick)

let instance = {};

 
function onPictureClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }

  const options = {
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscapePress)
    }
  };


  instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, options)
  instance.show(document.addEventListener('keydown', onEscapePress));
  
};

function onEscapePress(e) {
  if (e.key === 'Escape') {
    instance.close(document.removeEventListener('keydown', onEscapePress));
  }
}