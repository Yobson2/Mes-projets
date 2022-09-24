<template>
  <NavBar />
  <div class="modele">
    <div class="elements">
      
      <SectionImmobilier />
      <div class="zapp">
        <button class="btn1">1</button>
        <button class="btn1">2</button>
        <button class="btn1">3</button>
        <button class="btn1">4</button>
        <button class="btn1">5</button>
    </div>
    </div>
    <div class="carte">
    
    </div>
   

  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '../components/Footer.vue';
import SectionImmobilier from '../components/SectionImmobilier.vue';
export default {
    components: { NavBar, Footer, SectionImmobilier }
}
</script>

<style scoped>
  .modele{
    display: flex;
    width: 100%;
  }
  .modele .carte{
    border: 0.1px solid black;
    width:100%;
    background-color: wheat;
    margin: 100px auto;
    border: none;
  }
  .modele .elements{
    border: 0.4px solid black;
    width:100%;
    background-color: grey;
    margin: 100px auto;
  }
  .zapp{
    margin-top: 90px;
    margin-bottom: 20px;
    margin: 10px auto;
    width: 400px;
}
.zapp .btn1{
    width: 50px;
    height: 30px;
    border-radius: 6px; 
}
.btn1:hover{
    background-color: #333;
    color: white;
}

</style>