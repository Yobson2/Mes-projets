<template>
 <div v-if="showSignForm">
    <SignForm />
    <button @click="showSignForm=false">click</button>
 </div>
  <div v-else>
    <Login />
   
  </div>
</template>

<script>
import SignForm from '@/components/SignForm.vue';
import Login from '@/components/Login.vue';
import { ref } from '@vue/reactivity';
export default {
    components: { SignForm, Login },
    setup(){
        const showSignForm = ref(true)

        return{
            showSignForm
        }
    }
}
</script>

<style>

</style>