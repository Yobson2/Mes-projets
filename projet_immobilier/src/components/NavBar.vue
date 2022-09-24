<template>
   <div class="titre">
            <h1><span class="sp1">I</span>MMOBILIER<span class="sp1">-</span><span class="sp1">C</span>HAPCHAP</h1>       
    </div>
<header>
    <div class="card1">
      <img src="../assets/logo/logo2.jpg" alt="">
    </div>
    <div class="card2">
        <nav>
            <ul>
                <li><router-link to="/" class="liens">Accueil</router-link> </li>
                <li><router-link to="/Location" class="liens">Location</router-link> </li>
                <li><router-link to="/Acheter" class="liens">Acheter</router-link> </li>
                <li><router-link to="/Contact" class="liens">Contact</router-link> </li>
                <li><router-link to="/Registre" class="liens">Registre</router-link> </li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
.titre{
    text-align: center;
    letter-spacing: 1rem;
    background-color: #333;
    height: 210px;
    color: aliceblue;
    border: 0.1px solid gray;
    position: relative;
    z-index: 0;
    flex-wrap: wrap;
}
h1{  margin-top: 30px;
    font-size: 80px;
    animation-duration: 3s;
  animation-name: slide;
  animation-iteration-count: inherit;
}
.sp1{
    color: gray;
    font-size: 80px;
}

header{
    z-index: 1;
    top: 20%;
    left: 50%;
    position: absolute;
    display: flex;
    background-color: aqua;
    height: 100px;
    width: 70%;
    justify-content: space-around;
    border: 0.2px solid gray;
    transform: translate(-50%,-50%);

}
.card1>img{
    margin-top: 10px;
    width: 70px;
    height: 70px;
    border-radius: 10px;
}
.card2>nav>ul{
    display: flex;
    list-style: none;
    font-size: x-large;
    flex-wrap: wrap;
}
.card2>nav>ul>li{
    margin-left: 20px;
}
.liens{
   text-decoration: none; 
   font-family: Georgia, 'Times New Roman', Times, serif;
}

.liens:hover{
    color: rgb(168, 161, 161);
    border-bottom: 10px solid white;
    border-radius: 20px;
    box-shadow: 10px;
}


@keyframes slide {
    from {
      margin-left: 100%;
      width: 300%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }

</style>