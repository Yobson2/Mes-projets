<template>
  <div class="tete">
        <div class="sous_tete1">
            <img src="../assets/Logo/icons8-health-64.png" id="logo" >
            <h3>MediTra</h3>
        </div>
        <div class="sous_tete2">
            <nav class="nav">
                <ul>
                    <li><router-link to="/">Accueil</router-link> <span id="separateur">|</span></li>
                    <li><router-link to="/Plantes">Plantes</router-link> |</li>
                    <li><router-link to="/" >Contact</router-link> |</li>
                     <li><router-link to="/Registre">Inscription</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  /* mise en forme de l'entete */
.tete{
   position: sticky;
    margin-bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100vw;
   top: 0px;
   z-index: 10;
   opacity: 0.7;
}
.sous_tete1{
  font-family: 'Courier New', Courier, monospace;
  font-size: x-large; 
  margin-right: 700px; 
}
#logo{
    width: 40px;
    height: 40px;
}

.nav{
    margin-top: 20px;
    position: relative;
}
ul{
   display: flex;
   list-style: none;
}
li{
   justify-content: space-around;
}

</style>