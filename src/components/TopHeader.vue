<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light custom-nav">
      <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button
          class="btn btn-info text-white"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <font-awesome-icon color="white" icon="fa-solid fa-shopping-cart" /> {{ cartItems.length }}
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <CardModal />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import CardModal from "./common/CartModal";
export default {
  name: "TopHeader",
  components: { CardModal },
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.cardItem || []);
    return {
      cartItems,
    };
  },
};
</script>
<style scoped>
.no_item {
  opacity: 0.5;
}
</style>