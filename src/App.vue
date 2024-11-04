<template>
  <div>
    <NavBar :isLoggedIn="isLoggedIn" :userName="userName" :userPhotoURL="userPhotoURL" @logout="handleLogout" />
    <HomePage :isLoggedIn="isLoggedIn" />
  </div>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import { subscribeToAuthChanges } from "@/services/firebaseAuth";

export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
  },
  data() {
    return {
      isLoggedIn: false,
      userName: "",
      userPhotoURL: "",
    };
  },
  methods: {
    handleLogout() {
      this.isLoggedIn = false;
      this.userName = "";
      this.userPhotoURL = "";
    },
    handleLoginSuccess({ userName, userPhotoURL }) {
      this.isLoggedIn = true;
      this.userName = userName;
      this.userPhotoURL = userPhotoURL || require('@/assets/user.png');
    },
  },
  mounted() {
    subscribeToAuthChanges((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userPhotoURL = user.photoURL || require('@/assets/user.png');
      } else {
        this.handleLogout();
      }
    });
  },
};
</script>