/** 
 * /**
 * 
 * Déclarer toutes les constantes des balises HTML à modifier  -- 5'
 * Comment créer un .dot --- 10'
 * Boucler sur le tableau pour créer un .dot par élement  -- 5'
 * Faire en sorte que le premier .dot est sélectionné -- 30'
 * Faire changer l'image et la tagLine au click sur la fleche de droite (1 fois) ! -- 5'
 * Remettre à 0 quand ça déborde -- 10'
 * Faire bouger le .dot_selected vers la droite (ou le remettre a 0 quand ça déborde) -- 25'
 * Faire le fonctionnement inverse pour la flèche de gauche -- 15' 
 * Remettre au max quand ça deborde vers la gauche -- 10'
 * --- TERMINÉ --- 1h55
 *    Mettre en function() le code commun des deux flèches -- 15'
 * --- Vraiment terminé  --- 2h10
 
 * Souhait client : 
 * Boucle à l'infini 
 * Dots à chaque image / dot rempli sur la bonne image. ex : img2 = dot 2 rempli
 * flèche sur le coté
 * 
 * setattribute a modifier
 * 
 ** Demarche
 * Au click on passe à l'autre image, le dot change également
 * Si on est à la dernière image et que l’on clique à droite : 
on affiche la première image ;
le point sélectionné est le premier.
Si on est à la première image et qu’on clique à gauche : 
on affiche la dernière image ;
le point sélectionné est le dernier. 
Dans tous les cas, le texte change en accord avec l’image montrée.
 */

// déclaration des constantes
const BaliseImg = document.querySelector("#banner .banner-img")
const BaliseDescription = document.querySelector("#banner p")
const Dots = document.querySelector("#banner .dots")


// Evenement clique à gauche

const flecheGauche = document.querySelector("#banner .arrow_left");
flecheGauche.addEventListener("click", ()=> {
	console.log("A gauche toute !")

})
// Evenement clique à droite

const flecheDroite = document.querySelector("#banner .arrow_right");
flecheDroite.addEventListener("click", ()=> {
	console.log("A droite toute !")

})

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

