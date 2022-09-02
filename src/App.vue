<template>

  <router-view/>
</template>



<script>

export default {
 components:{
   
 }
}
</script>

<style >


#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
   color: #2c3e50; 
}
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* overflow-x: hidden; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
}

nav a.router-link-exact-active {
  color: black;
}
nav a:hover{
  color: #42b983;;
}
nav a{
  text-decoration: none;
}
</style>
