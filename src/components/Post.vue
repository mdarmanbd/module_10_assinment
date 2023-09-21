
<script setup>
import { reactive , onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route)
const post = reactive({
    title:''
})

onBeforeMount(()=>{
    fetch(`https://dummyjson.com/posts/${route.params.id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        post.title = json.title

    })
    
})


</script>

<template>
    <section class="w-full bg-green-400 py-5 mx-auto text-center">
        <h2 class="text-yellow-300 font-bold">this is post page</h2>
        <h2>this is post page</h2>
        <h3>this is post id : {{ $route.params.id }}</h3>
        <h3>Post title is : {{ post.title }}</h3>
        <ul>
            <li>
                <RouterLink :to='`/childListOne/${$route.params.id}`'>child list id: {{$route.params.id  }}</RouterLink>
            </li>
        </ul>
        <RouterView></RouterView>
    </section>
   
   
</template>