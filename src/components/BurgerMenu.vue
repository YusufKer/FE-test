<template>
    <div class="flex flex-col gap-1 w-6">
        <div :class="open && 'open-upper'" class="transition duration-150 w-full h-0.5 bg-white"></div>
        <div :class="open && 'open-middle'" class="transition duration-150 w-full h-0.5 bg-white"></div>
        <div :class="open && 'open-lower'" class="transition duration-150 w-full h-0.5 bg-white"></div>
    </div>
</template>

<script>
    export default {
        name: "burgerMenu",
        props:{
            open:{
                type:Boolean,
                default(){
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .open-upper{
        transform: rotate(-45deg);
        transform-origin: top right;
        width: 18px;
    }
    .open-middle{
        opacity: 0;
    }
    .open-lower{
        transform: rotate(45deg);
        transform-origin: bottom right;
        width: 18px;
    }
</style>