<script setup>
import { RouterLink } from "vue-router"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { NConfigProvider, NCollapse, NCollapseItem, darkTheme } from "naive-ui"

/* Define emit to parents */
const emit = defineEmits(["selected-title"])

/* Define props from parents */
const props = defineProps({
  // login user name
  userName: {
    type: String,
    default: "Imei Huang",
  },
  // profile picture
  userProfilePic: {
    type: String,
    default: "",
  },
})
/* Define methods */
// send title name
const sendTitle = (title) => {
  emit("selected-title", title)
}
</script>
<template>
  <div class="logo">
    <h1><router-link to="/">Dessert Oasis</router-link></h1>
  </div>
  <div class="usingAccount">
    <div style="display: flex; align-items: center">
      <font-awesome-icon :icon="['fab', 'github']" size="xl" style="color: #adcbff" />
      <h2>{{ userName }}</h2>
    </div>
    <div>
      <font-awesome-icon :icon="['far', 'paper-plane']" size="xl" style="color: #adcbff" />
    </div>
  </div>
  <div class="options">
    <n-config-provider :theme="darkTheme">
      <n-collapse arrow-placement="right" :accordion="true">
        <n-collapse-item title="會員管理" name="1">
          <div>
            <router-link @click="sendTitle(`會員管理`)" to="/cms/member">會員查詢</router-link>
          </div>
        </n-collapse-item>

        <n-collapse-item title="食譜管理" name="2">
          <div>
            <router-link @click="sendTitle(`食譜管理`)" to="/cms/recipe">食譜管理</router-link>
          </div>
        </n-collapse-item>

        <n-collapse-item title="商品管理" name="3">
          <div>
            <router-link @click="sendTitle(`商品管理`)" to="/cms/product">商品搜尋/修改</router-link>
          </div>
          <div>
            <router-link @click="sendTitle(`商品管理`)" to="/cms/addproduct">新增商品</router-link>
          </div>
        </n-collapse-item>

        <n-collapse-item title="課程管理" name="4">
          <div>
            <router-link @click="sendTitle(`課程管理`)" to="/cms/course">課程查詢</router-link>
          </div>
          <!-- <div> -->
          <!-- <router-link @click="sendTitle(`課程管理`)" to="/cms/addCourse"
              >新增課程</router-link
            > -->
          <!-- </div>
          <div> -->
          <!-- <router-link @click="sendTitle(`課程管理`)" to="/cms/addTeacherProfile">新增教師個人介紹</router-link> -->
          <!-- </div> -->
          <!-- <div> -->
          <!-- <router-link
              @click="sendTitle(`課程管理`)"
              to="/cms/teacherCourseManager"
              >教師個人課程管理</router-link
            > -->
          <!-- </div> -->
          <!-- <div> -->
          <!-- <router-link @click="sendTitle(`課程管理`)" to="/cms/editTeacherProfile">編輯教師個人介紹</router-link> -->
          <!-- </div> -->
          <div>
            <router-link @click="sendTitle(`課程管理`)" to="/cms/managerAllTeacher">所有教師列表</router-link>
          </div>
        </n-collapse-item>

        <n-collapse-item title="訂單管理" name="5">
          <div>
            <router-link @click="sendTitle(`訂單管理`)" to="/cms/order">訂單查詢</router-link>
          </div>
        </n-collapse-item>
      </n-collapse>
    </n-config-provider>
  </div>
</template>
<style scoped>
h1 {
  margin: 0 0 10px 0;
  padding-left: 10px;
}

h1 a {
  font-size: 24px;
  text-decoration: none;
  color: #dddddd;
}

h2 {
  font-size: 18px;
  color: #dddddd;
  margin: 0 0 0 5px;
}

.logo {
  display: flex;
  border-bottom: 2px double #dddddd;
}

.usingAccount {
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 2px double #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.usingAccount img {
  width: 32px;
  height: 32px;
}

.options {
  margin-top: 15px;
}

.options div {
  padding-left: 5px;
}

.options a {
  width: 100%;
  color: #dddddd;
  display: block;
  text-decoration: none;
  padding-left: 20px;
}
</style>
