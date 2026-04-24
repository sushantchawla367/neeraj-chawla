// Modal
function openModal() {
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Close menu when nav link is clicked
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
