//récupiration des pieces depuit le fichier json
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
for (let i= 0; i < pieces.length; i++) { 
const aritcle = pieces[i];
// création des balises 
const pieceElement = document.createElement("article");
const imageElement = document.createElement('img');
imageElement.src = aritcle.image;
const nameElement = document.createElement('h2');
nameElement.innerText = aritcle.nom;
const prixElement =document.createElement('p');
prixElement.innerText = `prix: ${aritcle.prix} dt (${aritcle.prix < 35 ? 'dt' : 'dtt'})`;
const categorieElement = document.createElement('p');
categorieElement.innerText = aritcle.categorie ?? "aucune categorie"; // ?? lopperateur nullish pour ne pas afficher la valeur undifind en cas de na'pas de categorie
const descriptionElement = document.createElement("p");
descriptionElement.innerText = aritcle.description ?? 'pas de description pour le moment';
const disponibleElement = document.createElement("p");
disponibleElement.innerText = aritcle.disponibilite  ? 'En stock' : 'Rupture de stock';
// ratachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
//on rattache la balise article ala section fiches
sectionFiches.appendChild(pieceElement);
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nameElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(disponibleElement);

}
//gestion de boutton 
const bouttonTrier = document.querySelector(".btn-trier");
bouttonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
           return a.prix - b.prix
    })
    console.log(piecesOrdonnees);
});
const bouttonFilter = document.querySelector(".btn-filtrer");
bouttonFilter.addEventListener("click", function(){
const piecesFilter = pieces.filter(function(piece){
              return piece.prix <= 35;
})
console.log(piecesFilter)
})

