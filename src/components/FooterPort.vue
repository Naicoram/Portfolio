<template>
    <footer>
        <div class="cadre">
            <img src="../assets/cadre-top.png" id="cadre" alt="cadre-top">
        </div>
        <div class="link">
            <a href="https://github.com/Naicoram" target="_blank"><img class="logo" src="../assets/git.png"
                    alt="Logo GitHub"></a>
            <a href="https://www.linkedin.com/in/sofiane-maliki-387509186/" target="_blank"><img class="logo"
                    src="../assets/linkedin.png" alt="Logo Linkedin"></a>
            <a href="https://www.instagram.com/sofiane.mlk/" target="_blank"><img class="logo" src="../assets/insta.jpg"
                    alt="Logo Instagram"></a>
        </div>
        <p>
            Dernière Mise à Jour le 25 Mars 2024.
        </p>
        <div class="cadre">
            <img src="../assets/cadre-bottom.png" id="cadre" alt="cadre-bottom">
        </div>
    </footer>
</template>

<style scoped>
@media all and (max-width:768px) {
    #cadre {
        width: 70%;
    }
}

@media all and (min-width:769px) {
    #cadre {
        width: 25%;
    }
}

footer img {
    width: 40px;
    height: auto;
    border-radius: 20px;
    margin: 10px;
}

.link {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cadre {
    display: flex;
    justify-content: center;
    align-items: center;
}

#cadre {
    height: auto;
}

footer p {
    text-align: center;
    color: #FFDBAD;
}
</style>
