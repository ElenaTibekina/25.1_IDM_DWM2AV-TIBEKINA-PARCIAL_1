'use strict';
// Mobile Navigation
document.querySelectorAll('.navigation__link').forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('navi-toggle');
    checkbox.checked = false;
  });
});

// Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'block';
  document.body.classList.add('no-scroll');

  const escKeyListener = (event) => {
    if (event.key === 'Escape') {
      closeModal(modalId);
      document.removeEventListener('keydown', escKeyListener);
    }
  };

  const clickOutsideListener = (event) => {
    if (event.target === modal) {
      closeModal(modalId);
    }
  };

  modal.addEventListener('click', clickOutsideListener);
  document.addEventListener('keydown', escKeyListener);

  modal._clickOutsideListener = clickOutsideListener;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');

  if (modal._clickOutsideListener) {
    modal.removeEventListener('click', modal._clickOutsideListener);
    delete modal._clickOutsideListener;
  }
}

// Scroll Indicator
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrolled}%`;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const activeElement = document.activeElement;
    const modalId = activeElement?.getAttribute('data-modal');
    if (modalId) {
      openModal(modalId);
    }
  }
});
