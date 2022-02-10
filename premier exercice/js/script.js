
var nom = prompt("Quel est votre nom?") ;

function askName(){

var text = " Bonjour " + nom ;

text = document.body.innerHTML += "<h2>" + text + "</h2>"
}


var MonAnnee = prompt("Quel est ton année de naissance ?");

function askBirthYear(){
var Monage = 2022 - MonAnnee;

var texte = " Vous avez " + Monage

texte = document.body.innerHTML += "<h3>" + texte + " ans " + "</h3>"
}

askName(nom)
askBirthYear(MonAnnee)

var mois = prompt("Quel est ton mois de naissance ?");
