<template>
    <div class="wishlist">
      <h2>Lista de Presentes</h2>
      <div v-for="item in items" :key="item.id" class="wishlist-item">
        <img :src="item.image" alt="Imagem do item" class="item-image" />
        <h3>{{ item.name }}</h3>
        <p>Quantidade: {{ item.quantity }}</p>
        <p>Reservado: {{ item.reserved }}</p>
        <div class="links">
          <p>Links de Compra:</p>
          <ul>
            <li v-for="(link, index) in item.links" :key="index">
              <a :href="link" target="_blank" rel="noopener noreferrer">Link {{ index + 1 }}</a>
            </li>
          </ul>
        </div>
        <button @click="reserveItem(item)" :disabled="!user">
          {{ user ? "Reservar" : "Faça login para reservar" }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { auth, signInWithGoogle, signInWithFacebook } from "@/firebase";
  
  export default {
    name: "WishList",
    setup() {
      const user = ref(null);
      const items = ref([
        {
          id: 1,
          image: "https://via.placeholder.com/150",
          name: "Carrinho de Bebê",
          quantity: 1,
          reserved: 0,
          links: ["https://exemplo.com/carrinho"],
        },
        {
          id: 2,
          image: "https://via.placeholder.com/150",
          name: "Fralda",
          quantity: 5,
          reserved: 2,
          links: ["https://exemplo.com/fralda1", "https://exemplo.com/fralda2"],
        },
      ]);
  
      const reserveItem = (item) => {
        if (!user.value) {
          alert("Faça login para reservar um item.");
          return;
        }
  
        if (item.reserved < item.quantity) {
          item.reserved += 1;
        } else {
          alert("Todos os itens já foram reservados.");
        }
      };
  
      const handleLogin = async (provider) => {
        try {
          let result;
          if (provider === "google") {
            result = await signInWithGoogle();
          } else if (provider === "facebook") {
            result = await signInWithFacebook();
          }
          user.value = result.user;
        } catch (error) {
          console.error("Erro ao fazer login:", error);
        }
      };
  
      onMounted(() => {
        auth.onAuthStateChanged((loggedInUser) => {
          user.value = loggedInUser;
        });
      });
  
      return {
        items,
        user,
        reserveItem,
        handleLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  .wishlist {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .wishlist-item {
    border: 1px solid #ddd;
    padding: 1em;
    margin: 1em;
    width: 300px;
    text-align: center;
  }
  
  .item-image {
    width: 100%;
    height: auto;
    margin-bottom: 1em;
  }
  
  .links ul {
    padding-left: 0;
    list-style-type: none;
  }
  
  button {
    margin-top: 1em;
    padding: 0.5em;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  