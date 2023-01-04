<template>
  <div class="row">
    <div class="col-md-12 col-12 text-center mb-4">
      <h1><strong>Products</strong></h1>
    </div>
    <div
      class="col-lg-3 col-md-4 col-12 mb-4"
      v-for="(item, index) in productData"
      :key="index"
    >
      <ProductCard :data="item" />
    </div>
   
  </div>
</template>
<script>
import ProductCard from "./common/ProductCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { ProductCard },
  setup() {
    const store = useStore();
    const productData = computed(() => store.state.productData);

    function removeFromCart(id) {
      store.dispatch("removeFromCart", id);
    }
    return {
      productData,
      removeFromCart,
    };
  },
};
</script>
