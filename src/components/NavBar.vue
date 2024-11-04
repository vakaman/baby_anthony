<template>
  <nav class="NavBar">
    <h1 class="NavBar-brand">Lista de Presentes</h1>
    <div class="NavBar-menu">
      <div class="user-section" @click="toggleDropdown">
        
        <!-- Ícone do usuário com borda branca -->
        <img :src="isLoggedIn ? userPhotoURL : require('@/assets/user.png')" alt="Ícone do usuário" class="user-icon" />

        <!-- Saudação para o usuário logado ou mensagem para fazer login -->
        <span v-if="isLoggedIn" class="user-name">Olá, {{ userName }}!</span>
        <span v-else class="login-message">Clique aqui para logar</span>

        <!-- Dropdown para login ou logout -->
        <div v-if="dropdownOpen" class="dropdown-menu">
          <button v-if="isLoggedIn" @click="logout" class="logout-button">Logout</button>
          <button v-else @click="openLoginModal" class="login-button">Login</button>
        </div>
      </div>
    </div>
    <LoginModal v-if="showLoginModal" @close="closeLoginModal" @login-success="handleLoginSuccess" />
  </nav>
</template>

<script>
import LoginModal from "./LoginModal.vue";
import { subscribeToAuthChanges, logout } from "@/services/firebaseAuth";

export default {
  name: "NavBar",
  components: {
    LoginModal,
  },
  data() {
    return {
      isLoggedIn: false,
      userName: "",
      userPhotoURL: "",
      showLoginModal: false,
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    handleLoginSuccess(user) {
      this.isLoggedIn = true;
      this.userName = user.userName;
      this.userPhotoURL = user.userPhotoURL || require('@/assets/user.png');
      this.closeLoginModal();
    },
    logout() {
      logout().then(() => {
        this.isLoggedIn = false;
        this.userName = "";
        this.userPhotoURL = require('@/assets/user.png');
      }).catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
    },
  },
  mounted() {
    subscribeToAuthChanges((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userPhotoURL = user.photoURL || require('@/assets/user.png');
      } else {
        this.isLoggedIn = false;
        this.userName = "";
        this.userPhotoURL = require('@/assets/user.png');
      }
    });
  },
};
</script>

<style scoped>
.NavBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
}

.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white; /* Adiciona a borda branca */
  object-fit: cover;
}

.user-name {
  font-weight: bold;
  color: white;
}

.login-message {
  color: white;
  font-weight: bold;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 150px;
}

.logout-button,
.login-button {
  background-color: #b01b1b;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
}
</style>
