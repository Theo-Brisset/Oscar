<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OSCAR</title>
        <link rel="icon" href="img/icone.png">
        
        <!-- Ce script est là parce que j'ai envie d'avoir un reset de certaines règles CSS. J'ai enlevée celles qui m'embetent. -->
        <link href="styles/reset.css" rel="stylesheet">
        <link href="styles/style.css" rel="stylesheet">
        <script src="script/fonction-calendrier.js"></script>
        <script src="script/fonction-heure.js"></script>
        <script src="script/fonction-tarif.js"></script>
        <script src="script/fonction-verification.js"></script>
        <script src="script/fonction-valider-formulaire.js"></script>
        <script src="script/fonctions.js"></script>
    </head>
    <body>
        <header>
            <div class="deux-colonnes">
                <div>
                    <img src="img/logoCliniqueOscar.jpg" alt="Bienvenue sur le site de la clinique Oscar !">
                </div>
                <div>
                    <p>CERTIFICATION</p>
                    <img src="img/sante.jpg" alt="Notre clinique détient l'agrément du ministère de la Santé pour pouvoir exercer son activité">
                    <p>PRENEZ RENDEZ-VOUS</p>
                </div>
            </div>
            <div class="banniere">
                <div>
                    <h1>Réservez une consultation ostéopathique</h1>
                </div>
            </div>
        </header>
        <main>
            <div class="conteneurPrincipal">
                <p>Chaque consultation dure environ 45 minutes.</p>
                <ul>
                    <li>15 € pour les enfants, les étudiants et les tarifs réduits</li>
                    <li>20 € pour le tarif adulte</li>
                    <li>60 € pour 6 séances</li>
                </ul>
                <p>En clinique les soins sont dispensés par nos étudiants encadrés par des <b>enseignants ostéopathes professionnels.</b></p>
                <p>Merci de renseigner les champs ci-dessous.</p>
                <form action="script/print_post.php" method="post" name="rendezVous"  target="_blank">
                    <div>
                        <label for="nom">Nom<span class="obligatoire" required>*</span></label>
                        <input type="text" name="nom" id="nom" placeholder="Buisson" >
                    </div>
                    <div>
                        <label for="prenom">Prénom<span class="obligatoire" required>*</span></label>
                        <input type="text" name="prenom" id="prenom" placeholder="Marie" >
                    </div>
                    <div>
                        <label for="telephone">Téléphone<span class="obligatoire" required>*</span></label>
                        <input type="text" name="telephone" id="telephone" placeholder="07 77 77 77 77">
                    </div>
                    <div>
                        <label for="mail">Courriel<span class="obligatoire" required>*</span></label>
                        <input type="text" name="mail" id="mail" placeholder="monmail@mail.com" >
                    </div>
                    <div>
                        <label for="date">Date RDV<span class="obligatoire" required>*</span></label>
                        <select name="date" id="date" >
                            <option value="" hidden>-- Choisissez un jour --</option>
                        </select>
                    </div>
                    <div>
                        <label for="heure">Heure RDV<span class="obligatoire" required>*</span></label>
                        <select name="heure" id="heure" >
                            <option value="" hidden>-- Choisissez une heure --</option>
                        </select>
                    </div>
                    <div>
                        <label for="tarif">Tarif<span class="obligatoire" required>*</span></label>
                        <select name="tarif" id="tarif" >
                            <option value="" hidden>-- Choisissez un tarif --</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="rgpd" id="rgpd" required>
                        <label for="rgpd"><i>J'autorise la clinique Oscar à  utiliser mes coordonnées uniquement pour me contacter et gérer mon rendez-vous.</i></label>
                    </div>
                    <button type="submit" disabled>Prendre RDV</button>
                </form>
            </div>
        </main>
        <footer>
            <img src="img/logoEcoleOscar.jpg" alt="">
            <div>
                <address>
                    <p>ECOLE OSCAR</p>
                    <p><br>Campus privé d'Alsace</p>
                    <p>24a Rue des Magasins - 67000 Strasbourg</p>
                    <p>Tel: +33 (0)3 88 23 14 14 - info@ecoleoscar.com</p>
                </address>
            </div>
        </footer>
    </body>
</html>