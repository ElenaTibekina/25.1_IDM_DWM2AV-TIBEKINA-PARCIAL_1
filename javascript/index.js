'use strict';
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', () => {
      const checkbox = document.getElementById('navi-toggle');
      if (checkbox) checkbox.checked = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const activeElement = document.activeElement;
      const modalId = activeElement?.getAttribute('data-modal');
      if (modalId) openModal(modalId);
    }
  });
});

function escKeyListener(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        closeModal(modal.id);
      }
    });
    document.removeEventListener('keydown', escKeyListener);
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.classList.add('no-scroll');

    modal.onclick = function (event) {
      if (event.target === modal) {
        closeModal(modalId);
      }
    };

    document.addEventListener('keydown', escKeyListener);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
    modal.onclick = null;
  }
}
