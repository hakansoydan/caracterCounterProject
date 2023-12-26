const textarea = document.querySelector("textarea");
const totalCounter = document.querySelector(".totalCounter");
const remainingCounter = document.querySelector(".remainingCounter");

textarea.addEventListener("keyup", updateCountre);

function updateCountre() {
  totalCounter.textContent = textarea.value.length;
  remainingCounter.textContent =
    textarea.getAttribute("maxlength") - textarea.value.length;
}
updateCountre();
