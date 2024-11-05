<template>
    <div class="wishlist-item" v-if="item && item.reservas !== undefined">
      <div class="image-container">
        <img :src="item.imagem || 'https://via.placeholder.com/100'" alt="Imagem do item" class="item-image" />
      </div>
      <h3>{{ item.nome }}</h3>
      <p>Reservas: {{ item.quantidade }} / {{ item.limite }}</p>
  
      <!-- Botão para expandir as referências, exibido apenas se houver referências -->
      <button v-if="item.links && item.links.length > 0" @click="toggleReferences" class="reference-button">
        <span v-if="showReferences">Esconder</span>
        <span v-else>🔍 Ver Referências</span>
      </button>
  
      <!-- Lista de referências, exibida apenas se showReferences for true -->
      <div v-if="showReferences" class="references-list">
        <h4>Referências de compra:</h4>
        <ul>
          <li v-for="(link, idx) in item.links" :key="idx">
            <a :href="link" target="_blank">{{ `Loja ${idx + 1}` }}</a>
          </li>
        </ul>
      </div>
  
      <button 
        :disabled="item.quantidade >= item.limite || !isLoggedIn" 
        @click="reserveItem"
        class="reserve-button"
      >
        🎁 Reservar
      </button>
  
      <button 
        v-if="canRemoveReservation" 
        @click="removeReservation"
        class="remove-button"
      >
        ❌ Remover Reserva
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "WishlistItem",
    props: {
      item: {
        type: Object,
        required: true,
        default: () => ({}),
      },
      isLoggedIn: {
        type: Boolean,
        required: true,
        default: false,
      },
      userEmail: {
        type: String,
        required: true,
        default: "",
      },
    },
    data() {
      return {
        showReferences: false,
      };
    },
    computed: {
      canRemoveReservation() {
        if (!this.isLoggedIn || !this.item || !this.item.reservas) return false;
        const emailKey = this.userEmail.replace(/@/g, "_at_").replace(/\./g, "_dot_");
        return !!this.item.reservas[emailKey];
      },
    },
    methods: {
      toggleReferences() {
        this.showReferences = !this.showReferences;
      },
      reserveItem() {
        if (this.item.quantidade < this.item.limite) {
          this.$emit("reserve-item", this.item);
        }
      },
      removeReservation() {
        if (this.canRemoveReservation) {
          this.$emit("remove-reserve", this.item);
        } else {
          console.log("Usuário não tem permissão para remover esta reserva.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .wishlist-item {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo, incluindo os botões */
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 12px;
    width: 220px;
    text-align: center;
    background-color: #fdfdfd;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .wishlist-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
  
  /* Centralização da imagem */
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    margin-bottom: 10px;
  }
  
  .item-image {
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  /* Botões com tons pastéis */
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 12px;
    font-size: 0.85em;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    margin-top: 6px;
    width: 100%; /* Preenche toda a largura do container */
    max-width: 180px; /* Limite de largura */
  }
  
  .reference-button {
    background-color: #d1c4e9; /* Roxo pastel */
    color: #673ab7;
  }
  
  .reference-button:hover {
    background-color: #b39ddb;
  }
  
  .reserve-button {
    background-color: #a5d6a7; /* Verde pastel */
    color: #388e3c;
  }
  
  .reserve-button:hover:not(:disabled) {
    background-color: #81c784;
  }
  
  .reserve-button:disabled {
    background-color: #e0e0e0;
    color: #757575;
    cursor: not-allowed;
  }
  
  .remove-button {
    background-color: #ef9a9a; /* Vermelho pastel */
    color: #d32f2f;
    margin-top: 5px;
  }
  
  .remove-button:hover {
    background-color: #e57373;
  }
  
  /* Estilos da Lista de Referências */
  .references-list {
    margin-top: 10px;
    text-align: left;
    font-size: 0.85em;
    color: #555;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .references-list h4 {
    font-size: 1em;
    margin-bottom: 8px;
    color: #333;
  }
  
  .references-list a {
    color: #3f51b5;
    text-decoration: none;
  }
  
  .references-list a:hover {
    text-decoration: underline;
  }
  
  /* Responsividade para exibir um item por linha no celular */
  @media (max-width: 600px) {
    .wishlist-item {
      width: 100%;
      margin-bottom: 15px; /* Espaçamento entre os itens */
    }
  }
  </style>
  