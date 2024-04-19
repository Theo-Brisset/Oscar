//Ici, j'ai besoin que les fonctions soient chargées après que le reste de la page arrive
//sinon je peux pas aller chercher des éléments dans l'HTML : ils ne sont pas chargés avant les scripts qui sont dans le head
document.addEventListener("DOMContentLoaded", function() { 
    creerListeTarifs()
    creerListeHeures()
    creerCalendrier()
});