const MenuIcon = document.querySelector("#menu-icon");
const MenuContent = document.querySelector(".res_nav");
MenuIcon.onclick = function () {
  MenuContent.classList.toggle("open");
};

//typing character logic

const textarray = ["Student", "Web Developer", "Front-end Developer"];
const typingdelay = 200;
const erasingdelay = 100;
const newtextdelay = 3000;
let textarrayindex = 0;
let charindex = 0;
const typedtext = document.querySelector(".typetext");
const cursor = document.querySelector(".cursor");

function type() {
  if (charindex < textarray[textarrayindex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    typedtext.textContent += textarray[textarrayindex].charAt(charindex);
    charindex++;
    setTimeout(type, typingdelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newtextdelay);
  }
}

function erase() {
  if (charindex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    typedtext.textContent = textarray[textarrayindex].substring(
      0,
      charindex - 1
    );
    charindex--;
    setTimeout(erase, erasingdelay);
  } else {
    cursor.classList.remove("typing");
    textarrayindex++;
    if (textarrayindex >= textarray.length) {
      textarrayindex = 0;
    }
    setTimeout(type, typingdelay + 1100);
  }
}

//menuicon changing logic

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newtextdelay + 100);
});

const menubutton = document.querySelector("#menu-icon");
let isRotated = false;

menubutton.addEventListener("click", function () {
  // menubutton.style.transform = "rotate(180deg)";

  if (menubutton.classList.contains("bx-menu")) {
    isRotated = !isRotated;
    this.style.opacity = "1";
    this.style.transform = `rotate(${isRotated ? 180 : 0}deg)`;
    this.style.opacity = "0.2";
    this.style.transition =
      "transform 0.4s ease-in-out, transform 0.4s ease-in-out";
  } else {
    isRotated = !isRotated;
    this.style.opacity = "1";
    this.style.transform = `rotate(${isRotated ? 180 : 0}deg)`;
    this.style.opacity = "0.2";
    this.style.transition =
      "transform 0.4s ease-in-out, transform 0.4s ease-in-out";
  }
});

menubutton.addEventListener("transitionend", function () {
  if (menubutton.classList.contains("bx-menu")) {
    this.classList.remove("bx-menu");
    this.style.opacity = "1";
    this.classList.add("bx-x");
  } else {
    this.classList.remove("bx-x");
    this.style.opacity = "1";
    this.classList.add("bx-menu");
  }
});

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Remove active class from all links
      document.querySelectorAll("a").forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // Smooth scroll to target section
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Handle active state based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a, .res_nav a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

document.querySelectorAll(".Download_CV").forEach((button) => {
  button.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Om_Patel_Resume.pdf"; // File path
    link.download = "Om_Patel_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

(function () {
  emailjs.init("z0mBOIFyhuA-EGvgh"); // Add your EmailJS public key here
})();

// Handle contact form submission
document
  .querySelector(".contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the send button and disable it
    const sendButton = document.getElementById("send-message");
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    // Get form data
    const formData = {
      name: this.user_name.value,
      message: this.message.value,
      subject: this.subject.value,
      phone: this.user_phone.value,
      email: this.user_email.value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_8y6mx3o", "template_x0suhho", formData)
      .then(
        function () {
          // Reset form
          document.querySelector(".contact_form").reset();
        },
        function (error) {
          // Show error message
          console.error("EmailJS Error:", error);
        }
      )
      .finally(function () {
        // Re-enable the send button
        sendButton.disabled = false;
        sendButton.textContent = "Send Message";
      });
  });
