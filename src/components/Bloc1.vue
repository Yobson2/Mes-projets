<template>
  <div class="contain">
   
    <section class="section1">
        <div class="h2">
                 <h2>Nos meilleurs traitements && Notre meilleur médecin</h2>
        </div>
        <div class="card1">
            
           <div class="piture1">
               <img src="../assets/Images/20296.jpeg" width="250px" height="300px">
           </div>
           <h3>Diagnostic des maladies et des infections</h3>
           <p class="sous_titre">Les tradi praticiens arrivent à diagnostiquer toutes les maladies rien qu’avec le prélèvement de la salive.
                Que ce soit le Vih/sida, le Kyste, ou encore les infections urinaires, rien n’échappe à cette technique d’analyse par la salive. </p>
                <button class="btn">Voir ++</button>
       </div>
       <div class="card2">
           <div class="piture2">
               <img src="../assets/Images/maxresdefault.jpeg"  width="250px" height="300px">
           </div>
           <h3>Soins de haute qualité pour les patients en attente</h3>
           <p class="sous_titre">L’objectif général de la MediTra est de faire en sorte que toutes 
               les personnes qui ont besoin de services de santé puissent recevoir
                des soins de qualité sans connaître de difficultés financières. Les
                 services de santé de qualité (recouvrant la promotion, la prévention,
                  le traitement, la réadaptation et les soins palliatifs) font donc partie 
                  de la définition même de la MediTra.
           </p>
           <button class="btn">Voir ++</button>
       </div>
       <div class="card3">
           <div class="piture3">
               <img src="../assets/Images/84387244.jpg"  width="250px" height="300px">
           </div>
           <h3>Département de l’équipe médicale en santé</h3>
           <p class="sous_titre">De manière générale, cette médecine est plus accessible, moins coûteuse et mieux perçue
                par les populations locales. Lorsqu’elle est de qualité, elle permet de favoriser les
                 traitements de santé dans les zones rurales reculées où les systèmes de soins conventionnels
                  sont moins présents. Si on peut en garantir la qualité, elle pourrait être bénéfique à une
                   grande partie de la population, sachant que pour beaucoup, elle constitue la principale
                    voire l’unique source de soins.</p>
                    <button class="btn">Voir ++</button>
       </div>
     
   </section>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  /* mise en forme de la section1 */
.section1{
   position: absolute;
    background-color: rgb(199, 202, 202);
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 4px;
    height: 84vh;
   
}
.contain{
    position: relative;
}


h3{
    margin-top: 70px;
    text-align: center;
    font-size: x-large;
    margin-bottom: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(67, 65, 65);
}
.card1,.card2,.card3{
    margin-top: 120px;
    width: 400px;
    margin-left: 10px;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.btn{
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
    width: 100px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    height: 30px;
    border-radius: 0.1rem;
    border: 0.3px solid black;
    border-radius: 5px;
    
}
.btn:hover{
    background-color: aqua;
}
.sous_titre{
    font-family: 'Times New Roman', Times, serif;
    margin-left: 0;
    margin-right: 0;
}
.h2{
    display: block;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: x-large;
}

</style>