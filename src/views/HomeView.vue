<script setup>
import { RouterLink } from 'vue-router';
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';
import NavBarComponent from '../components/NavBarComponent.vue';
</script>

<template>
  <main>
    <NavBarComponent/>
    <div class="Content"> 
      <div class="list">
        <h1>Manage your tasks effectively</h1>
      <p>Modern todo list application to help you track your activities and stay productive.</p>
      <button class="return"><RouterLink to="/TaskView">Get Started</RouterLink></button>
    </div>
      <img src="../assets/hero-illustration.png"/>
      
  </div>
 
</main>
  
</template>


<style scoped>

.return{
  background-color: violet;
  color: #fff;
  padding: 12px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-content: center;
  padding-left: 30px;
  padding-right: 30px;
  margin: 100px;
}

.list h1,p{
  padding: 20px;
}

</style>