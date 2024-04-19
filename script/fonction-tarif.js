function creerListeTarifs(){ //Comme pour les heures : tableau de correspondances mais de nombre + string !
    let listeTarifs = [15, 20, 60] //On définit les valeurs numériques (on imagine qu'on pourrait vouloir les réutiliser ailleurs ?)
    
    let listeTarifsTexte = ["€ - Tarif réduit", "€ - Tarif normal", "€ - Tarif 6 séances"] //On définit les textes
    
    let choixTarif = document.getElementById("tarif") //On récupère l'input heure
    
    let tableauListeTarifsLength = listeTarifs.length //Permet d'adapter si on ajoute des options en plus !
    
    for(let i = 0 ; i < tableauListeTarifsLength ; i++){ //J'utiliser une boucle for parce qu'avec un foreach j'aurais du mal à faire la correspondance entre les deux tableaux
        let nouvelleOptionTarif = document.createElement("option") //Pour chaque élément du tableau on ajoute une option avec une value + un texte associé
        nouvelleOptionTarif.value = "" + listeTarifs[i]
        nouvelleOptionTarif.textContent = "" + listeTarifs[i] + listeTarifsTexte[i]
        choixTarif.appendChild(nouvelleOptionTarif) //On ajoute l'option a la suite les unes des autres
    }
}