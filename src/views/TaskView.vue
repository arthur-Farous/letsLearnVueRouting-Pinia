<script setup>
import { ref } from 'vue';
import {useCounterStore} from '../stores/counter';
import NavBarComponent from '../components/NavBarComponent.vue';
const counter = useCounterStore();

/*const storeTask = ref(['']);*/
const newTask = ref('');
const tasks = ref([]);
const editTask = ref({});

function add() {
  if (newTask.value !== '') {
    const task = {text: newTask.value };
   tasks.value.unshift(task);
    newTask.value = '';
  }
}



function edit(task) {
  if (Object.keys(editTask.value).length === 0) {
    editTask.value = task;
  } else {
    editTask.value = {};
  }
}


function deleteTask(task) {
  const removeMe = tasks.value.indexOf(task);
  if (removeMe !== -1) {
    tasks.value.splice(removeMe, 1);
  }
}
</script>

<template>
   <main>
   <NavBarComponent/>
  <section class="second">
  <div class="box">
    <div>
    <input type="text" v-model="newTask" placeholder="Enter your task">
  </div>
  <button class="design"   @click="add">Save</button>
    <h1>Task list</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <p v-if="editTask !== task">{{ task.text }}</p>
        <input v-else type="text" v-model="task.text">
        <button @click="edit(task)">Edit</button>
        <button @click="deleteTask(task)">Delete</button>
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