<template>
    <div class="wishlist-item" v-if="item && item.reservas !== undefined">
      <img :src="item.imagem || 'https://via.placeholder.com/100'" alt="Imagem do item" class="item-image" />
      <h3>{{ item.nome }}</h3>
      <p>Reservas: {{ item.quantidade }} / {{ item.limite }}</p>
      <div class="links">
        <span>Referências:</span>
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
        {{ isLoggedIn ? 'Reservar' : 'Faça login para reservar' }}
      </button>
  
      <!-- Botão de Remover Reserva, exibido somente se o usuário tiver uma reserva específica -->
      <button 
        v-if="canRemoveReservation" 
        @click="removeReservation"
        class="remove-button"
      >
        Remover Reserva
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
        default: () => ({}), // Definimos um valor padrão para garantir que não seja null
      },
      isLoggedIn: {
        type: Boolean,
        required: true,
        default: false, // Valor padrão para evitar erros de acesso antes de ser definido
      },
      userEmail: {
        type: String,
        required: true,
        default: "", // Valor padrão para garantir que userEmail não seja undefined
      },
    },
    computed: {
      // Computed property para verificar se o usuário tem permissão para remover a reserva
      canRemoveReservation() {
        if (!this.isLoggedIn || !this.item || !this.item.reservas) return false;
  
        // Formata o e-mail do usuário atual para a chave de reserva
        const emailKey = this.userEmail.replace(/@/g, "_at_").replace(/\./g, "_dot_");
        return !!this.item.reservas[emailKey];
      },
    },
    methods: {
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
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .item-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .links {
    margin: 10px 0;
    text-align: left;
  }
  
  .reserve-button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .reserve-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .remove-button {
    padding: 10px 15px;
    background-color: #b01b1b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  </style>
  