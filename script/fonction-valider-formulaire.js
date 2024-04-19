document.addEventListener("DOMContentLoaded", function() {//Pour lancer la validation du formulaire, on lance cette fonction une fois que l'HTML est chargé
    let envoyerFormulaire = document.querySelector("form") //On sélectionne le formulaire
    let bouton = document.querySelector("button") //On sélectionne le bouton

    function validerFormulaire() { //Pour valider le formulaire, on prend chaque champ et on utilise la fonction de vérification associée
        let baliseNom = document.getElementById("nom") //Permet de sélectionner l'entièreté du champ
        let nom = baliseNom.value //Permet d'assigner la valeur rentrée par l'utilisateur à une variable et de travailler avec

        let balisePrenom = document.getElementById("prenom") //On fait la même chose pour chaque champ
        let prenom = balisePrenom.value
        
        let baliseNumeroClient = document.getElementById("telephone")
        let numeroTelephoneClient = baliseNumeroClient.value

        let baliseEmail = document.getElementById("mail")
        let mailClient = baliseEmail.value

        let choixDate = document.getElementById("date")
        choixDate = choixDate.value
        
        let choixHeure = document.getElementById("heure")
        choixHeure = choixHeure.value

        let choixTarif = document.getElementById("tarif")
        choixTarif = choixTarif.value
        

        let nomValide = verificationNom(nom) //On passe chaque valeur au travers de la fonction de vérification, on assigne le résultat à une variable
        let prenomValide = verificationPrenom(prenom)
        let emailValide = verificationMail(mailClient)
        let numeroValide = verificationTelephone(numeroTelephoneClient)

        if (nomValide  //On vérifie les retours de toutes les fonctions de vérifications
            && prenomValide 
            && numeroValide 
            && emailValide
            && choixDate !== "" //La valeur NULL correspond au choix "pas de choix fait", donc si c'est autre chose, c'est que la personne a choisi un jour
            && choixHeure !== ""
            && choixTarif !== "") {
            bouton.disabled = false //Enlève l'attribut "disabled" du bouton HTML
        } else {
            bouton.disabled = true //Garde l'attribut disabled du bouton HTML
        }
    }

    envoyerFormulaire.addEventListener("input", validerFormulaire) //Sur le formulaire que l'on a stocké au début, 
    //on écoute à chaque fois qu'il y a un input et on utiliser la fonction "validerformulaire" pour voir si on enlève le disabled
    //Est-ce que c'est bien niveau performance ?

    envoyerFormulaire.addEventListener("submit", function() { //Quand on appuie sur le bouton pour envoyer de type submit, lance l'envoi du formulaire
        //Ce qui signifie pour nous "lancer print_post.php"
        envoyerFormulaire.submit()
    });

});