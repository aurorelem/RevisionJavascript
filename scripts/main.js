/*let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour le monde !";*/
/* Pour faire un commentaire en JS*/
//C'est pareil qu'en CSS

//Voici comment ajouter un changeur d'image:

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/javascript.png") {
    myImage.setAttribute("src", "Images/javascript2.png");
  } else {
    myImage.setAttribute("src", "Images/javascript.png");
  }
});

//Voici comment ajouter un message d'accueil personnalisé:

let myButton = document.querySelector("button");//Cette ligne sélectionne le 1er élément de type '<button>' dans le document HTML et le stocke dans la variable 'myButton'.
let myHeading = document.querySelector("h1");//Cette ligne sélectionne le '<h1>' dans le document HTMK et le stocke dans la variable 'myHeading'.

function setUserName() { //Cette partie d code défini une fonction appelée
let myName = prompt("Veuillez saisir votre nom.");//Cette fonction est utilisée pour demander à l'utilisateur de saisir son nom à l'aide de la fonction 'prompt'
    localStorage.setItem("nom", myName);//Puis de stocker ce nom dans le localStorage du navigateur avec le clef "non"
    myHeading.textContent = "Mozilla est cool, " + myName;//Et enfin changer le contenu de '<h1>' pour inclure le nom saisi.
}

if (!localStorage.getItem("nom")) { //Cette structure conditionnelle (if ... else) vérifie si la clé "nom" extiste dans le localStorage du navigateur. 'localStorage.getItem("nom") renverra 'null' si la clef n'existe pas. Le point d'exclamation '!' devant signifie "si la clef n'existe pas" (c'est à dire si 'localStorage.getItem("nom")' est 'null'), alors il exécute la première partie du bloc 'if'.
    setUserName(); //Si la clef "nom" n'existe pas (la 1er fois que l'utilisateur accède à la page ou si le nom n'a pas encore été saisi), cette ligne appelle la fonction 'setUserName()' pour demander le nom à l'utilisateur et le stocker dans le localStorage, puis met à jour le contenu du '<h1>'.
    } else { //Sinon, il exécute la partie 'else'
    let storedName = localStorage.getItem("nom"); //Si la clef "nom" existe déjà dans le localStorage (c-à-d que l'utilisateur a déjà saisi son nom lors d'une visite précédente), cette ligne récupère le nom stocké dans le localStorage et le stocke dans la variable 'storedName'.
    myHeading.textContent = "JavaScript c'est cool, " + storedName;//Cette ligne met à jour le contenu du '<h1>' pour inclure le nom stocké. Si le nom a été saisi auparavant, le titre sera "JavaScript c'est cool, [nom stocké]".
    }

//En résumé, ce code demande à l'utilisateur de saisir son nom, stocke le nom dans le stockage local du navigateur et met à jour le contenu du titre <h1> pour inclure le nom. Lors des visites ultérieures de la page, le nom précédemment saisi sera récupéré depuis le stockage local et réaffiché dans le titre.