<script setup>

import { ref, onMounted } from 'vue';
import { reqMemberDetail, reqSession, memberImg, reqMemberpic } from '@/api';
const memberId = ref("");

// const memberData = ref("");
// const memberMdData = ref("")

const memberpic = ref();
const imageURL = ref('');

const fetchImageURL = async () => {
    try {
        const response = await reqMemberpic();
        imageURL.value = response.data;

        console.log(response.data)
    } catch (error) {
        console.error('URL取得失敗', error);
    }
};


onMounted(async () => {
    fetchImageURL();

    try {
        const sessionResponse = await reqSession();
        const sessionData = sessionResponse.data;
        memberId.value = sessionData.id;
        console.log("我是" + memberId.value);

        const responseMd = await reqMemberDetail(memberId.value);

        memberpic.value = responseMd.data.pic



    } catch (error) {
        console.error('獲取會員失敗：', error);
    }
});
//圖片預覽
const memberJsonData = ref(null)
const memberPicPreviewImageUrl = ref(null)

const getMemberImg = (e) => {
    //利用change事件取得圖檔
    const memberImgData = e.target.files[0]
    if (memberImgData) {
        //FileReader會自動讀取input中上傳的檔案
        const reader = new FileReader();
        //將圖檔轉成base64編碼
        reader.readAsDataURL(memberImgData);
        //FileReader讀取完成時觸發onload事件
        reader.onload = (e) => {
            //讀取完成後利用e.target.result取得圖檔的base64編碼數據, 
            //並將其進行字串處理取得split後的的第二個元素(資料中base64編碼所在位置)
            const base64Data = e.target.result.split(',')[1]
            //將字串利用物件建立兩個屬性放入對應數據(屬性名稱一定要為fileName: 以及  base64Content:)
            const jsonData = {
                fileName: memberImgData.name, //用以儲存圖檔檔名(const recipeImgData = e.target.files[0]中的name屬性值)
                base64Content: base64Data  //用以儲存base64字串
            }
            //jsonData物件轉成JSON格式放入物件內,用以傳送給Server
            memberJsonData.value = JSON.stringify(jsonData);


            //用以利用 onbind img標籤內的src產生預覽圖
            memberPicPreviewImageUrl.value = e.target.result
            console.log('以下是memberJsonData');
            console.log(memberJsonData.value);


        }
    }
}


const submitForm = async () => {
    try {
        const res = await memberImg([memberJsonData.value]);
        console.log("成功", res.data);

        // 成功上传后更新图像
        imageURL.value = res.data; // 设置图像URL
    } catch (error) {
        console.error('失败', error);
    }
};




// const imageURL = ref('images/member/5/123123.jpg');
</script>


<template>
    <div>
        <div class="bg-secondary-soft px-4 py-5 rounded">
            <div class="row g-3">
                <div class="col-md-6"> <!-- 左侧内容列 -->
                    <div class="text-center">
                        <h4 class="mb-4 mt-0">點擊上傳頭像圖片</h4>
                        <label for="memberpic">
                            <div class="imageContainer container">
                                <img class="memberPicture inputLabel custom-cursor-pointer " id="previewPic0" alt="頭像圖片"
                                    :src="memberPicPreviewImageUrl || 'https://fakeimg.pl/1180x310/?text=Image'">
                            </div>
                            <input @change="getMemberImg" class="form-control visually-hidden pic" type="file"
                                id="memberpic" name="memberpic" accept="image/*"><br>
                        </label><br><br>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-lg mt-5" @click="submitForm">更新</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-center">
                        <h4 class="mb-4 mt-0">目前的頭像</h4>
                        <img :src="imageURL" alt="Member Image" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
button {
    margin: auto 15px;
}

.memberPicture {
    width: 300px;

    height: 300px;

    object-fit: contain
}

.custom-cursor-pointer {
    cursor: pointer !important;
}

img {
    width: 300px;
    height: 300px;
    object-fit: contain
}
</style>