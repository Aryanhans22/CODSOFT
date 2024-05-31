hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
  nav.classList.toggle("active");
};
let vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      // Validation logic
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const phoneInput = document.querySelector('input[name="phone"]');
      const messageInput = document.querySelector('textarea[name="message"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();

      // Regular expression for checking if the name contains only alphabets
      const nameRegex = /^[A-Za-z\s]+$/;

      // Regular expression for checking if the email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let isValid = true;

      // Check if name is alphabetic
      if (!nameRegex.test(name)) {
          alert('Please enter a valid name (only alphabets are allowed).');
          isValid = false;
          nameInput.focus();
          return;
      }

      // Check if email is valid
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          isValid = false;
          emailInput.focus();
          return;
      }
      //phone
      phoneInput.addEventListener("input", function() {
        if (phoneInput.value.length > 10) {
          phoneInput.value = phoneInput.value.slice(0, 10);
        }
      });

      // Check if all fields are filled
      if (name === '' || email === '' || phone === '' || message === '') {
          alert('Please fill in all fields.');
          isValid = false;
          return;
      }
      

      // If all fields are valid and filled, submit the form
      if (isValid) {
          // Submit the form
          form.submit();
          // Show a thank you message after 3 seconds
          setTimeout(function() {
              alert('Thank you for submitting!');
              // Reset the form
              form.reset();
          }, 2000);
      }
  });
});