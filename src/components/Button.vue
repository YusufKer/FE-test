<template>
    <router-link :to="link" :class="`btn-${uiType}`" class="flex items-center w-fit h-10 px-6 border-2 rounded-full hover:shadow-lg"><span>{{ copy }}</span></router-link>
</template>

<script>
    export default {
        name: "Button",
        props:{
            uiType:{
                type: String,
                default(){
                    return "primary"
                }
            },
            link:{
                type: String,
                default(){
                    return "/"
                }
            },
            copy:{
                type: String,
                default(){
                    return "..."
                }
            }
        }
    }
</script>

<style scoped>
    .btn-primary{
        border: 2px solid #0d6759;
        height: 40px;
        font-weight: bold;
        color:#0d6759
    }
    .btn-primary:hover{
        background-color: #0d6759;
        color:white;
    }
    .btn-secondary{
        border: 2px solid #0b2e59;
        height: 40px;
        font-weight: bold;
        color:#0b2e59;
    }
    .btn-secondary:hover{
        background-color:#0b2e59;
        color:white;
    }
</style>