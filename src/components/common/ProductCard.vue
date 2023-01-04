<template>
  <div class="card h-100 border-0">
    <div class="p-3 bg-light position-relative overflow-hidden">
      <!--  -->
      <Carousel>
        <Slide v-for="slide in 4" :key="slide">
          <div
            class="carousel__item product-img"
            v-bind:style="{ 'background-image': 'url(' + data?.image + ')' }"
          ></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <button
        :disabled="data.isCartItem"
        class="btn btn-dark rounded-0 w-100 add-btn"
        @click="addToCart(data.id)"
      >
        <span v-if="data.isCartItem">Alreay in cart</span>
        <span v-if="!data.isCartItem">Add to cart</span>
      </button>
    </div>

    <div class="card-body mt-3">
      <h5 class="card-title mb-2">{{ data?.title }}</h5>
      <div class="p-1 content-box d-none">
        <p class="card-text">
          {{ data?.description }}
        </p>
      </div>
      <h5 class="text-success">
        <strong>${{ data?.price }}</strong>
      </h5>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: {
    Carousel,
    Slide,

    Navigation,
  },
  setup() {
    const store = useStore();
    const notes = computed(() => store);
    const title = ref("");
    function addToCart(id) {
      store.dispatch("addCartItem", id);
    }
    return {
      notes,
      title,
      addToCart,
    };
  },
};
</script>
<style scoped>
.content-box {
  height: 50px;
  overflow: hidden;
}
.product-img {
  height: 200px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}
h5.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.add-btn {
  position: absolute;
  bottom: -50px;
  left: 0px;
  transition: 0.5s;
}
.card:hover .add-btn {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
