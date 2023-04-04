<template>
    <div class="bg-red-100">
        <div class="container m-auto flex justify-between items-center h-10 px-4">
            <router-link to="/">
                <img class="w-auto h-10" src="https://toppng.com/uploads/preview/wild-animals-svg-scrapbook-title-zoo-svg-files-zoo-wild-animals-scrapbook-11563395836luyyeybluj.png" alt="Exotic Pet Shop - Logo Design Pet Shop@pngkey.com">
            </router-link>
            <nav class="hidden tablet:flex gap-4">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Us</router-link>
                <router-link to="/animal-list">Animal List</router-link>
                <router-link to="/contact-us">Contact Us</router-link>
                <router-link to="/Cart">Cart</router-link>
            </nav>
            <nav @click="mobileMenuOpen = !mobileMenuOpen" :class="mobileMenuOpen ? 'grid' : 'hidden'" class="tablet:hidden absolute right-0 top-10 bg-yellow-100 w-max justify-center">
                <router-link to="/" class="px-4 pt-2 hover:bg-yellow-50">Home</router-link>
                <router-link to="/about" class="px-4 hover:bg-yellow-50">About Us</router-link>
                <router-link to="/animal-list" class="px-4 hover:bg-yellow-50">Animal List</router-link>
                <router-link to="/contact-us" class="px-4 hover:bg-yellow-50">Contact Us</router-link>
                <router-link to="/Cart" class="px-4 pb-2 hover:bg-yellow-50">Cart</router-link>   
            </nav>
            <div @click="mobileMenuOpen = !mobileMenuOpen" class="tablet:hidden cursor-pointer">menu</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderSection",
        data(){
            return {
                mobileMenuOpen: false
            }
        }
    }

</script>