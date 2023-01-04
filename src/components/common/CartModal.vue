<template>
  <div
    class="modal bd-example-modal-lg fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cart Items</h5>
          <button
            type="button"
            class="btn-light btn close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="f-20" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="on-scroll">
          <table class="table tableFixHead">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {{
                cardItems
              }}
              <tr v-for="(item, index) in cartItems" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="removeFromCart(item.id)"
                  ><font-awesome-icon icon="fa-solid fa-trash" />
                    
                  </button>
                </td>
              </tr>
              <tr v-if="cartItems.length == 0">
                <td colspan="4" class="text-center no_item">
                  <span class="text-grey">No Items in the cart</span>
                </td>
              </tr>
            </tbody>
          </table>
          

          </div><!--/on-scroll-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "CardModal",
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.cardItem || []);

    function removeFromCart(id) {
      store.dispatch("removeFromCart", id);
    }
    return {
      cartItems,
      removeFromCart,
    };
  },
};
</script>
<style scoped>
.f-20 {
  font-size: 20px;
}
 .on-scroll{
    max-height: 300px;
    overflow: auto;
 }
</style>
