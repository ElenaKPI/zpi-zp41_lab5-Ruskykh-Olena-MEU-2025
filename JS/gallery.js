const images = [
  {
    preview: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop',
    original: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200',
    description: 'Розробники за роботою',
  },
  {
    preview: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop',
    original: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200',
    description: 'Світла ідея',
  },
  {
    preview: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
    original: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200',
    description: 'Макет веб-дизайну',
  },
  {
    preview: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=300&h=200&fit=crop',
    original: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200',
    description: 'Брейнштормінг у команді',
  },
{
  preview: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop',
  original: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
  description: 'Генерація ідей (нова версія)',
},
{
  preview: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
  original: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
  description: 'Розробники за роботою (нова версія)',
}
];

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
      <a href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(images);

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  const img = evt.target;
  if (img.nodeName !== 'IMG') return;

  const source = img.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}" alt="${img.alt}" />`);
  instance.show();
}
