document.documentElement.classList.add('js');
document.querySelectorAll('.reveal').forEach((item) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { item.classList.add('on'); return; }
  new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('on'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 }).observe(item);
});

const introSplash = document.querySelector('#intro-splash');
if (introSplash) {
  const clearIntro = () => { document.documentElement.style.overflow = ''; introSplash.remove(); };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    clearIntro();
  } else {
    document.documentElement.style.overflow = 'hidden';
    introSplash.addEventListener('animationend', (event) => {
      if (event.animationName === 'intro-hide') clearIntro();
    });
    setTimeout(clearIntro, 2600); // fallback in case the animation event doesn't fire
  }
}

