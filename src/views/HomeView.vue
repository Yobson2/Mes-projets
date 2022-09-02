<template>
        <NavBar />
        <div class="image1">
            <img src="../assets/Images/image1.jpg" id="image">
            <!-- <img src="../assets/Images/image2.jpg"> -->
            <div class="titre">
                <h1>meilleur médecin traditionnelle disponible pour m’aider</h1>
                <p class="sous_h1">nous croyons au meilleur service</p>
                <button id="button"><router-link to=" "  class="link" @click="alert('vggctcctctc')">notre service</router-link> </button>
            </div>
        </div>
       <div class="contenaire">
            <Bloc3 class="section1"/>
            <Bloc1 class="section2"/>
            <Bloc2 class="section3"/>
            
       </div>
       <FooterVue class="bas" />

</template>



<script>
import ('../../public/code-css/style.css')
import NavBar from '/src/components/NavBar'
import FooterVue from '/src/components/FooterVue'
import Bloc1 from '/src/components/Bloc1'
import Bloc2 from '/src/components/Bloc2'
import Bloc3 from '/src/components/Bloc3'
import {createUser, getUser} from '../../firebase'


export default {
  components:{
    NavBar,
    FooterVue,
    Bloc1,
    Bloc2,
    Bloc3
  },
  mounted(){
    //   getUser("7fRlvKHI6Hmc0JItjjDh")
    let contentTitre=document.querySelector('.titre');
   let titre=document.querySelector(".sous_h1").innerText;
   console.log(titre)
   let index=0;

function afficher(){
     contentTitre.textContent=titre.slice(0,index);
     index++;
     if(index>titre.length){
         index=0;
     }
 };
//  setInterval(afficher,100);
    }
}
</script>

<style scoped>
 .section1{
    margin-top: 500px;
    margin-bottom: 300px;
}
.section2{
    position: absolute;
    top: 238%;
    left: 50%;
}
.section3{
    position: absolute;
    top: 310%;
    left: 50%;

}
.bas{
    position: absolute;
    top: 340%;
}

.link{
text-decoration: none;
}
.link:hover{
    color: white;
}

</style>