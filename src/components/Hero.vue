<template>
    <div class="bg-main w-full h-[500px] p-4 flex flex-col gap-4">
        <h1 class="text-4xl stroke-me">Wellcome to My Animal World</h1>
        <h2 class="text-2xl stroke-me leading-tight">Where we Get hold of the most illegal animals for you to keep in a cage and show your friends</h2>
        <router-link to="/animal-list" class="flex items-center w-fit h-10 px-6 border-2 rounded-md hover:shadow-md hover:bg-[#cb812d]"><span>See Animals</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "HeroSection"
    }
</script>

<style scoped>
    .bg-main{
        background-image: url('../assets/verdian-chua-CAVKZ_MOfDQ-unsplash.jpg');
        background-size: cover;
        background-position: center;
    }
    .stroke-me{
        -webkit-text-stroke: 1px #cb812d;
        font-weight: 700;
    }
</style>