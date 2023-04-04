<template>
    <div>
        <h1 class="text-2xl leading-tight">Here's a list of all the creatures that we have</h1>
        <div class="grid gap-4 mobile:grid-cols-2 laptop:grid-cols-3">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    </div>
</template>

<script>
    import ProductItem from "../components/ProductItem.vue";

    export default{
        name: "AnimalListView",
        components: {
            ProductItem
        }
    }
</script>