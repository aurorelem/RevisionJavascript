/*let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour le monde !";*/
/* Pour faire un commentaire en JS*/
//C'est pareil qu'en CSS

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/javascript.png") {
    myImage.setAttribute("src", "Images/javascript2.png");
  } else {
    myImage.setAttribute("src", "Images/javascript.png");
  }
});
