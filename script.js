document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('main-nav');

  window.addEventListener('scroll', function () {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(4,11,36,0.97)';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.45)';
    } else {
      nav.style.background = 'rgba(5,11,44,0.92)';
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
});
