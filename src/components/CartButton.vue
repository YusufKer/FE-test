<template>
    <router-link to="/Cart" :class="mobile ? 'w-min rounded-xl' : 'rounded-full'" class="flex gap-2 items-center bg-theme-primary px-4 py-2">
        <div class="cart-icon w-4 h-4"></div>
        <div class="bg-theme-secondary px-1 rounded-full w-6 h-6 flex justify-center items-center font-bold text-white">{{ $store.getters.cartCount }}</div>
    </router-link>
</template>

<script>
    export default {
        name: "CartButton",
        props:{
            mobile: {
                type:Boolean,
                default(){
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .cart-icon{
        background-image: url("../assets/322427_cart_icon.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>