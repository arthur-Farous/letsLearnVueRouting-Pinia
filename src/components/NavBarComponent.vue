<script setup>

</script>

<template>
  <section>
  <div class="greetings">
    <div>TodoApp</div>
     <ul>
      <li><RouterLink to="/">HomeView</RouterLink></li>
      <li><RouterLink to="/TaskView">Todos</RouterLink></li>
     </ul>
  </div>
</section>
</template>

<style scoped>
section{
  padding-top: 30px;
  padding-left: 320px;
  padding-right: 320px;
}

.greetings{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 180px;
  padding: 10px 10px;
  border: 1px solid black;
  background-color: #fff;
  margin: 0 auto;
  width: 600px;
height: 50px;
flex-shrink: 0;
 }

 ul{
  display: flex;
flex-direction: row;
justify-content: center;
  align-items: center;
gap:60px;
}
 ul,li{
  list-style: none;
 }
 ul{text-decoration: none;}
</style>
