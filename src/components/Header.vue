<template>
    <div class="bg-red-100">
        <div class="container m-auto flex justify-between items-center h-8">
            <router-link to="/">
                <img class="w-4 h-4" src="../assets/logo.png" alt="">
            </router-link>
            <nav class="flex gap-4">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Us</router-link>
                <router-link to="/animal-list">Animal List</router-link>
                <router-link to="/contact-us">Contact Us</router-link>
                <router-link to="/Cart">Cart</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderSection"
    }

</script>