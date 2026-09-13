document.documentElement.classList.add('js');
document.querySelectorAll('.reveal').forEach((item) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { item.classList.add('on'); return; }
  new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('on'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 }).observe(item);
});

const intro = document.querySelector('#site-intro');
const skipIntro = document.querySelector('#skip-intro');
if (intro && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !sessionStorage.getItem('novara-intro-seen')) {
  document.documentElement.classList.add('intro-active');
  const closeIntro = () => {
    intro.classList.add('is-leaving');
    document.documentElement.classList.remove('intro-active');
    sessionStorage.setItem('novara-intro-seen', 'true');
    window.setTimeout(() => { intro.hidden = true; }, 450);
  };
  const timer = window.setTimeout(closeIntro, 3000);
  skipIntro.addEventListener('click', () => { window.clearTimeout(timer); closeIntro(); }, { once: true });
} else if (intro) {
  intro.hidden = true;
}
const intro = document.querySelector("#site-intro");
const skipIntro = document.querySelector("#skip-intro");

if (intro) {
  document.documentElement.classList.add("intro-active");

  const closeIntro = () => {
    document.documentElement.classList.remove("intro-active");
    intro.hidden = true;
  };

  const timer = setTimeout(closeIntro, 3000);

  skipIntro.addEventListener("click", () => {
    clearTimeout(timer);
    closeIntro();
  });
}
