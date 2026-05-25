// Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('show');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (nav && menuToggle && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('show');
    }
  });
  
  // Drawer functionality
  const cartToggle = document.querySelector('[data-cart-toggle]');
  const wishlistToggle = document.querySelector('[data-wishlist-toggle]');
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  const wishlistDrawer = document.querySelector('[data-wishlist-drawer]');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const drawerCloseButtons = document.querySelectorAll('.drawer-close');
  
  function openDrawer(drawer) {
    if (drawer) {
      drawer.classList.add('show');
      drawerOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }
  
  function closeDrawer(drawer) {
    if (drawer) {
      drawer.classList.remove('show');
      drawerOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
  
  if (cartToggle) {
    cartToggle.addEventListener('click', () => openDrawer(cartDrawer));
  }
  
  if (wishlistToggle) {
    wishlistToggle.addEventListener('click', () => openDrawer(wishlistDrawer));
  }
  
  drawerCloseButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const drawer = this.closest('.drawer');
      closeDrawer(drawer);
    });
  });
  
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function() {
      document.querySelectorAll('.drawer.show').forEach(drawer => {
        closeDrawer(drawer);
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
