<template>
    <body>
     
        <NavBar />

    
    <form action="#">
        <h3>Formulaire de contact</h3>
        
       <div class="container">
        <div class="form3">
            <p>Nom</p>
            <input type="text" class="donnee">
            <p>E-mail</p>
            <input type="email" class="donnee"> 
        </div>
        <div class="form3">     
                <p>Prénom</p>
                <input type="text" class="donnee" >
                <p>Téléphone</p>
                <input type="tel" class="donnee"> 
        </div>
       </div>
        <div class="form3">
                <p>Sujet du message</p>
                <select>
                    <option >Inscrire mon bien</option>
                    <option >Demande d'informations</option>
                    <option>Autres</option>
                </select>
                   <p>Votre message</p>
                   <textarea ></textarea>
        </div>
        <input type="submit" value="Envoyer" id="Send">
    </form>
    <Footer />
</body>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
    NavBar,
    Footer
},
    data(){
        return{

        }
    },
mounted(){
    let validationInput=document.querySelectorAll('.donnee')
        for (let i =0;i < validationInput.length;i++) {
            const element = validationInput[i];
            console.log(element)
            element.addEventListener('input',(e)=>{
            
            if(e.target.value.length >=5){
                element.style.borderColor="blue";
                console.log( 'bonjour')
            }else{
                element.style.borderColor="red";
            }
        
        })
        }
      
}
}
</script>

<style scoped>
    .footer{
        margin-top: 200px;
    }
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: rgb(139, 148, 148);
    
}
form{
    margin-top: 140px;
    height: 70vh;
    /* margin-left: 100px; */
    width: 100%;
    margin-bottom: 300px;
}
.form3{
    margin-left: 20px;
}
.container{
    display: flex;

}
.donnee{
    width: 350px;
    height: 50px;
    border: 1px solid #000;
    outline: none;
} 
 p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
}
h3{
    font-size: x-large;
    margin-left: 120px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    letter-spacing: 0.3ch;
    /* margin-top: 200px; */
}
select{
    height: 40px;
    width: 1200px;
    font-weight: 1000;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: large;
    color: gray;
}
textarea{
    height: 250px;
    width: 1200px;
}
#Send{
    margin-top: 30px;
    margin-left: 40px;
    width: 100px;
    height: 40px;
    background-color: gainsboro;
    border: none;
}
#Send:hover{
    background-color: peru;
    color: white;
    padding: 10px;
}
</style>