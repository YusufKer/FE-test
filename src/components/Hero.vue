<template>
    <div class="bg-main ">
        <div class="container mx-auto w-full h-[500px] p-4 flex flex-col gap-4">
            <h1 class="text-h1 stroke-me">Wellcome to My Animal World</h1>
            <h2 class="text-h2 stroke-me leading-tight">Where we Get hold of the most illegal animals for you to keep in a cage and show your friends</h2>
            <Button link="/animal-list" copy="See Animals"/>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue';

    export default {
        name: "HeroSection",
        components:{
            Button
        }
    }
</script>

<style scoped>
    .bg-main{
        background-image: url('../assets/pexels-egor-kamelev-927497.jpg');
        background-size: cover;
        background-position: center;
    }
    .stroke-me{
        -webkit-text-stroke: 2px #0d6759;
        font-weight: 700;
        color: #FFF;
    }
</style>