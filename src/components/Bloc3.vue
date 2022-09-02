<template>
   <div class="contain2">
     <div class="content2">
        <div class="second">
          <div class="image2">
             <img src="../assets/Images/depositphotos_90956362-stock-photo-concept-for-afro-american-doctor.jpg" height="700px"> 
          </div>
        </div>
        <div class="second_sous">
            <p class="text">QUI SOMMES-NOUS?</p>
            <div class="second_sous2">
                <h2 id="sous_text">Avec MediTra,
                    Prenez soin de votre santé</h2>
                <p >Nous plaçons toujours les patients
                     au centre de notre attention et nous nous
                      concentrons sur l’amélioration de leur 
                      expérience à l’aide de technologies.</p>
                <div class="sous11">
                    <ul class="ul2">
                        <li><img src="../assets/Logo/icons8-verified-check-circle-for-approved-valid-content-24.png" alt="">Nous vérifions votre état de santé actuel et décidons du traitement</li>
                        <li><img src="../assets/Logo/icons8-verified-check-circle-for-approved-valid-content-24.png" alt="">We check for your current health situation and decide treatment</li>
                    </ul>
                </div>
                <div class="sous22">
                    <p><span class="span1">20</span> <span class="span2">ANNÉES DE
                        EXPÉRIENCE</span></p>
                    <p><img src="../assets/Logo/icons8-signature-50.png" width="150px"></p>
                </div>
            </div>
        </div>
     </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
 .content2{
     position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}

.contain2{
    position: relative;
}
.second{
    margin-top: 30px;
    display: flex;
    
}
.text{
    text-align: center;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 20px;
}
 .second_sous{
   margin-top: 20px;
   margin-bottom: 40px;
} 
 .second_sous2{
    margin-left: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#sous_text{
    margin-bottom: 20px;
    font-family: 'Times New Roman', Times, serif;
}
.ul2{
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    list-style: none;
}
.sous22{
    margin-top: 100px;
    text-align: center;
}
.span1{
    font-size: 100px;
    color: blue;
}
.span2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: x-large;
}

</style>