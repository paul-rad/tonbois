(() => {
  const local = ['pa', 'ul'].join('');
  const host = ['dinneratmy', 'place', '.', 'com'].join('');

  document.querySelectorAll('[data-contact]').forEach((button) => {
    button.addEventListener('click', () => {
      const subject = button.dataset.subject || 'Hello Tonbois';
      window.location.assign(`mailto:${local}@${host}?subject=${encodeURIComponent(subject)}`);
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
