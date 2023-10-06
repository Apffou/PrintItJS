/** Souhait client : 
 * Boucle à l'infini 
 * Dots à chaque image / dot rempli sur la bonne image. ex : img2 = dot 2 rempli
 * flèche sur le coté
 * 
 ** Demarche
 * Utilisation d'event listener click sur chaque fleche
 * Au click on passe à l'autre image, le dot change également
 * Si on est à la dernière image et que l’on clique à droite : 
on affiche la première image ;
le point sélectionné est le premier.
Si on est à la première image et qu’on clique à gauche : 
on affiche la dernière image ;
le point sélectionné est le dernier. 
Dans tous les cas, le texte change en accord avec l’image montrée.
 */


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


