import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem("MAW-cart")) || [],
  },
  getters: {
    totalPrice(state){
      let totalPrice = 0;
      if(state.cart.length === 0){
        return totalPrice;
      }
      totalPrice = state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      },0);
      return totalPrice;
    },
    cartCount(state){
      return state.cart.length;
    }
  },
  mutations: {
    addItem(state, payload){
      state.cart = payload;
      localStorage.setItem("MAW-cart",JSON.stringify(payload));
    },
    removeItem(state,payload){
      state.cart = payload;
      localStorage.setItem("MAW-cart",JSON.stringify(payload));
    }
  },
  actions: {
    addItem({commit}, {animal,quantity}){
      const prevCart = [ ...this.state.cart ];
      const index = prevCart.findIndex( item => item.id === animal.id );
      if(index === -1){
        prevCart.push({...animal,quantity})
      }else{
        prevCart[index].quantity += quantity;
      }
      commit("addItem", prevCart);
    },
    removeItem({commit}, id){
      const prevCart = [ ...this.state.cart ];
      const index = prevCart.findIndex( item => item.id === id);
      if(prevCart[index].quantity === 1){
        prevCart.splice(index,1)
      }else{
        prevCart[index].quantity --;
      }
      commit("removeItem", prevCart);
    }
  },
  modules: {
  }
})
