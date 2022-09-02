<template>
  
        <footer class="footer2">
        <div class="bloc1" id="contact">
            <h2><img src="../assets/Logo/icons8-64.png"></h2>
            <p class="p">-----MediTra----</p>
            <p><a href="#" class="menu">Accueil</a>-<a href="#" class="menu">Formation</a>-<a href="#" class="menu">pub/plantes</a>-<a href="#" class="menu">Contact</a>
            </p>
            <ul>
                <li class="menu"><a href="#"><img src="../assets/Logo/icons8-facebook-50.png"></a></li>
                <li class="menu"><a href="#"><img src="../assets/Logo/icons8-linkedin-circled-50.png"></a></li>
                <li class="menu"><a href="#"><img src="../assets/Logo/icons8-whatsapp-50.png"></a></li>
            </ul>
        </div>
        <div class="bloc2">
            <h3>
                contact
            </h3>
            <div class="bt2">
                <input type="text" placeholder="Email" id="text"><br>
                <textarea id="message" placeholder="Message"></textarea>
                <p><input type="submit"  id="Send" value="Send"></p>
            </div>

        </div>
    </footer>
</template>

<script >
export default {
name:'Footervue'
}
</script>

<style >
.footer2{
    display: flex;
    background-color: #333;
    width: 100%;
    justify-content: space-around;
    margin-top: 0;
}
.bloc2{
    margin-top: 20px;
}
#text{
    width: 300px;
    height: 30px;
}
#message{
    width: 300px;
    margin-top: 20px;
    height: 90px;
}
.p{
    margin-left: 79px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.menu{
    font-size: large;
    text-decoration: none;
    color: rgba(128, 128, 128, 0.473);
}
#Send{
    width: 100px;
    height: 30px;
    cursor: pointer;
}
#Send:hover{
    background-color: rgb(107, 89, 89);
}
</style>