<template>
  <div class="row">
    <div class="col-md-12 col-12 text-center mb-4">
      <h1><strong>Products</strong></h1>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="(item, index) in productData"
      :key="index" class="px-1">
      <ProductCard :data="item" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
   
  </div>
</template>
<script>
import ProductCard from "./common/ProductCard.vue";
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { Carousel, Navigation, Slide } from 'vue3-carousel'

export default {
  components: { ProductCard, Carousel, Slide, Navigation },
  setup() {
    const store = useStore();
    const productData = computed(() => store.state.productData);
    const setting = reactive({
      itemsToShow: 1,
      snapAlign: "center",
    });
    const breakpoints = reactive({
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    });
    function removeFromCart(id) {
      store.dispatch("removeFromCart", id);
    }
    return {
      productData,
      removeFromCart,
      setting,
      breakpoints,
    };
  },
};
</script>
