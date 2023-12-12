//cursor
const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
    cursor.style.display = "block";
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
//animatedText

const words = [
 
  "Web Developer. ",
  "Frontend Developer. ",
  
];
let index = 0;
const paragraph = document.getElementById("front");
const staticText = "Hi, I'm Leyla and I'm a ";
const textColor = "#0d6128"; // Color for the typed words

function typeWord() {
  const word = words[index];
  let i = 0;

  function type() {
    if (i < word.length) {
      paragraph.innerHTML =
        staticText +
        `<span style="color:${textColor}">${word.substring(0, i)}</span>|`;
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(eraseWord, 2000);
    }
  }

  type();
}

function eraseWord() {
  let i = words[index].length;

  function erase() {
    if (i >= 0) {
      paragraph.innerHTML =
        staticText +
        `<span style="color:${textColor}">${words[index].substring(
          0,
          i
        )}</span>|`;
      i--;
      setTimeout(erase, 100);
    } else {
      index = (index + 1) % words.length;
      setTimeout(typeWord, 1000);
    }
  }

  erase();
}

typeWord();



