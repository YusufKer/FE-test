<template>
    <div class="container m-auto px-4 bg-theme-primary">
        <h1 class="text-h2 leading-tight py-4">Here's a list of all the creatures that we have</h1>
        <p class="text-p pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis maxime, sapiente laborum, voluptas modi similique omnis qui in itaque deleniti recusandae ea inventore. Facere velit itaque quam optio voluptatum.</p>
        <div ref="product-grid" class="grid gap-4 mobile:grid-cols-2 laptop:grid-cols-3">
            <ProductItem v-for="animal in animalList" :key="animal.id" :animal="animal"/>
        </div>
    </div>
</template>

<script>
    import ProductItem from "../components/ProductItem.vue";

    export default{
        name: "AnimalListView",
        components: {
            ProductItem
        },
        data(){
            return {
                // I've hard coded the data which would otherwise be comming from a database
                animalList : [
                    {
                        id: 1,
                        name: "Naked Mole Rat",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos",
                        imageUrl:"1-naked-mole-rat.png",
                        price: 1200.00
                    },
                    {
                        id: 2,
                        name: "Corn Snake",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos",
                        imageUrl:'2-corn-snake.jpg',
                        price: 700.00
                    },
                    {
                        id: 3,
                        name: "Bearded Dragon",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos",
                        imageUrl:"3-bearded-dragon.jpg",
                        price: 3000.00
                    },
                    {
                        id: 4,
                        name: "Leopard Gecko",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos",
                        imageUrl:"4-leopard-gecko.jpg",
                        price: 900.00
                    },
                    {
                        id: 5,
                        name: "Leech",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel, veritatis delectus ad, error quos",
                        imageUrl:"5-leech.jpg",
                        price: 600.00
                    },
                ]
            }
        }
    }
</script>