
// déclaration des constantes
const baliseImg = document.querySelector("#banner .banner-img");
const baliseDescription = document.querySelector("#banner p");
let carousel_etape = 0

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Boucler sur le tableau 

const dots = document.querySelector("#banner .dots");
for (let i = 0; i < slides.length; i = i + 1 ) {
	const divDot = document.createElement("div");
	divDot.classList.add("dot");
	if (i === 0){
		divDot.classList.add("dot_selected");
	}
	dots.appendChild(divDot);
	console.log(slides.length)
}

// Fonction 

function updateCarousel () {
	let ajoutDotSelection = document.querySelector(".dot.dot_selected");
	ajoutDotSelection.classList.remove("dot_selected");
	//condition pour aller de la première slide à la derniere slide 
	if (  carousel_etape < 0) {
		carousel_etape =  slides.length -1 ;
	}
	// condition pour passer de la fin du carrousel au debut du carrousel
	if (  carousel_etape > slides.length -1) {
		carousel_etape = 0 ;
	}
	// La dot selectionné se place automatiquement
	let position_dot = carousel_etape +1
	let currentDot = document.querySelector(".dots .dot:nth-child("+position_dot+")");
	currentDot.classList.add("dot_selected");
	// Accès aux valeurs de l'objet
	baliseImg.src = slides[carousel_etape].image;
	baliseDescription.innerHTML = slides[carousel_etape].tagLine;
}

// Evenement clique à droite

const flecheDroite = document.querySelector("#banner .arrow_right");
flecheDroite.addEventListener("click", ()=> {
	carousel_etape++

	updateCarousel()
})

// Evenement clique à gauche
const flecheGauche = document.querySelector("#banner .arrow_left");
flecheGauche.addEventListener("click", ()=> {
	carousel_etape--

	updateCarousel()
})