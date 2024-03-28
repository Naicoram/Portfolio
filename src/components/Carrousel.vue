<template>
    <div id="carrousel">
        <div id="container" :style="{ width: 600 * images.length + 'px' }">
            <div v-for="(image, index) in images" :style="{ backgroundImage: 'url(' + image.image + ')' }"
                class="img projet" :id="index" v-on:click="openModal">
            </div>
        </div>
        <img src="../assets/arrow.png" class="button" id="g" alt="left button" v-on:click="gOnclick()">
        <img src="../assets/arrow.png" class="button" id="d" alt="right button" v-on:click="dOnclick()">
    </div>
    <div id="myModal" class="modal" v-on:click="closeModal">
        <div class="modal-content">
            <span class="close" v-on:click="closeModalX">&times;</span>
            <img id="modalImage" src="" alt="modal">
            <p id="modalText"></p>
        </div>
    </div>
</template>

<style scoped>
#carrousel {
    max-width: 100%;
    width: 600px;
    height: 300px;
    border: solid 4px #D69F59;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

#carrousel:hover {
    box-shadow: 0 5px 15px #D69F59;
}

#container {
    width: 100%;
    height: 100%;
}

.img {
    width: 100%;
    height: 100%;
}

.modal-content {
    width: fit-content;
    margin: auto;
    margin-top: 5%;
}

.close {
    position: absolute;
    left: 5%;
    top: 10%;
    z-index: 6;
    font-size: 5em;
    color: #D69F59;
    cursor: pointer;
}

#myModal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background-color: rgba(112, 108, 108, 0.247);
}

#modalText {
    color: black;
    background-color: white;
    border-radius: 15px;
    text-align: center;
}

.projet {
    width: 600px;
    height: 300px;
    margin: 0;
    display: inline-block;
    background-size: cover;
}

.button {
    position: absolute;
    width: 15%;
    cursor: pointer;
    top: 110px;
}

#d {
    right: 0;
    opacity: 0.4;
    transform: rotate(0deg);
    transition: all 0.3s ease;
}

#d:hover {
    transform: rotate(0deg) scale(1.1);
    opacity: 1;
    transition: all 0.3s ease;
}

#g {
    left: 0;
    opacity: 0.4;
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

#g:hover {
    transform: rotate(180deg) scale(1.1);
    opacity: 1;
    transition: all 0.3s ease;
}
</style>

<script setup>
import { onMounted } from 'vue';
const images = [
    {
        image: "/src/assets/img1.jpg",
        text: '<h1>Cahier des charges</h1>Crée le 20/01/2024 à partir du logiciel OpenOffice.<br><a href="../src/assets/CdC Sofiane Maliki.pdf" target="_blank">Voir le fichier</a><br><a href="https://github.com/Naicoram/CV-Sofiane-MLK" target_"blank">Lien GitHub'
    },
    {
        image: "/src/assets/img2.jpg",
        text: '<h1>CV Web</h1>Crée le 09/12/2023 à partir du logiciel Visual Studio Code, coder en html et css.<br><a href="../src/assets/CV.HTML""../src/assets/CV.css" target="_blank">Voir le fichier</a><br><a href="https://github.com/Naicoram/CV-Sofiane-MLK" target_"blank">Lien GitHub'
    },
    {
        image: "/src/assets/img3.jpg",
        text: '<h1>Dynamiser un espace commentaires</h1>Crée le 26/02/2024 à partir du logiciel Visual Studio Code, codé uniquement en JavaScript.<br><a href="../src/assets/index.html" target="_blank">Voir le fichier</a>'
    },
]
let nbr = images.length
let container
let p = 0
function gOnclick() {
    if (p < 0)
        p++;//ça fait p+1
    container.style.transform = "translate(" + p * 600 + "px)";
    container.style.transition = "all 0.5s ease";
}
function dOnclick() {
    if (p > -nbr + 1)
        p--;//ça fait p-1
    container.style.transform = "translate(" + p * 600 + "px)";
    container.style.transition = "all 0.5s ease";
}
onMounted(() => {
    // équivalent onload
    container = document.getElementById('container')
});
function openModal(event) {
    let num = parseInt(event.target.id)
    let modal = document.getElementById("myModal")
    let modalImage = document.getElementById("modalImage")
    let modalText = document.getElementById("modalText")
    modalImage.src = images[num].image
    modalText.innerHTML = images[num].text
    modal.style.display = "block";
}
function closeModal(event) {
    let modal = document.getElementById("myModal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function closeModalX() {
    let modal = document.getElementById("myModal")
    modal.style.display = "none";
}
</script>
