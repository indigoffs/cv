const images = document.querySelectorAll('.img-wrap img');

function lazyLoad() {
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    }
  });
}

window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);
window.addEventListener('load', lazyLoad);