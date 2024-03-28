<template>
    <header class="sticky-header">
        <h1>
            Portfolio
        </h1>
        <div id="scrollToTop" class="scroll-to-top">
            <img src="../assets/logo.sm.png" alt="LOGO" id="logo" v-on:click="scrollToTop()">
        </div>
        <nav>
            <ul>
                <li>
                    <a href="mailto: maliki@sofiane.com" target="_blank">Email</a>
                </li>
                <li>
                    <a href="#presentation">Présentation / Créations</a>
                </li>
                <li>
                    <a href="#contact">Formulaire de contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.sticky-header {
    position: sticky;
    z-index: 1;
}

.scroll-to-top {
    cursor: pointer;
}

header {
    background-color: #000000;
    height: 5%;
    top: 5%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #D69F59;
    line-height: 2;
    /*interligne*/
    border-radius: 25px;
}

header h1 {
    margin-left: 5%;
    margin-top: auto;
    margin-bottom: auto;
    text-size-adjust: auto;
    color: #D69F59;
}

header nav {
    margin-right: 2%;
    text-size-adjust: auto;
    color: #D69F59;
}

nav a {
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
    font-weight: bold;
}

a {
    color: #D69F59;
}

@media all and (max-width:768px) {
    header img {
        width: 80%;
        margin-top: 1.5em;
        margin-left: 1em;
    }

    header h1 {
        display: none;
    }

    header {
        width: 100%;
    }
}

@media all and (min-width:769px) {
    header {
        width: 60%;
    }
}
</style>

<script setup>
function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox...
}
</script>