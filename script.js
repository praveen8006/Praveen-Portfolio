// Toggle the mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const bars = document.querySelectorAll(".bar");
const Icon = document.querySelector(".icon");
const closeIcon = document.querySelector(".icon");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  bars.forEach((bar) => bar.classList.toggle("hidden"));
  Icon.classList.toggle("hidden");
});

document.body.addEventListener("click", (event) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    !mobileMenu.contains(event.target)
  ) {
    navLinks.classList.remove("active");

    bars.forEach((bar) => bar.classList.remove("hidden"));
    closeIcon.classList.add("hidden");
  }
});

// for form sumbition


document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return; 
    }

    let formData = new FormData(this);

    try {
      let response = await fetch("https://formspree.io/f/mkgjoagd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      let result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        this.reset(); 
      } else {
        alert("Error submitting form: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });
