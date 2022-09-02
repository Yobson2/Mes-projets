<template>
    <NavBar />
   <header><h1>/REGISTRE</h1></header>
    <img src="../assets/Images/2f515c4d60.jpeg" id="image_fond">
    <div class="page">

        <div class="cadre1">
            <img src="../assets/Images/picture3.jpg" id="image_conct">
        </div>
        <input type="checkbox" class="button">
        <div class="cadre2" >
            <form action="#" id="connexion">
                <div class="sous_cadre">
                    <img src="../assets/Logo/icons8-utilisateur-sexe-neutre-64.png" id="logo">
                    <h3>Sign In</h3>
                </div>
                <div class="sous_cadre2">
                    <p><input type="text" class="conct" placeholder="Username" required v-model="email"></p>
                    <p><input type="password" class="conct" placeholder="Password" required v-model="password"></p>
                </div>
                <input type="submit"  id="valider" value="Valider" @click="connexion  ">
                
            </form>
        </div> 
             <div class="cadre3" id="insc_cadre3">
            <form action="#" id="inscription" >
                <fieldset>
                    <legend>REGISTER FORM</legend>
                     <div class="blocs">
                    <p><input type="text" class="conct1" placeholder="Your Name"  required v-model="name"></p>
                    <p><input type="text" class="conct1" placeholder="Your Email" required v-model="email"></p>
                    <p><input type="password" class="conct1" placeholder="Password" required v-model="password"></p>
                    <p><input type="password" class="conct1" placeholder="Confirm Password" required v-model="confirmPassword"></p>
                     <p class="initialize">initialize<input type="checkbox" @click="initialiser"></p> 
                    </div>
                     <p><input type="submit"  id="Envoyer" value="Envoyer" @click="createAccount"></p>
                </fieldset>
            </form>
        </div>
        
     </div>
     <slider class="slide"/>
     <FooterVue />
</template>

<script>
import('../../public/code-css/formulaire.css')
import NavBar from '/src/components/NavBar'
import FooterVue from '/src/components/FooterVue'
import {createUser,loginUser,} from "../../firebase"

export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    },methods:{
      async createAccount(e){
          e.preventDefault()
        console.log(this.name ,this.email, this.password)
        await createUser({
            name: this.name,
            emai: this.email,
            passsword: this.password,
            
        }
        )
      },
      initialiser(){
          
            this.name=null
            this.email=null
            this.password=null
            this. confirmPassword=null
            console.log('donnees initialiser')
      },
      connexion(e){
          e.preventDefault()
          console.log(this.email, this.password)
          loginUser({
              emai: this.email,
              passsword: this.password
          }, (res)=>{
              console.log(res)
              res.user ? this.$router.push("/Consultation") : console.log(res.error)
          })
      }
    },components:{
        NavBar,
        FooterVue,
    },
 mounted(){
let cadre2=document.querySelector(".cadre2");
// console.log(cadre2);
let buttonCheck=document.querySelector('.button');
let cadre3=document.querySelector(".cadre3");
let mapage=document.querySelector(".page");



buttonCheck.addEventListener("click",function(){ 
    console.log('bonjour');
    if(buttonCheck.checked){
        cadre2.classList.remove("entrer")
        cadre2.classList.add("sortir");
        cadre3.classList.remove("sortir")
        cadre3.classList.add("entrer");
    }else{
        cadre3.classList.remove("entrer");
        cadre3.classList.add("sortir");
        cadre2.classList.remove("sortir")
        cadre2.classList.add("entrer");
    }
})
 }
}
</script>

<style>
   
</style>