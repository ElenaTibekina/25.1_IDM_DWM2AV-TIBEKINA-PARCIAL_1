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
  if (modal) {
    modal.style.display = 'block';
    document.body.classList.add('no-scroll');
    modal.onclick = function(event) {
      if (event.target === modal) {
        closeModal(modalId);
      }
    };
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

// Scroll Indicator
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrolled}%`;
});
