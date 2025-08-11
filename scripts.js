
// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const themeToggleButton = document.getElementById("theme-toggle");

  // Toggle Dark Mode
  body.classList.toggle("dark-mode");

  // Save Theme Preference
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");

  // Change Button Icon
  themeToggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Apply Saved Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggleButton = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️"; // Sun icon for light mode
  } else {
    themeToggleButton.textContent = "🌙"; // Moon icon for dark mode
  }
});

// Apply Saved Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  startTypingEffect();
  updateYear();
});

// Animated Typing Effect for Header
const textArray = ["Fullstack  Developer", "Frontend Developer", "Backend Developer","React.js Developer","Resume Writer & Analyzer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;
const animatedTextElement = document.getElementById("animated-text");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    animatedTextElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    animatedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, typingSpeed);
});
// Email Sending Function using EmailJS
// Initialize EmailJS
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("JFPMzJuAjsa2--urK"); // Replace with your actual public key
});

function sendEmail(event) {
  event.preventDefault(); // Prevent form reload

  // Get form data
  const formData = {
    name: document.querySelector("[name='name']").value,
    email: document.querySelector("[name='email']").value,
    message: document.querySelector("[name='message']").value,
  };

  // Send email using EmailJS
  emailjs.send("service_t8sl8hs", "template_yx2vyeu", formData, "JFPMzJuAjsa2--urK")
    .then(response => {
      alert("✅ Email sent successfully!");
      document.querySelector("form").reset(); // Clears the form after submission
    })
    .catch(error => {
      console.error("Error:", error);
      alert("❌ Failed to send email. Please try again.");
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Interactive Project Modals
document.querySelectorAll(".about-btn").forEach(button => {
  button.addEventListener("click", function () {
    alert("More details about this project will be available soon!");
  });
});

// Update Footer Year Automatically
function updateYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}
//pagniation logic
let currentPage = 1;
const servicesData = [
  { img: "assets/Forntend.jpg", title: "Frontend Development", description: "Building modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React." },
  { img: "assets/Backend.jpg", title: "Backend Developement", description: "Designing visually appealing interfaces with a focus on user experience and accessibility." },
  { img: "assets/Resume.jpg", title: "Resume Writer & Analyzer", description: "Creating efficient server-side applications using Node.js, Express.js, and database integration." }
];



const serviceCard = document.querySelector(".service-card");
const pageNumberDisplay = document.getElementById("page-number");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

function updateCard(page) {
  const service = servicesData[page - 1];

  serviceCard.style.opacity = "0"; // Fade out effect
  setTimeout(() => {
    serviceCard.innerHTML = `
      <img src="${service.img}" alt="${service.title}">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;

    serviceCard.style.opacity = "1"; // Fade in effect

    pageNumberDisplay.textContent = page;
    prevButton.disabled = (page === 1);
    nextButton.disabled = (page === servicesData.length);
  }, 300);
}

// Change Page
function changePage(step) {
  currentPage += step;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > servicesData.length) currentPage = servicesData.length;

  updateCard(currentPage);
}

