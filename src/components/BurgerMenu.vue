<template>
    <div class="flex flex-col gap-1 w-6">
        <div :class="open && 'open-upper'" class="w-full h-0.5 bg-white"></div>
        <div :class="open && 'open-upper'" class="w-full h-0.5 bg-white"></div>
        <div :class="open && 'open-upper'" class="w-full h-0.5 bg-white"></div>
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