<template>
   <NavBar />

    <div class="accueil">
        <img src="../assets/Images/1506542205-wizodiax1.jpg" alt="" class="image">
        <h1>LOUER, ACHETER, VENDRE <br>
            BIENVENUE SUR IMMOBILIER CHAPCHAP</h1>
    </div>
    <div class="elements">
        <h1>Nos services</h1>
        <div class="cadre">
            <div class="elem1">
                <div class="pin1">
                   <img src="../assets/Images/modernisierung-wohnung-giessen.jpg" alt="">
                </div>
                <h2>Louer</h2>
                <p>Vous êtes en quête de l'appartement idéal ou de bureaux qui vous ressemblent? Voyez les offres qui vous intéressnt vraiment...</p>
            </div>
            <div class="elem1">
                <div class="pin1">
                    <img src="../assets/Images/OIP.jpg" alt="">
                </div>
                <h2>Acheter</h2>
                <p>Vous souhaitez faire l'acquisition d'un terrain, d'un appartement ou d'une maison? C'est par ici... </p>
            </div>
            <div class="elem1">
                <div class="pin1">
                    <img src="../assets/Images/judge-shatrese-flowers9.jpg" alt="">
                </div>
                <h2>Nous rejoindre</h2>
                <p>Vous recherchez un moyen rapide et efficace pour vendre votre bien ou le mettre en location? </p>
            </div>
        </div>
    </div>
    <div class="contenaire">
        <div class="cont_slide">
            <img src="../assets/Images/2307850.jpg" alt="">
            <img src="../assets/Images/modernisierung-wohnung-giessen.jpg" alt="">
            <img src="../assets/Images/2307850.jpg" alt="">
            <img src="../assets/Images/OIP.jpg" alt="">
            <img src="../assets/Images/167-keramine_ploice_egeo_1.jpg" alt="">
            <img src="../assets/Images/R.jpg" alt="">
            <img src="../assets/Images/318201003532204.jpg" alt="">
            <img src="../assets/Images/524202083423AM241hl4qg_Big.jpg" alt="">
            <img src="../assets/Images/R2.png" alt="">
        </div>
        <div class="cont_element">
            <h1>Qui sommes-nous?</h1>
            <p>Etes-vous à la recherche d’un Appartement à louer à Cocody Abidjan ? d’un appartement meublé à Marcory 
                Zone 4 ? D’une villa ou maison à vendre à Abidjan Bingerville ? d’un terrain en vente à Songon ou Jacqueville?
                 D’un bureau ou magasin à Treichville ? Vous êtes au bon endroit. Bienvenue sur roof.ci, la plateforme immobilière 
                 de référence en Côte d’Ivoire etc..</p>
        </div>
        
    </div>
    <Footer />
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
    NavBar,
    Footer
},mounted(){
  window.addEventListener('load',()=>{

let slider=document.querySelector('.cont_slide')
let move=null
let count=0

function avance(){
    move=-1
    slider.style.transition=`0.5s`
    slider.style.transform=`translate{-400px}`
    modif()
}

function modif(){
    if(move===-1){
        slider.appendChild(slider.firstElementChild)
    }else{
        slider.prepend(slider.lastElementChild)
    }
    slider.style.transition="none"
    slider.style.transform=`translate(10px)`
}

setInterval(avance,1000)
})

}}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:ital@0;1&display=swap');
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: darkgray;
}
.accueil{
    width: 100%;
    position: relative;
    text-align: center;
    margin-top: 19px;
}
.accueil .image{
    width: 100%;
    height: 70vh;
    object-fit: cover;
    
}
.image:hover{
    transform: none;
}
.accueil h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: darkgray;
    font-family: 'Poppins', sans-serif;
    background-color: #0c0c0c;
    opacity: 0.4;
   width: 100%;
    
}
.elements{
    width: 100%;
}
.elements h1{
    text-align: center;
    font-size: xx-large;
}

.elements .cadre{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 80px;
    margin-bottom: 80px;

}
img{
    width: 400px;
    height: 250px;
}
img:hover{
    transform: scale(0.9);
}
.cadre .elem1{
    width: 400px;
}
.cadre .elem1 h2, p{
    text-align: center;
}

.contenaire{
    width: 100%;
}
.contenaire .cont_slide{
    display: flex;
    width: 70%;
    margin: 0px auto;
    overflow: hidden;
    margin-bottom: 50px;
}
.contenaire .cont_slide img{
    margin-left: 20px;
}

.cont_element{
    width: 80%;
    margin: 10px auto;
}
.cont_element h1{
    text-align: center;
    color: blue;
}
</style>