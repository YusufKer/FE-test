<template>
    <div class="bg-[#001826]">
        <div class="container m-auto flex justify-between items-center h-10 px-4">
            <router-link to="/">
                <img class="w-auto h-10" src="../assets/snake.png" alt="Exotic Pet Shop - Logo Design Pet Shop@pngkey.com">
            </router-link>
            <nav class="hidden tablet:flex gap-4">
                <router-link to="/" class="text-[#C2CFFF]">Home</router-link>
                <router-link to="/about" class="text-[#C2CFFF]">About Us</router-link>
                <router-link to="/animal-list" class="text-[#C2CFFF]">Animal List</router-link>
                <router-link to="/contact-us" class="text-[#C2CFFF]">Contact Us</router-link>
                <router-link to="/Cart" class="text-[#C2CFFF]">Cart</router-link>
            </nav>
            <nav @click="mobileMenuOpen = !mobileMenuOpen" :class="mobileMenuOpen ? 'grid' : 'hidden'" class="tablet:hidden absolute right-0 top-10 bg-[#C2CFFF] w-max justify-center">
                <router-link to="/" class="px-4 pt-2 hover:bg-yellow-50">Home</router-link>
                <router-link to="/about" class="px-4 hover:bg-yellow-50">About Us</router-link>
                <router-link to="/animal-list" class="px-4 hover:bg-yellow-50">Animal List</router-link>
                <router-link to="/contact-us" class="px-4 hover:bg-yellow-50">Contact Us</router-link>
                <router-link to="/Cart" class="px-4 pb-2 hover:bg-yellow-50">Cart</router-link>   
            </nav>
            <div @click="mobileMenuOpen = !mobileMenuOpen" class="tablet:hidden cursor-pointer"><BurgerMenu :open="mobileMenuOpen"/></div>
        </div>
    </div>
</template>

<script>
    import BurgerMenu from './BurgerMenu.vue';

    export default {
        name: "HeaderSection",
        components:{
            BurgerMenu
        },
        data(){
            return {
                mobileMenuOpen: false
            }
        }
    }

</script>