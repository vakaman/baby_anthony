<template>
    <div class="login-modal-overlay" @click="closeModal">
      <div class="login-modal" @click.stop>
        <h3>Escolha o método de login</h3>
        <button @click="handleGoogleLogin" class="auth-button google">Login com Google</button>
        <!-- <button @click="handleFacebookLogin" class="auth-button facebook">Login com Facebook</button>
        <button @click="closeModal" class="close-button">Cancelar</button> -->
      </div>
    </div>
  </template>
  
  <script>
  import { signInWithGoogle, signInWithFacebook } from "@/services/firebaseAuth";
  
  export default {
    name: "LoginModal",
    emits: ["close", "login-success"],
    methods: {
      async handleGoogleLogin() {
        try {
          const result = await signInWithGoogle();
          this.$emit("login-success", {
            userName: result.user.displayName,
            userPhotoURL: result.user.photoURL,
          });
          this.closeModal();
        } catch (error) {
          console.error("Erro ao fazer login com Google:", error);
        }
      },
      async handleFacebookLogin() {
        try {
          const result = await signInWithFacebook();
          this.$emit("login-success", {
            userName: result.user.displayName,
            userPhotoURL: result.user.photoURL,
          });
          this.closeModal();
        } catch (error) {
          console.error("Erro ao fazer login com Facebook:", error);
        }
      },
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .login-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .login-modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
  }
  
  .auth-button {
    padding: 10px 15px;
    margin: 10px 0;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    width: 100%;
  }
  
  .auth-button.google {
    background-color: #db4437;
  }
  
  .auth-button.facebook {
    background-color: #4267B2;
  }
  
  .auth-button:hover {
    opacity: 0.9;
  }
  
  .close-button {
    margin-top: 10px;
    cursor: pointer;
    background-color: #ccc;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: #333;
    transition: background-color 0.3s;
  }
  
  .close-button:hover {
    background-color: #bbb;
  }
  </style>
  