// ==============================
// RÉCUPÉRATION DES INTERFACES
// ==============================

const interfaces = document.querySelectorAll(".interface");


// Fonction pour changer d'écran
function changerInterface(numero) {

    interfaces.forEach(function(interfaceElement) {
        interfaceElement.classList.remove("active");
    });

    document
        .getElementById("interface" + numero)
        .classList.add("active");
}


// ==============================
// ÉCRAN 1 : OUI / NON
// ==============================

const oui = document.getElementById("oui");
const non = document.getElementById("non");

oui.addEventListener("click", function() {

    changerInterface(2);

});


// Le bouton NON s'échappe
const messageNon = document.getElementById("message-non");

const messages = [
    "Tu es sûre ? 😏",
    "Mauvais choix 😂",
    "Essaie encore 😌",
    "Ce bouton ne veut pas être choisi 😂",
    "Hmm... réfléchis encore ❤️",
    "Tu pensais vraiment m'échapper ? 😏",
    "Le bouton Non est timide 🙈",
    "Allez... clique sur Oui ❤️"
];

const textesBouton = [
    "Non 😏",
    "Pas ici 😂",
    "Attrape-moi 😜",
    "Impossible 😎",
    "Toujours non ? 😂",
    "Essaie encore ❤️"
];

let tentativeNon = 0;


// Fonction qui fait fuir le bouton
function faireFuirLeBouton() {

    messageNon.textContent =
        messages[tentativeNon % messages.length];

    messageNon.classList.add("visible");

    non.textContent =
        textesBouton[tentativeNon % textesBouton.length];

    tentativeNon++;


    // Petite marge pour éviter les bords
    const marge = 25;

    const largeurDisponible =
        window.innerWidth - non.offsetWidth - marge * 2;

    const hauteurDisponible =
        window.innerHeight - non.offsetHeight - marge * 2;


    const x =
        marge + Math.random() * largeurDisponible;

    const y =
        marge + Math.random() * hauteurDisponible;


    non.style.position = "fixed";

    non.style.left = x + "px";
    non.style.top = y + "px";

    non.style.transition =
        "left 0.25s ease, top 0.25s ease, transform 0.2s";

    non.style.transform =
        "rotate(" + (Math.random() * 20 - 10) + "deg)";
}


// ORDINATEUR
non.addEventListener("mouseenter", function() {

    setTimeout(function() {
        faireFuirLeBouton();
    }, 100);

});


// MOBILE
non.addEventListener("touchstart", function(event) {

    event.preventDefault();

    faireFuirLeBouton();

});


// ==============================
// ÉCRAN 2 : LETTRE
// ==============================

const continuer = document.getElementById("continuer");

continuer.addEventListener("click", function() {

    changerInterface(3);

});


// ==============================
// ÉCRAN 3 : JOURS
// ==============================

const jours = document.querySelectorAll(".jours button");
const samedi = document.getElementById("samedi");

jours.forEach(function(jour) {

    if (jour !== samedi) {

        jour.addEventListener("click", function() {

            faireDisparaitreLesJours();

        });

    }

});


// Les jours s'envolent
function faireDisparaitreLesJours() {

    jours.forEach(function(jour) {

        if (jour !== samedi) {

            const x =
                (Math.random() - 0.5) * 800;

            const y =
                (Math.random() - 0.5) * 600;

            jour.style.setProperty("--x", x + "px");
            jour.style.setProperty("--y", y + "px");

            jour.style.animation = "envol 0.8s forwards";

        }

    });

}


samedi.addEventListener("click", function() {

    changerInterface(4);

});


// ==============================
// ÉCRAN 4 : MATIN / SOIR
// ==============================

const matin = document.getElementById("matin");
const soir = document.getElementById("soir");

matin.addEventListener("mouseover", function() {

    const largeur = window.innerWidth - matin.offsetWidth;
    const hauteur = window.innerHeight - matin.offsetHeight;

    const x = Math.random() * largeur;
    const y = Math.random() * hauteur;

    matin.style.position = "fixed";
    matin.style.left = x + "px";
    matin.style.top = y + "px";

});


soir.addEventListener("click", function() {

    changerInterface(5);

});


// ==============================
// ÉCRAN 5 : HEURE
// ==============================

const heure = document.getElementById("heure");

heure.addEventListener("click", function() {

    changerInterface(6);
    pluieDeCoeurs();

});
function pluieDeCoeurs() {

    for (let i = 0; i < 35; i++) {

        const coeur = document.createElement("div");

        coeur.className = "coeur-final";

        coeur.textContent = ["❤️", "💕", "💖", "💗", "💘"][
            Math.floor(Math.random() * 5)
        ];

        coeur.style.left =
            Math.random() * 100 + "vw";

        coeur.style.animationDelay =
            Math.random() * 2 + "s";

        coeur.style.fontSize =
            (15 + Math.random() * 25) + "px";

        document.body.appendChild(coeur);

        setTimeout(function() {
            coeur.remove();
        }, 6000);

    }

}