<script setup>
import Carrousel from '../components/Carrousel.vue'
</script>

<template>
    <div class="elden-ring">
        <img src="../assets/elden-ring.jpg" id="elden-ring" alt="elden-ring">
    </div>
    <div class="accueil" id="presentation">
        <div class="colonne-gauche">
            <h2>
                Présentation :
            </h2>
            <p>
                Bonjour,
                <br>Je m'appelle Sofiane, un apprenti développeur web passionné par la création et l'innovation.
                <br>Mon parcours dans le monde du développement web a débuté avec ma fascination pour la manière dont
                les lignes de code peuvent donner vie à des idées et créer des expériences uniques.
                <br>
                <br>En dehors du code, je suis un fervent amateur de jeux vidéo, et ma passion s'étend particulièrement
                aux jeux de type Soul-like.
                <br>Ces jeux, exigeants et immersifs, m'ont inspiré à repousser mes propres limites en tant que
                développeur.
                <br>
                <br>Parmi eux, Elden Ring occupe une place spéciale dans mon cœur.
                <br>L'univers richement détaillé, le combat intense et l'histoire captivante font de ce jeu une source
                constante d'inspiration dans mon parcours de développement.
                <br>Mon objectif en tant qu'apprenti développeur web est de combiner ma passion pour la programmation
                avec l'esthétique et l'expérience utilisateur propre aux jeux que j'admirent.
                <br>Je suis constamment en quête d'apprentissage et de défis, aspirant à créer des solutions web aussi
                mémorables et vivantes que mes jeux préférés.
                <br>
                <br>Au plaisir de partager cette aventure passionnante avec vous !
            </p>
        </div>
        <div class="colonne-droite">
            <section>
                <h2>
                    Créations :
                </h2>
                <Carrousel />
                <img src="../assets/ronin.png" id="ronin" alt="ronin"><img src="../assets/ronin-bulle.png"
                    id="ronin-bulle" alt="ronin-bulle">
            </section>
        </div>
    </div>
    <form action="mailto: maliki@sofiane.com">
        <h2 id="contact">Formulaire de contact :</h2>
        <div class="form-group">
            <label for="exampleFormControlInput1">Nom :</label><br>
            <input type="nom" class="form-control" id="nom">
        </div><br>
        <div class="form-group">
            <label for="exampleFormControlInput1">Prénom :</label><br>
            <input type="prenom" class="form-control" id="prenom">
        </div><br>
        <div class="form-group">
            <label for="exampleFormControlInput1">Objet :</label><br>
            <input type="prenom" class="form-control" id="objet">
        </div><br>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Message :</label><br>
            <textarea class="form-control" id="message" rows="4"></textarea>
        </div>
        <button>Envoyer</button>
    </form>
</template>

<style scoped>
@media all and (max-width:768px) {
    .accueil {
        flex-direction: column;
    }

    .colonne-gauche {
        width: 100%;
    }
}

@media all and (max-width:1366px) {
    .accueil {
        flex-direction: column;
    }

    .colonne-gauche {
        width: 100%;
    }
}

h2 {
    color: #D69F59;
}

.elden-ring {
    display: flex;
    justify-content: center;
    /* Aligne horizontalement */
    align-items: center;
    /* Aligne verticalement */
    background-size: cover;
    background-repeat: repeat;
    height: 50vh;
}

.elden-ring img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 10%;
}

.accueil {
    display: flex;
    line-height: 2;
    font-size: 20%;
    margin-top: 20%;
}

.colonne-gauche {
    margin-right: 10%;
}

#ronin {
    width: 8%;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-bottom: 5%;
    margin-right: 5%;
}

#ronin-bulle {
    width: 12%;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-bottom: 5%;
    margin-right: 5%;
    visibility: hidden;
}

#ronin:hover+#ronin-bulle {
    visibility: visible;
}

.accueil {
    color: #FFDBAD;
    font-size: 15px;
}

.form-group {
    color: #FFDBAD;
}

textarea {
    width: 200px;
    height: auto;
}
</style>

<script>
export default {

}
</script>