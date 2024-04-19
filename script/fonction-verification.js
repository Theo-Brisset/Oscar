function verificationMail(mailClient) { //Ici on regarde si le mail correspond bien à la règle regExp ci-dessous
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+") //Ici on créé la règle
    if (emailRegExp.test(mailClient)) { //La on teste
        return true //Renvoie true si ça correspond (pas sur que ça soit obligatoire, à tester)
    }
    return false
}


function verificationTelephone(numeroTelephoneClient){ //Comme pour le mail, on a besoin de définir un règle pour vérifier qu'on a bien un n° de telephone
    let regExpTelephone = /0\d(?:\s*\d{2}){4}/ //On définit la règle correct (commence par 0, un chiffre, des espaces ou non et 4 fois deux chiffres)
    if(regExpTelephone.test(numeroTelephoneClient)){ //Et on teste la règle regExp !
        return true //Permet de valider le formulaire
    } 
    return false   
}

function verificationNom(nom){ //On va juste checker que c'est bien un nom pour être sur. 
    if(nom.length >= 2){ //Un nom de deux lettres ou plus
        return true
    } else{
        return false
    }
}

function verificationPrenom(prenom){ //Pareil que pour le nom
    if (prenom.length >= 2){
        return true
    } else{
        return false
    }
}
