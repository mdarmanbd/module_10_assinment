<script setup>
import {ref,onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute();

const product = ref([]);

const featchProduct = (id) =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
        product.value = data
    })    
};

onBeforeMount(()=> featchProduct(route.params.id))

</script>

<template>
    <div class="w-full ">
        <div class="w-56">
            <h1>id:{{ product.id }}</h1>
            <img :src="product.image" class="w-full">
            <h2 class="bg-blue-200">product details: {{ product.description }}</h2>
        </div>
    </div>
</template>