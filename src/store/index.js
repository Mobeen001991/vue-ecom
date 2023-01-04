import { createStore } from "vuex";

const store = createStore({
    state: {
        productData: JSON.parse(localStorage.getItem('product_list') || '[]')
    },
    getters: {
        cardItem(state) {
            const items = state.productData.filter((e) => e.isCartItem == true)
            return items;
        }
    },
    mutations: {
        addTocart(state, index) {
            state.productData[index].isCartItem = true
            localStorage.setItem('product_list', JSON.stringify(state.productData))
        },
        removeFromCart(state, index) {
            state.productData[index].isCartItem = false
            localStorage.setItem('product_list', JSON.stringify(state.productData))
        },
        addProductData(state, data) {
            state.productData = data;
        }

    },
    actions: {
        addCartItem({ state, commit }, id) {
            const index = state.productData.findIndex((e) => e.id === id);
            commit('addTocart', index)

        },
        removeFromCart({ state, commit }, id) {
            const index = state.productData.findIndex((e) => e.id === id);
            commit('removeFromCart', index)
        },
        addProductData({ commit }, data) {
            commit('addProductData', data)
        }
    }
})

export default store;