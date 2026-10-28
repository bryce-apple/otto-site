// Click a framed screenshot to see it large. Escape or a click outside closes;
// the arrow keys and the two buttons walk through the page's pictures.
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll('.frame img'));
  if (!imgs.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close">close ×</button>' +
    '<button type="button" class="lightbox-prev" aria-label="Previous picture">←</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lightbox-next" aria-label="Next picture">→</button>';
  document.body.appendChild(box);

  var big = box.querySelector('img');
  var cap = box.querySelector('figcaption');
  var current = -1;

  function captionFor(img) {
    var fig = img.closest('figure');
    var c = fig && fig.querySelector('figcaption');
    return c ? c.textContent.replace(/\s+/g, ' ').trim() : (img.alt || '');
  }
  function show(i) {
    current = (i + imgs.length) % imgs.length;
    var img = imgs[current];
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || '';
    cap.textContent = captionFor(img);
    if (box.hidden) {
      box.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    box.querySelector('.lightbox-close').focus();
  }
  function hide() {
    box.hidden = true;
    document.body.style.overflow = '';
    if (current >= 0) imgs[current].focus({ preventScroll: true });
  }

  imgs.forEach(function (img, i) {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { show(i); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); }
    });
  });
  box.querySelector('.lightbox-close').addEventListener('click', hide);
  box.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
  box.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) hide(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') hide();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();
