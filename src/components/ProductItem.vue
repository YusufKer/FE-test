<template>
    <div class="bg-green-100 border border-black">
        <img ref="imageRef" data-width="3" data-height="4" :src="animal.imageUrl ?? dafaultImageUrl" alt="err" class="object-cover object-center w-full"/>
        <div class="item-info p-2 grid gap-2">
            <p class="text-xl text-gray-900">{{ animal.name }}</p>
            <p class="text-lg leading-none text-gray-900">{{ animal.description }}</p>
            <p>R:{{ animal.price.toFixed(2) }}</p>
            <div class="flex items-center gap-4 flex-wrap">
                <button @click="addToCart" class="bg-gray-100 px-4 h-10 rounded-xl border border-red-500 w-max shrink-0">Add to Cart</button>
                <input ref="quantityRef" class="bg-gray-100 h-10 rounded-xl border border-red-500 w-14 shrink-0 pl-4" type="number" min="0" max="5" value="1">
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
                dafaultImageUrl: 'https://media.istockphoto.com/id/176430993/photo/rat.jpg?b=1&s=170667a&w=0&k=20&c=ATdPJjKaKDU-IMw1FSC_hVDf3kakS7PeiFzBtgUuwuk='
            }
        },
        mounted(){
            this.adjustAspectRatio();
            window.addEventListener("resize", e =>{
                this.adjustAspectRatio();
            })
        },
        methods: {
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
                const cart = JSON.parse(localStorage.getItem("MAW-cart")) || [];
                const x = cart.find(object => object.id === this.animal.id);
                const quantity = parseInt(this.$refs.quantityRef.value);
                if(x){
                    x.quantity += quantity;
                    const newCart = cart.filter(items => items.id !== x.id)
                    newCart.push(x);
                    newCart.sort((a,b) =>{
                        return a.id - b.id;
                    })
                    localStorage.setItem("MAW-cart",JSON.stringify(newCart));
                }else{
                    cart.push({...this.animal,quantity});
                    cart.sort((a,b) =>{
                        return a.id - b.id;
                    })
                    localStorage.setItem("MAW-cart",JSON.stringify(cart));
                }
                alert("Item Added to Cart");
            }
        }
    }
</script>