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
});
const buttonTrier = document.querySelector(".btn-trier-dec");
buttonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return b.prix - a.prix
    })
    console.log(piecesOrdonnees);
});
const buttonFilter = document.querySelector(".btn-filtrer-desc");
buttonFilter.addEventListener("click", function(){
    const piecesFilter = pieces.filter(function(piece){
        return piece.description
    })
    console.log(piecesFilter);
})


// function Lambda pour map pieces
// splice pour supprimer le noms de toutes les pieces non abordales
const noms = pieces.map(piece=>piece.nom);
for(let i=pieces.length-1 ;i >= 0 ; i--){
    if(pieces[i].prix > 35){
        noms.splice(i , 1)
    }
}
console.log(noms)

// creation de la liste 
const abordableElement = document.createElement("ul");
// Ajout de chaque nom à la liste
for(let i = 0 ; i < noms.length ; i ++){
    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordableElement.appendChild(nomElement)
};

// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordable')
   .appendChild(abordableElement);

   const nomDisponible = pieces.map(piece=>piece.nom);
   const prixDiponible = pieces.map(piece=>piece.prix);

   for(let i = pieces.length-1; i>=0 ;i--){
    if(pieces[i].disponibilite===false){
        nomDisponible.splice(i , 1)
        prixDiponible.splice(i , 1)
    }
   };

   const disponibleElement=document.createElement("ul");
   for(let i =0;i < nomDisponible.length ; i++){
     const nomElement = document.createElement("li")
     nomElement.innerText = `${nomDisponible[i]} - ${prixDiponible[i]} dt `
     disponibleElement.appendChild(nomElement)
   };
   document.querySelector(".P-disponible").appendChild(disponibleElement);


  




