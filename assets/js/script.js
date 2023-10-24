const body = document.getElementById("body");
const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const createGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = `${body.style.background};`;
};

color1.addEventListener("input", createGradient);

color2.addEventListener("input", createGradient);
