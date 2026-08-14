// Two-Way Section Entry & Exit Scroll Controller
export function initSectionTransitions() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cinematic-section-flow').forEach((sec) => {
      sec.classList.add('section-in-view');
    });
    return;
  }

  const sections = document.querySelectorAll('.cinematic-section-flow');
  if (!sections.length) return;

  function handleScrollTransitions() {
    const windowHeight = window.innerHeight;

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const height = rect.height;

      // 1. Entry Threshold: Coming into view from bottom
      if (top < windowHeight * 0.88 && bottom > windowHeight * 0.12) {
        sec.classList.add('section-in-view');
        sec.classList.remove('section-exited-above');
      } 
      // 2. Exit Threshold: Scrolled past upwards
      else if (bottom <= windowHeight * 0.12) {
        sec.classList.remove('section-in-view');
        sec.classList.add('section-exited-above');
      } 
      // 3. Exit Threshold: Scrolled back down below view
      else if (top >= windowHeight * 0.88) {
        sec.classList.remove('section-in-view');
        sec.classList.remove('section-exited-above');
      }
    });
  }

  window.addEventListener('scroll', handleScrollTransitions, { passive: true });
  window.addEventListener('resize', handleScrollTransitions, { passive: true });

  // Initial trigger
  setTimeout(handleScrollTransitions, 100);
}
