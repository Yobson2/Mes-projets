<template>
   <NavBar />
  <img src="../assets/Images/image-consultation-CC0.jpg" alt="" id="img_conct">
   <div class="consult">
    <div class="consult1">
      <h3><router-link to="/Infos" class="liens" >Demande de consultation</router-link></h3>
    </div>
    <div class="consult2">
         <h3><router-link to="/Solution" class="liens" >Status</router-link></h3>
    </div>
   </div>
  <FooterVue />
</template>

<script>
import NavBar from '/src/components/NavBar'
import FooterVue from '/src/components/FooterVue'

export default {
 components:{
      NavBar,
      FooterVue
 }
}
</script>

<style scoped>
.consult{
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#img_conct{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
.consult1{
    font-size: large;
    width: 200px;
    border: 0.5px solid black;
    height: 80px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    color: blue;
    border-radius: 10px;
}
.consult2{
    font-size: large;
    width: 200px;
    border: 0.5px solid black;
    height: 80px;
    margin-left: 30px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    color: blue;
    border-radius: 10px;
}
.consult1:hover{
    background-color: deepskyblue;
    color: antiquewhite;
}
.consult2:hover{
 background-color: #555;
 color: antiquewhite;
}
.liens{
    text-decoration: none;
}
.liens:hover{
    color: white;
}

</style>