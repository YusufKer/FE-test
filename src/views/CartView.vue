<template>
    <div>
        <h1 class="text-2xl leading-tight py-4">Your Cart</h1>
        <div class="border border-gray-400">
            <!-- HEADERS -->
            <div class="grid grid-cols-4 gap-4 h-10 px-1 py-2">
                <div>item</div>
                <div>price</div>
                <div>quantity</div>
            </div>
            <!-- ITEMS -->
            <div v-for="item in cart" :key="item.id" class="grid grid-cols-4 gap-4 even:bg-gray-50 odd:gray-100 px-1 py-2">
                <div>{{ item.name }}</div>
                <div>{{ item.price }}</div>
                <div>{{ item.quantity }}</div>
                <button @click="removeItem(item.id)">remove</button>
            </div>
            <!-- TOTAL -->
            <div class="px-1 py-2 h-10">
                <div>TOTAL: R<span class="bg-red-50">{{ total }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartView",
        data(){
            return {
                cart:[],
                total: 0
            }
        },
        mounted(){
            const loadCart = JSON.parse(localStorage.getItem("MAW-cart")) || [];
            this.cart = loadCart;
            this.calculateTotal();
        },
        methods:{
            removeItem(id){
                const item = this.cart.find(item => item.id === id);
                if(item.quantity === 1){
                    const newCart = this.cart.filter(item => item.id !== id);
                    newCart.sort((a,b) =>{
                        return a.id - b.id;
                    })
                    this.cart = newCart;
                    localStorage.setItem("MAW-cart",JSON.stringify(this.cart));
                }else{
                    item.quantity --;
                    const newCart = this.cart.filter(item => item.id !== id);
                    newCart.push(item);
                    newCart.sort((a,b) =>{
                        return a.id - b.id;
                    })
                    this.cart = newCart;
                    localStorage.setItem("MAW-cart",JSON.stringify(this.cart));
                }
                this.calculateTotal();
            },
            calculateTotal(){
                this.total = this.cart.reduce((total, item) => {
                    return total + (item.price * item.quantity);
                },0);
            }
        }
    }
</script>