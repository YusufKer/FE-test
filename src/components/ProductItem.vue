<template>
    <div class="bg-theme-neutral shadow-lg rounded-md overflow-hidden">
        <img ref="imageRef" data-width="3" data-height="4" :src="imageSrc" alt="err" class="object-cover object-center w-full"/>
        <div class="item-info p-2 grid gap-2">
            <p class="text-h3 text-gray-900">{{ animal.name }}</p>
            <p class="text-p leading-none text-gray-900">{{ animal.description }}</p>
            <p class="text-p font-bold text-theme-primary">R:{{ animal.price.toFixed(2) }}</p>
            <div class="flex items-center gap-4 flex-wrap">
                <button @click="addToCart" class="px-4 h-10 rounded-full w-max shrink-0 hover:shadow-md hover:bg-theme-primary bg-theme-secondary text-white">Add to Cart</button>
                <input ref="quantityRef" class="bg-neutral h-10 rounded-xl w-14 shrink-0 pl-4" type="number" min="0" max="5" value="1">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        props:{
            animal:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                imageSrc: require(`@/assets/animals/${this.animal.imageUrl}`)
            }
        },
        mounted(){
            this.adjustAspectRatio();
            window.addEventListener("resize", e =>{
                this.adjustAspectRatio();
            })
        },
        methods: {
            // Adjust aspect ratio of images for each screen size
            adjustAspectRatio(){
                console.log("adjusting")
                if(!this.$refs.imageRef) return;
                const element = this?.$refs?.imageRef;
                element.style.height = `unset`;
                const actualWidth = element.getBoundingClientRect().width;
                const widthRef = parseInt(element.dataset.width);
                const heightRef = parseInt(element.dataset.height);
                element.style.height = `${widthRef / heightRef * actualWidth}px`;
            },
            addToCart(){
                const { animal } = this;
                const quantity = parseInt(this.$refs.quantityRef.value);
                this.$store.dispatch("addItem", {animal,quantity});
            }
        }
    }
</script>