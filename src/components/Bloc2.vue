<template>
  <div class="contain1">
    <section class="section2">
        <div class="carde1">
            <div class="sous_carde1">
                <img src="../assets/Images/18bc90d319aa9e6f062107d29d5570c6.jpg" width="250px" height="300px">
            </div>
            <h3>Jessia kassi</h3>
            <h4>senior rhumatologie</h4>
            <p >Email: your@gmail.com</p>
            <p>Tel: +9876543210</p>
        </div>        
        <div class="carde2">
            <div class="sous_carde2">
                <img src="../assets/Images/fe771411-76c7-4313-ae8b-5e86b2c82fa5.jpeg"   width="250px" height="300px">
            </div>
            <h3>Joel Yoboue</h3>
            <h4>senior cardiologie</h4>
            <p>Email: your@gmail.com</p>
            <p>Tel: +9876543210</p>
        </div> 
        <div class="carde3">
            <div class="sous_carde3">
                <img src="../assets/Images/R.jpg" width="250px" height="300px">
            </div>
            <h3>Julliette Doe</h3>
            <h4>Senior chirurgie cardiaque</h4>
            <p>Email: your@gmail.com</p>
            <p>Tel: +9876543210</p>
        </div>  
        <div class="carde4">
            <div class="sous_carde4">
                <img src="../assets/Images/foire-de-la-medecine-traditionnelle-pour-valoriser-cette-pratique-en-plaida_m9j6ltogps.jpeg" width="250px" height="300px">
            </div>
            <h3>Luc kouassi</h3>
            <h4>medecin Generaliste</h4>
            <p>Email: your@gmail.com</p>
            <p>Tel: +9876543210</p>
        </div>                
    </section>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section2{
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}
p,h3,h4{
   text-align: center;
}

.cardre1,.cardre2,.cardre3{
    width: 400px;
    margin-left: 20px;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.contain1{
    position: relative;
}
</style>