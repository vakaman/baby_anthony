<!-- ReferenceModal.vue -->
<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <h3>Referências de Compra</h3>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link" target="_blank">{{ `Loja ${index + 1}` }}</a>
          </li>
        </ul>
        <button class="close-button" @click="close">Fechar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true
      },
      links: {
        type: Array,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .modal-content h3 {
    margin-bottom: 15px;
    font-size: 1.25em;
  }
  
  .close-button {
    background-color: #b01b1b;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .close-button:hover {
    background-color: #8a1515;
  }
  </style>
  