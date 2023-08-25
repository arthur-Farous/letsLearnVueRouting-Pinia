<script setup>
import { ref } from 'vue';
import {useCounterStore} from '../stores/counter';
import NavBarComponent from '../components/NavBarComponent.vue';
const counter = useCounterStore();


</script>

<template>
   <main>
   <NavBarComponent/>
  <section class="second">
  <div class="box">
    <div>
    <input type="text" v-model="counter.newTask" placeholder="Enter your task">
  </div>
  <button class="design"   @click="counter.add">Save</button>
    <h1>Daily Tasks</h1>
    <ul>
      <li v-for="task in counter.tasks" :key="task.id">
        <p>{{ task.text }}</p>
        <!-- <input v-else type="text" v-model="task.text"> -->
        <button @click="counter.edit(task)">Edit</button>
        <button @click="counter.deleteTask(task)">Delete</button>
      </li>
    </ul>
    
  </div>
</section>
</main>

</template>

<style scoped>

  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .box h1{
    margin-top: 30px;
    font-size: 36px;
  }

  .second{
    padding-top: 200px;
  }

  .design{ 
    padding: 10px;
    margin: 0 auto;
    color: #fff;
    background-color: #5222D0;
  }

input{
    padding: 16px;
    border-radius: 2px;
   border: 1px solid #D9D9D9;
   background: #FFF;
   max-width: 500px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  flex-shrink: 0;
}
</style>