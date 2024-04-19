function creerListeHeures(){ //On va simplement faire une table de correspondance
    let listeHeures = [9,10,11,12,13,14,15,16,17] //On définit les heures
    let choixHeure = document.getElementById("heure") //On récupère l'input heure
    listeHeures.forEach(function(Heure){ 
        let nouvelleOptionHeure = document.createElement("option") //Pour chaque élément du tableau on ajoute une option avec une value + un texte associé
        nouvelleOptionHeure.value = "" + Heure
        nouvelleOptionHeure.textContent = "" + Heure + "h"
        choixHeure.appendChild(nouvelleOptionHeure) //On ajoute l'option a la suite les unes des autres
    })
}