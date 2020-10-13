const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "learning.","gaming.","teaching.","working.","getting centered.",
    "keeping in touch.","streaming.","creating.","everything."
    ];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

 function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

window.onload = function() {
  if (screen.width < 480) {
    let popover_content = document.querySelectorAll(".popover-content-mobile");
    for (let i = 0; i < popover_content.length; i++) {
      // popover_content[i].classList.remove("hide-content");
      popover_content[i].classList.add("show-content"); 
    }
  }
  else {
    let popover_content = document.querySelectorAll(".popover-content-mobile");
    for (let i = 0; i < popover_content.length; i++) {
      // popover_content[i].classList.remove("show-content");
      popover_content[i].classList.add("hide-content"); 
    }
  }
}

function myfunction() {
  if (screen.width < 480) {
    let popover_content = document.querySelectorAll(".popover-content-mobile");
    for (let i = 0; i < popover_content.length; i++) {
      popover_content[i].classList.remove("hide-content");
      popover_content[i].classList.add("show-content"); 
    }
  }
  else {
    let popover_content = document.querySelectorAll(".popover-content-mobile");
    for (let i = 0; i < popover_content.length; i++) {
      popover_content[i].classList.remove("hide-content");
      popover_content[i].classList.add("hide-content"); 
    }
  }
}

// if(screen.width>425){
//   document.querySelector.classList('bg13').style.visibility='hidden';
// }

