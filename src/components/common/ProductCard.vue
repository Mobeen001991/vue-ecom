<template>
  <div class="card p-card h-100 border-0">
    <div class="p-3 bg-light position-relative overflow-hidden">
      <div
        class="carousel__item product-img"
        v-bind:style="{ 'background-image': 'url(' + data?.image + ')' }"
      ></div>
    </div>

    <div class="card-body mt-3">
      <h5 class="card-title mb-2" :title="data?.title">{{ data?.title }}</h5>
      <div class="p-1 content-box d-none">
        <p class="card-text">
          {{ data?.description }}
        </p>
      </div>
      <button
        :disabled="data.isCartItem"
        class="btn d-flex justify-content-between text-dark w-100 add-btn"
        @click="addToCart(data.id)"
      >
        <span>Add to cart</span>
        <span>${{ data?.price }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
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
<style lang="scss" scoped>
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
  text-align: center;
  border: 0.1rem solid #ccc;
  background: #fff;
  border-radius: 0.3rem;
  transition: 0.5s;
  font-weight: 700;
  color: #000;
  &:hover {
    border-color: #000 !important;
  }
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
.p-card {
  background: var(--product-card-bg-color);
}
</style>
