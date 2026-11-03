/**
 * FASKU Kyambogo Interactive Web Script
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (mainNav.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });
  }

  // 2. Registration Form Submission Handler
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('fullName').value;
      const studentId = document.getElementById('studentId').value;
      
      // Simple feedback indicator
      alert(`Thank you, ${name}! Your registration for FASKU Academic Registry (${studentId}) has been received successfully.`);
      
      regForm.reset();
    });
  }

  // 3. Newsletter Submission Handlers
  const newsletterForms = document.querySelectorAll('.newsletter-form, .brief-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert(`Thank you! ${emailInput.value} has been subscribed to FASKU updates.`);
        emailInput.value = '';
      }
    });
  });

});