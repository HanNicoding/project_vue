<!-- 
    使用方法：
        傳入值：
            (1)categoryOptions：查出的分類
        傳出值：
            (1)'get-category-id'：選擇到的分類
 -->
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import myForTree from './ForTree.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**定義 emit */
const emit = defineEmits(['get-category-id'])

/**定義 props */
const props = defineProps({
    categoryOptions: {
        default: [{
            id: 1,
            categoryName: '商品',
            children: [{
                id: 2,
                categoryName: '點心',
                children: [{
                    id: 3,
                    categoryName: '蛋糕',
                }, {
                    id: 4,
                    categoryName: '麵包',
                }]
            }, {
                id: 5,
                categoryName: '工具',
                children: [{
                    id: 6,
                    categoryName: '火箭筒',
                }, {
                    id: 7,
                    categoryName: '步槍',
                }, {
                    id: 8,
                    categoryName: '炸藥',
                }]
            }]
        }]
    },
})

/**顯示用資料 */
const datas = ref([])

const options = computed(() => {
    return init.value
})

/**傳出方法 */
const getCategoryId = (id) => {
    emit('get-category-id', id)
}

const onGetCategoryId = (id) => {
    emit('get-category-id', id)
}

/**初始化數據 */
const init = computed(() => {
    return initDatas(props.categoryOptions)
})

const initDatas = (datas) => {
    let options = datas.map((option) => {
        try {
            if (option.show) {
                return {
                    id: option.id,
                    categoryName: option.categoryName,
                    children: initDatas(option.children),
                    show: true
                }
            }
        } catch (error) {

        }
        return {
            id: option.id,
            categoryName: option.categoryName,
            children: initDatas(option.children),
            show: false
        }
    })
    return options
}

watch(options, () => {
    datas.value = options.value
})

onMounted(() => {
    datas.value = init.value
})

</script>
<template>
    <ul class="categoryList">
        <li v-for="category in datas" :key="category.id">
            <span @click="category.show = !category.show">
                <font-awesome-icon v-if="!category.show" :icon="['fas', 'caret-right']" size="xs" />
                <font-awesome-icon v-if="category.show" :icon="['fas', 'caret-down']" size="xs" />
            </span>
            <span @click="getCategoryId(category.id)">
                {{ category.categoryName }}
            </span>
            <myForTree v-if="category.children && category.show" @get-category-id="onGetCategoryId"
                :categoryOptions="category.children" />
        </li>
    </ul>
</template>
<style scoped>
ul {
    list-style: none;
    padding-left: 15px;
}

ul span {
    height: 100%;
    padding-right: 5px;
    padding-left: 5px;
    cursor: pointer;
}
</style>