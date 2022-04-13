import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// галерея
const gallery = document.querySelector(".gallery");
galleryItems.forEach((elem) => {
    gallery.insertAdjacentHTML( "beforeend",
      `<div class="gallery__item">
        <a class="gallery__link" href="${elem.original}">
         <img
          class="gallery__image"
          src="${elem.preview}"
          data-source="${elem.preview}"
          alt="${elem.description}"
         />
        </a>
      </div>`);
  });
// модалка
  gallery.onclick = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {return;}
    basicLightbox.create(`
    <img src="${e.target.closest("a").href}">`).show();
  }
