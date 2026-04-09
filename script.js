document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
 
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor = "blue"; 
  });
 
 
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./images/assetshield2copy.png";
      toggled = false;
    } else {
      gallery.src = "./images/assetshield2copy.png"; 
      toggled = true;
    }
  });
 
 
 
  console.log("Page loaded!")
});
 
