import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import TaskView from '../views/TaskView.vue'

export const useCounterStore = defineStore('counter', () => {

const newTask = ref('');
const tasks = ref([]);
const editTask = ref({});

function add() {
  if (newTask.value !== '') {
   tasks.value.unshift({text: newTask.value });
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

  return {newTask,tasks,add,edit,deleteTask };
})
