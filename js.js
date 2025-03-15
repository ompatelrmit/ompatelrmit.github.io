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
