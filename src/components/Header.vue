<template>
    <div class="bg-theme-secondary">
        <div class="container m-auto flex justify-between items-center h-20 px-4">
            <router-link to="/">
                <img class="w-auto h-10" src="../assets/snake.png" alt="Exotic Pet Shop - Logo Design Pet Shop@pngkey.com">
            </router-link>
            <nav class="hidden tablet:flex gap-4 items-center">
                <router-link to="/" class="text-white text-nav font-bold hover:underline decoration-theme-primary decoration-2 underline-offset-2">Home</router-link>
                <router-link to="/about" class="text-white text-nav font-bold hover:underline decoration-theme-primary decoration-2 underline-offset-2">About Us</router-link>
                <router-link to="/animal-list" class="text-white text-nav font-bold hover:underline decoration-theme-primary decoration-2 underline-offset-2">Animal List</router-link>
                <router-link to="/contact-us" class="text-white text-nav font-bold hover:underline decoration-theme-primary decoration-2 underline-offset-2">Contact Us</router-link>
                <CartButton/>
            </nav>
            <nav @click="mobileMenuOpen = !mobileMenuOpen" :class="mobileMenuOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'" class="grid tablet:hidden absolute right-0 top-20 bg-theme-secondary w-max justify-center transition-opacity duration-200">
                <router-link to="/" class="px-8 py-2 hover:bg-theme-primary text-white font-bold">Home</router-link>
                <router-link to="/about" class="px-8 py-2 hover:bg-theme-primary text-white font-bold">About Us</router-link>
                <router-link to="/animal-list" class="px-8 py-2 hover:bg-theme-primary text-white font-bold">Animal List</router-link>
                <router-link to="/contact-us" class="px-8 py-2 hover:bg-theme-primary text-white font-bold">Contact Us</router-link>
                <div class="px-8 py-2"><CartButton :mobile="true"/></div>  
            </nav>
            <div @click="mobileMenuOpen = !mobileMenuOpen" class="tablet:hidden cursor-pointer"><BurgerMenu :open="mobileMenuOpen"/></div>
        </div>
    </div>
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';
    import CartButton from './CartButton.vue';

    export default {
        name: "HeaderSection",
        components:{
            BurgerMenu,
            CartButton
        },
        data(){
            return {
                mobileMenuOpen: false
            }
        }
    }

</script>