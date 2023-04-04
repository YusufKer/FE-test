<template>
    <div class="w-full h-[500px] bg-yellow-500 p-4 flex flex-col gap-4">
        <h1 class="text-4xl">Wellcome to Pets</h1>
        <h2 class="text-2xl leading-tight">Where we Get hold of the most illegal animals for you to keep in a cage and show your friends</h2>
        <router-link to="/animal-list" class="flex items-center w-fit h-10 px-6 border-2 border-red-500 rounded-md"><span>See Animals</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "HeroSection"
    }
</script>