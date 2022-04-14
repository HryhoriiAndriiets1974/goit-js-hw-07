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
          data-source="${elem.original}"
          alt="${elem.description}"
         />
        </a>
      </div>`);
  });
// модалка
const instance = basicLightbox.create(`
<img class="modal" src="">`,
{
  onShow: (instance) => {
    window.addEventListener('keydown', onEscape);},}, {
  onClose: (instance) => {
    window.removeEventListener('keydown', onEscape);
  },},
  );
  gallery.onclick = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {return;}
    instance.element().querySelector('.modal').src = e.target.dataset.source;
    instance.show();
  }
  function onEscape(e) {
  if (e.key === "Escape") instance.close();
  }
