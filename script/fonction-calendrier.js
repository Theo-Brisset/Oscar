//Au début, ce sont juste des tests pour m'entrainer, ne pas compter, je les garde pour mémoire// 
// let dateAujourdhui = new Date()
// console.log(dateAujourdhui)

// let jourSemaine = dateAujourdhui.getDay()
// console.log(jourSemaine)

// if(jourSemaine == 0 || jourSemaine == 6){
//     console.log("Nous ne sommes  pas ouvert !")
// } else{
//     console.log("Nous sommes ouverts !")
// }

// let dateDemain = new Date("04/05/2024")
// console.log(dateDemain)

// dateDemain.setDate(dateDemain.getDate() + 1)
// console.log(dateDemain)

// La fonction commence réellement ici. Il s'agit de créer un tableau de date dans lequel on va incrémenter des dates de J + 1 à J + 45


function creerCalendrier(){
    let dateAujourdhui = new Date()
    let datesCalendrier = [] //On fait un tableau pour stocker chacune des dates.
    let listeDate = document.getElementById("date") //On prend le select de l'HTML
    for(let index=1 ; index < 46 ; index++){
        let nouvelleDate = new Date(dateAujourdhui)
        nouvelleDate.setDate(nouvelleDate.getDate() + index) //Récupère le jour actuel et y ajoute l'index pour les récupérer 1 à 1
        let jourSemaine = nouvelleDate.getDay() //Récupère l'info sur quel jour de la semaine c'est (0=dimanche, 6=samedi). L'objectif est d'éliminer les jours non travaillés
        if(jourSemaine !== 0 && jourSemaine !== 6){ 
            datesCalendrier.push(nouvelleDate) //Ajoute la nouvelle date au tableau de dates
        }
    };

let correspondanceJour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
let correspondanceMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    
//Deuxième partie : on découpe la date en quelques éléments d'intérêts (jour, nombre, mois) pour l'insérer dans la liste sélect
    datesCalendrier.forEach(function(dateCalendrier){ 
        let dateCalendrierJour = dateCalendrier.getDay() //Le jour (lundi, mardi...) - attention ! Il est récupéré en chiffre et non en lettre
        dateCalendrierJour = correspondanceJour[dateCalendrierJour] //On établit la correspondance entre le nombre et le tableau
        let dateCalendrierNombre = dateCalendrier.getDate() //Le nombre du jour (1,2,3...)
        let dateCalendrierMois = dateCalendrier.getMonth() //Le nombre du mois (1,2,3...)
        dateCalendrierMois = correspondanceMois[dateCalendrierMois] //Pareil que pour le jour
        let nouvelleOption = document.createElement("option") //Ajout d'une option pour chaque date enregistrée
        nouvelleOption.value = "" + dateCalendrierNombre + dateCalendrierMois // Ajout d'information dans la value de l'option
        nouvelleOption.textContent = "" + dateCalendrierJour + " " + dateCalendrierNombre + " " + dateCalendrierMois //Ajout du texte affiché
        listeDate.appendChild(nouvelleOption)
    })
}
