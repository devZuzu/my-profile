// navigation
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    toggleBtn.textContent = isOpen ? "✖" : "☰";
    toggleBtn.setAttribute("aria-expanded", isOpen);
});


// time in milliseconds
function updateTime() {
  const timeElement = document.getElementById('user-time');
  
  if (timeElement) {
    const now = new Date();

    const formattedTime = 
      now.toLocaleTimeString('en-US', { hour12: false }) + 
      '.' + now.getMilliseconds().toString().padStart(3, '0');

    timeElement.textContent = formattedTime;
  }
}

setInterval(updateTime, 1);



// contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

   
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

   
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorSubject = document.getElementById("error-subject");
    const errorMessage = document.getElementById("error-message");

    
    [errorName, errorEmail, errorSubject, errorMessage].forEach((el) => (el.textContent = ""));
    successMessage.textContent = "";

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
      errorName.textContent = "Full name is required.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errorEmail.textContent = "Please enter a valid email (name@example.com).";
      isValid = false;
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      errorSubject.textContent = "Subject is required.";
      isValid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      errorMessage.textContent = "Message is required.";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    
    if (isValid) {
      successMessage.textContent = "Your message has been sent successfully!";
      successMessage.style.color = "green";

    
      form.reset();

      
      setTimeout(() => {
        successMessage.textContent = "";
      }, 5000);
    }
  });
});
