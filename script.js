// Array of photo paths (placeholders to avoid 404)
const photos = [
  'photos/photo1.jpg',
  'photos/photo2.jpg',
  'photos/photo3.jpg',
  'photos/photo4.jpg',
  'photos/photo5.jpg',
  'photos/photo6.jpg',
  'photos/photo7.jpg',
  'photos/photo8.jpg',
  'photos/photo9.jpg',
  'photos/photo10.jpg',
  'photos/photo11.jpg'
];

// Select gallery container
const gallery = document.getElementById('gallery');
let currentIndex = 0;

// Create photo cards
photos.forEach((photo, index) => {
  const photoCard = document.createElement('div');
  photoCard.classList.add('photo-card');

  const img = document.createElement('img');
  img.src = photo;
  img.alt = `Photo ${index + 1}`;
  photoCard.appendChild(img);

  const actions = document.createElement('div');
  actions.classList.add('photo-actions');
  const downloadLink = document.createElement('a');
  downloadLink.href = photo;
  downloadLink.download = `photo${index + 1}.jpg`;
  downloadLink.textContent = '⬇️ Download';
  actions.appendChild(downloadLink);
  photoCard.appendChild(actions);

  gallery.appendChild(photoCard);

  img.addEventListener('click', () => openLightbox(index));
});

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Open lightbox
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = photos[currentIndex];
}

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display='none'; });

// Prev/Next buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  lightboxImg.src = photos[currentIndex];
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  lightboxImg.src = photos[currentIndex];
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if(lightbox.style.display === 'flex') {
    if(e.key === 'ArrowRight') nextBtn.click();
    else if(e.key === 'ArrowLeft') prevBtn.click();
    else if(e.key === 'Escape') closeBtn.click();
  }
});
