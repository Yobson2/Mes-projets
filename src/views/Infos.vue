<template>
   <div class="mmm">
        <div class="container">
            <img src="../assets/Images/consultation.jpg" alt="" id="font_consult">
              <form action="#">
                <h3>Consultation personnelle</h3>
                <div class="contenaire1">
                  <input type="text" placeholder="Nom de famille" class="contenu" v-model="name">
                  <input type="text" placeholder="Prenom" class="contenu" v-model="prenom">
                </div>
                <div class="contenaire1">
                    <input type="tel" placeholder="Numero de téléphone" class="contenu" v-model="phone" >
                    <input type="email" placeholder="Adresse email" class="contenu" v-model="email">
                </div>
                <div class="contenaire1">
                    <input type="text" placeholder="Intérêt pour la consultation" class="contenu" v-model="Intérêt_pour_la_consultation">
                    <input type="text" placeholder="Heure souhaitée pour la consultation" class="contenu" v-model="probleme">
                </div>
                <div class="contenaire2">
                    <div class="bloc1">
                        <label >Date de naissance</label> <br>
                        <input type="date" id="date" v-model="Date_de_naissance">
                    </div>
                     <div class="bloc2">
                        <label >Date de consultation</label><br>
                        <input type="date" id="date" v-model="Date_de_consultation">
                     </div>  
                </div>
                <div class="contenaire3">
                    <h4>les symptomes</h4>
                    <p>
                        <label>Grande fatigue</label>
                        <input type="checkbox" v-model="name">&nbsp;
                        <label>Diarrhées</label>
                        <input type="checkbox">&nbsp;
                        <label>Malaises</label>
                        <input type="checkbox">&nbsp;
                        <label>Nausées</label>
                        <input type="checkbox">&nbsp;
                    </p>
                    <p>
                        <label>Troubles du sommeil</label>
                        <input type="checkbox">&nbsp;
                        <label>Perte d'appétit</label>
                        <input type="checkbox">&nbsp;
                        <label>Fièvres</label>
                        <input type="checkbox">&nbsp;
                        <label>Autres</label>
                        <input type="checkbox">&nbsp;
                    </p>
                </div>
                <div class="contenaire3">
                    <textarea name="" id="" cols="70" rows="8" placeholder="Notes et demandes supplémentaires"></textarea>
                </div>
                <div class="soumettre"><input type="submit" value="Soumettre" id="soumettre"  @click="message"></div>
              </form>
           </div>
    </div>
   
</template>

<script>
import {createConsultation} from "../../firebase"
export default {
 data(){
     return{
         name:'',
         prenom:'',
         phone:'',
         email:'',
         Intérêt_pour_la_consultation:'',
         probleme:'',
         Date_de_naissance:'',
         Date_de_consultation:''

     }
 },
 methods:{
    async message(e){
          e.preventDefault()
     await createConsultation({
         name:this.name,
         prenom:this.prenom,
         phone:this.phone,
         email:this.email,
         Intérêt_pour_la_consultation:this.text,
         probleme:this.probleme,
         Date_de_naissance:this.Date_de_naissance,
         Date_de_consultation:this.Date_de_consultation
            
    }
        ) 
 }
}}
</script>

<style scoped>
    body{
    background-color: darkgray;
    background-repeat: none;
    padding: 0;
    margin: 0;
}
.mmm{
    position: relative;
    width: 100%;
    height: 100vh;
}
.container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 10px solid gray;
    height: 93vh;
    object-fit: cover;
    width: 80%;
    border-radius: 20px;
    background-color: aliceblue;
}
form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#font_consult{
    width: 100%;
    height: 91.3vh;
     border-radius: 10px;
}
h3{
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: xx-large;
    color: mediumblue;
}
.soumettre{
    text-align: center;
    margin-top: 40px;
}
#soumettre{
    width: 200px;
    height: 40px;
    margin: 10px auto;
}
.contenu{
    width: 300px;
    height: 40px;
    margin-left: 10px;
}
.contenaire1{
    margin-top: 30px;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: x-large;
    display: flex;
}
.contenaire2{
    margin-top: 20px;
   text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(39, 40, 41);
}
.contenaire3>h4{
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    color: #555;
    margin-bottom: 10px;
}

.bloc2{
    margin-left: 10px;
}
#date{
    width: 300px;
    height: 30px;
    color: blue;
}
.contenaire3{
    text-align: center;
    margin-top: 20px;
}

#message{
    width: 400px;
    height: 80px;
    border-radius: 2px;
    text-align: none;
}
#select{
    width: 140px;
    height: 30px;
    border-radius: 3px;
}

</style>