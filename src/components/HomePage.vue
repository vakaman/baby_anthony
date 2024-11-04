<template>
    <div class="homePage">
      <h1>Lista de Presentes - Baby Anthony</h1>
      <p>Bem-vindo à lista de presentes do Baby Anthony!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .homePage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  
  p {
    color: #666;
    font-size: 1.2em;
  }
  </style>
  