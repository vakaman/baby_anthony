<template>
  <div class="home-page" v-if="itemsLoaded && userChecked">
    <h2>Reserve um presentinho pro Anthony! 🥰</h2>
    <!-- Verifica se há itens na lista -->
    <div class="wishlist" v-if="items && items.length">
      <WishlistItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item" 
        :isLoggedIn="isLoggedIn"
        :userEmail="userEmail"
        @reserve-item="reserveItem" 
        @remove-reserve="removeReservation"
      />
    </div>
    <!-- Mensagem padrão quando não há itens cadastrados -->
    <div v-else>
      <p>Nenhum item foi cadastrado na lista de presentes.</p>
    </div>
  </div>
</template>

<script>
import WishlistItem from "./WishlistItem.vue";
import { db, auth } from "../firebase";
import { collection, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";

export default {
  name: "HomePage",
  components: {
    WishlistItem,
  },
  data() {
    return {
      items: [], // Dados reais carregados do Firestore
      isLoggedIn: false, // Estado de autenticação
      user: null, // Informações do usuário autenticado
      userEmail: "", // Email do usuário autenticado formatado
      itemsLoaded: false, // Flag para indicar quando os itens foram carregados
      userChecked: false, // Flag para indicar quando o usuário foi verificado
    };
  },
  async created() {
    await this.loadItems();

    // Verifica o status de autenticação do usuário
    auth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
      this.user = user;
      this.userEmail = user ? user.email.replace(/@/g, "_at_").replace(/\./g, "_dot_") : "";
      this.userChecked = true; // Marca como verificado após a autenticação
    });
  },
  methods: {
    async loadItems() {
      try {
        const querySnapshot = await getDocs(collection(db, "lista_de_desejos"));
        this.items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.itemsLoaded = true; // Indica que os itens foram carregados
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      }
    },
    async reserveItem(item) {
      if (!this.user) {
        console.log("Usuário não autenticado. Não é possível reservar.");
        return;
      }

      try {
        const itemRef = doc(db, "lista_de_desejos", item.id);
        const itemDoc = await getDoc(itemRef);
        const itemData = itemDoc.data();
        const emailKey = this.userEmail;
        const existingReservation = itemData.reservas?.[emailKey] || { quantidade: 0 };

        const newQuantity = existingReservation.quantidade + 1;
        const reservationData = {
          nome: this.user.displayName || "Nome não fornecido",
          quantidade: newQuantity,
        };

        await updateDoc(itemRef, {
          [`reservas.${emailKey}`]: reservationData,
          quantidade: (itemData.quantidade || 0) + 1, // Atualiza a quantidade total
        });

        // Atualiza o estado local
        item.quantidade = (itemData.quantidade || 0) + 1;
        item.reservas = {
          ...(item.reservas || {}),
          [emailKey]: reservationData,
        };

        console.log("Reserva feita com sucesso!");
      } catch (error) {
        console.error("Erro ao fazer a reserva:", error);
      }
    },
    async removeReservation(item) {
      if (!this.user) {
        console.log("Usuário não autenticado. Não é possível remover a reserva.");
        return;
      }

      try {
        const itemRef = doc(db, "lista_de_desejos", item.id);
        const itemDoc = await getDoc(itemRef);
        const itemData = itemDoc.data();
        const emailKey = this.userEmail;
        const existingReservation = itemData.reservas?.[emailKey];

        if (!existingReservation) {
          console.log("Reserva não encontrada para o usuário atual.");
          return;
        }

        const newQuantity = existingReservation.quantidade - 1;

        if (newQuantity > 0) {
          await updateDoc(itemRef, {
            [`reservas.${emailKey}.quantidade`]: newQuantity,
            quantidade: itemData.quantidade - 1, // Atualiza a quantidade total
          });
          item.reservas[emailKey].quantidade = newQuantity;
        } else {
          const updatedReservations = { ...itemData.reservas };
          delete updatedReservations[emailKey];

          await updateDoc(itemRef, {
            reservas: updatedReservations,
            quantidade: itemData.quantidade - 1, // Atualiza a quantidade total
          });
          delete item.reservas[emailKey];
        }

        item.quantidade = itemData.quantidade - 1;
        console.log("Reserva removida com sucesso!");
      } catch (error) {
        console.error("Erro ao remover a reserva:", error);
      }
    },
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
}

.wishlist {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
</style>
