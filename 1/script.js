const btn = document.querySelector('.j-btn-test');
const newDiv = document.getElementById("newDiv");
const oldDiv = document.getElementById("oldDiv");

let isDiv1Visible = true;

btn.addEventListener("click", () => {
  if (isDiv1Visible) {
    
    oldDiv.style.display = "none";
    newDiv.style.display = "block";
  } else {
    
    oldDiv.style.display = "block";
    newDiv.style.display = "none";
  }
  isDiv1Visible = !isDiv1Visible;
});
btn.classList.toggle('btn--magic');