<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { imgTest } from '@/api'
import { reactive, ref } from 'vue'
import HeaderShow from '@/components/HeaderShow.vue';

const navbarlist = reactive([
    { title: '食譜', toUrl: '/recipes' },
    { title: '課程', toUrl: '/courses' },
    { title: '商品', toUrl: '/product' },
    { title: '建立食譜', toUrl: '/recipes/createrecipe' }
])

const RecipeHpOff = () => {

}

// const recipeImgData = ref(null)

// let formData = new FormData()

// const getRecipeImg = (e) => {
//     formData = new FormData()
//     formData.append("file", e.target.files[0])
//     formData.forEach((value, key) => {
//         console.log(`${key}: ${value}`);
//     })

// }

const send = async () => {
    let res = await imgTest(formData)


    console.log(recipeImgData.value);
}


</script>

<template>
    <NavBar :NavBarList="navbarlist" />
    <HeaderShow />
    <hr>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<style scoped>
/*調整食譜縮圖列外框線位置*/

.searchBarBackground {
    max-width: 100vw;
    overflow: hidden;
    max-height: 50vh;
    margin-bottom: 10px;
    margin-top: 10px;

}

.searchBarBackground img {
    max-width: 100%;
    max-height: 10%;
    height: auto
}
</style>