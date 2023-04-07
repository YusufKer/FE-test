<template>
    <div class="container m-auto p-4">
        <h1 class="text-h2 leading-tight pb-4">Your Cart</h1>
        <div class="border border-theme-secondary rounded-md overflow-hidden">
            <!-- HEADERS -->
            <div class="grid grid-cols-5 gap-4 h-10 px-1 py-2 bg-theme-primary">
                <div class="col-span-2">item</div>
                <div>price</div>
                <div>quantity</div>
            </div>
            <!-- ITEMS -->
            <div v-for="item in $store.state.cart" :key="item.id" class="grid grid-cols-5 gap-4 even:bg-theme-neutral odd:bg-gray-100 px-1 py-2">
                <div class="col-span-2">{{ item.name }}</div>
                <div>{{ item.price }}</div>
                <div>{{ item.quantity }}</div>
                <div @click="removeItem(item.id)" class="bg-[#F16442] w-fit rounded-md px-4 hover:bg-[#DE270B] hover:shadow-md flex justify-center items-center">
                    <img src="../assets/delete.png" alt="" class="w-4 h-4 object-contain">
                </div>
            </div>
            <!-- TOTAL -->
            <div class="px-1 py-2 h-10 bg-theme-primary">
                <div>TOTAL: <span class="font-bold">R{{ $store.getters.totalPrice }}</span></div>
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
        methods:{
            removeItem(id){
                this.$store.dispatch("removeItem", id);
            },
        }
    }
</script>