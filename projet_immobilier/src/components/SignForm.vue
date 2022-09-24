<template>
    <div class="insc">
      <form action="#" @submit.prevent="envoyer">
        <h1>S'inscrire</h1>
        <div class="container1">
            <p><i class="fa-brands fa-google"></i></p>
            <p><i class="fa-brands fa-youtube"></i></p>
            <p><i class="fa-brands fa-facebook"></i></p>
            <p><i class="fa-brands fa-twitter"></i></p>
        </div>
        <div class="container2">
            <input type="text" placeholder="Nom" class="saissir" v-model="nom" required>
            <input type="password" placeholder="Prenom" class="saissir" v-model="password" required>
            <input type="email" placeholder="Email" class="saissir" v-model="email" required>
            <input type="password" placeholder="Password" class="saissir">

        </div>
        <p class="inscription">j'ai un <span >compte </span></p>
        <div align="center">
            <button type="submit">S'inscrire</button>
        </div>
    </form>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
    
export default {
    props:['showSignForm'],
    setup(){
       const nom = ref('')
       const password = ref('')
       const email = ref('')

       const envoyer = ()=>{
        console.log(nom.value,password.value,email.value)
       }
          return{
            nom,password,email,envoyer
          }
    }

}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.insc{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
}
form{
  margin-top: 30px;
  background-color: #fff;
  padding: 40px 60px;
  min-width: 300px;
  border-radius: 10px;
}
form h1{
    color: blue;
    text-align: center;
}
.container1{
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.container1>p{
    padding: 5px;
    margin-left: 10px;
    border: 1px solid #545455;
    border-radius: 100%;
    width: 20px;
    text-align: center;
    cursor: pointer;
}

form .container2{
    display: flex;
    flex-direction: column;
}
.saissir{
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    outline: none;
    
}
p.inscription{
    font-size: 14px;
    margin-bottom: 20px;
}
span{
    color: blue;
    cursor: pointer;
}


button{
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    background-color: #545455;
    outline: none;
    cursor: pointer;
}

</style>