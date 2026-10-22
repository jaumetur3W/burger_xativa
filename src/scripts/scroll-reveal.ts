const revealItems = [...document.querySelectorAll<HTMLElement>('.reveal')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealItems.length && !reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  revealItems.forEach((item) => observer.observe(item));
}
