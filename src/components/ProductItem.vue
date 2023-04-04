<template>
    <div class="bg-green-100 border border-black">
        <div ref="imageRef" data-width="3" data-height="4" src="" alt="" class="bg-grey-100 h-[200px] border-red-700"></div>
        <div class="item-info p-2">
            <p>Animal name</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos</p>
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        mounted(){
            this.watchScreen();
        },
        methods: {
            adjustAspectRatio(){
                if(!this.$refs.imageRef) return;
                const element = this?.$refs?.imageRef;
                const actualWidth = element.getBoundingClientRect().width;
                const widthRef = parseInt(element.dataset.width);
                const heightRef = parseInt(element.dataset.height);
                element.style.height = `${widthRef / heightRef * actualWidth}px`;
            },
            watchScreen(){
                const screenObserver = new ResizeObserver (() =>{
                    this.adjustAspectRatio();
                }
                )
                screenObserver.observe(document.querySelector("body"))
            }
        }
    }
</script>