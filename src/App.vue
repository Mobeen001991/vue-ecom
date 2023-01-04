<template>
  <div>
    <TopHeader />
    <section class="pt-5 pb-5">
      <div class="container">
        <ProductList />
        <!--/row-->
      </div>
      <!--/container-->
    </section>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import TopHeader from "./components/TopHeader";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import product from './assets/product.json'
export default {
  name: "App",
  components: { ProductList, TopHeader },
  setup() {
    const store = useStore();
    const productData = computed(() => store.state.productData);
    const cartItems = computed(() => store.getters.cardItem || []);

    function removeFromCart(id) {
      store.dispatch("removeFromCart", id);
    }
    onBeforeMount(() => {
      if(store.state.productData.length === 0){
        localStorage.setItem('product_list',JSON.stringify(product))
        store.dispatch("addProductData", product);
      }
    });
    return {
      productData,
      cartItems,
      removeFromCart,
    };
  },
};
</script>

<style scoped>
</style>
