import request from "./request"

const jsonHeader = { headers: { "Content-Type": "application/json" } }

//Test
const reqTest = () => request.post("/test", `{"name":"John"}`, jsonHeader)

//登入
const reqSignIn = (account, passwords) =>
  request.post(
    "/memberLogin",
    `{"account": "${account}","passwords": "${passwords}"}`,
    jsonHeader
  )

//註冊
const reqSignUp = (userData) =>
  request.post("/memberRegister", userData, jsonHeader)

//登出
const reqSignOut = () => {
  return request.post("/memberLogout", null, jsonHeader)
}

//查詢單筆會員
const reqMember = (id) => {
  return request.get(`/member/${id}`)
}
//查詢單筆會員詳細資料
const reqMemberDetail = (id) => {
  return request.get(`/member/${id}/details`)
}

//查詢全部會員
const reqGetAllMembers = () => request.get("/member/all", {})

//從session 拿出member資料
const reqSession = () => request.post("/memberSession")

const reqGetMemberId = () => request.get("/member/loggedInUserId")

//拿到密鑰
const reqSecretKey = () => request.get("/getSecretKey")

//拿解密後的狀態
const reqUserPermission = () => request.get("/checkUserPermission")

//更新密碼
const reqChangepassword = (requestData) => {
  const requestBody = {
    oldPassword: requestData.oldPassword,
    newPassword: requestData.newPassword,
  }
  return request.post("/member/changepassword", requestBody, jsonHeader)
}
//更新會員詳細資料
const reqChangeMember = (detail) => {
  return request.put("/member/update/detail", detail, jsonHeader)
}
//更新會員帳號資料
const requpdateMember = (data) => {
  return request.put("/member/update", data, jsonHeader)
}
//傳圖到特定路徑
const memberImg = (file) => {
  console.log(file)
  return request.post("/member/uploadMemberImg", file, jsonHeader)
}

//取得圖片URL
const reqMemberpic = () => request.get("/member/getImageURL")

//取得總頁數
const reqGetCmsMemberPages = (condition) => {
  return request.post("/member/pages", condition, jsonHeader)
}
//取得現在頁數內的資料
const reqGetMemberPage = (condition) => {
  return request.post("/member/pagenation", condition, jsonHeader)
}
//取的銀行帳戶
const reqMemberBank = (id) => {
  return request.get(`/member/${id}/bank`)
}
//後臺修改
const reqUpdateCmsMember = (id, updatedMember) => {
  return request.put(`/member/update/${id}`, updatedMember, jsonHeader);
}



/*----------------------------------------  食譜相關請求  -------------------------------------------*/
//CMS食譜測試
const reqDatas = () => {
  return request.get("/recipe/all")
}

//取前10筆熱門食譜
const reqTop10HotRecipe = () => {
  return request.get("/recipe/hottest10Recipes")
}

//取前10筆最新食譜
const reqTop10LatestRecipe = () => {
  return request.get("/recipe/latest10Recipes")
}

//取前10筆特定種類食譜
const req10CategoryRecipe = (categoryId) => {
  console.log("categoryId:" + categoryId)
  return request.get(`/recipe/get10categoryRecipes?cid=${categoryId}`)
}
//測試圖檔上傳可正確儲存到設定位置
const imgTest = (file) => {
  console.log(file)
  return request.post("/test/uploadimg", file, jsonHeader)
}
//送出建立食譜頁面資料
const addRecipe = (formData) => {
  return request.post("/recipe/addrecipe", formData)
}

//取得總頁數
const reqGetCmsRecipePages = (condition) => {
  return request.post("/recipe/pages", condition, jsonHeader)
}

const reqGetFrontRecipePages = (condition) => {
  return request.post("/recipe/recipeFrontPagenation", condition, jsonHeader)
}

//取得成品圖
const getRecipePicture = (recipeId) => {
  return request.post("recipe/getPic", recipeId, jsonHeader)
}
//取得步驟圖
const getStepPictures = (recipeId) => {
  return request.post("recipe/getStepPics", recipeId, jsonHeader)
}
//取得食譜資料
const getRecipe = (recipeId) => {
  return request.get(`recipe/getRecipe?recipeId=${recipeId}`, jsonHeader)
}

//更新食譜資料
const updateRecipe = (recipe) => {
  return request.put("recipe/updaterecipe", recipe, jsonHeader)
}

//刪除食譜資料
const deleteRecipe = (recipeId) => {
  return request.post(`recipe/deleterecipe?recipeId=${recipeId}`, jsonHeader)
}

//重新啟用食譜資料
const republishRecipe = (recipeId) => {
  return request.post(`recipe/republishrecipe?recipeId=${recipeId}`, jsonHeader)
}

/*----------------------------------------  食譜後台相關請求  -------------------------------------------*/
//取得現在頁數內的資料
const reqGetRecipePage = (condition) => {
  return request.post("/recipe/pagenation", condition, jsonHeader)
}
//後台取得食譜資料
const getCmsRecipe = (recipeId) => {
  return request.get(`recipe/getCmsRecipeById?recipeId=${recipeId}`, jsonHeader)
}

/*----------------------------------------  教室相關請求  -------------------------------------------*/

// 取出指定教室兩日期之間的預約資料
const getReservations = (room, start, end) => {
  return request.get(`/reservations/${room}?start=${start}&end=${end}`)
}

// 取出所有教室
const getClassrooms = () => {
  return request.get("/classrooms")
}

/*----------------------------------------  購物車相關請求  -------------------------------------------*/

// 加入購物車
const addToCart = (data) => {
  return request.post(`/cart`, data)
}

// 取得商品購物車內容
const getProductCart = () => {
  return request.get(`/cart/product`)
}

// 取得課程購物車內容
const getCourseCart = () => {
  return request.get(`/cart/course`)
}

// 取得預約教室購物車內容
const getReservationCart = () => {
  return request.get(`/cart/reservation`)
}

// 更新購物車商品數量
const reqUpdateProdQuantities = (data) => {
  return request.patch(`/cart/product`, data)
}

// 刪除購物車內容
const deleteCart = (cartId) => {
  return request.delete(`/cart/${cartId}`)
}

// 取出會員購物車商品數量
const reqGetCartCount = () => {
  return request.get(`/cart/count`)
}

/*----------------------------------------  訂單相關請求  -------------------------------------------*/

//line pay

const reqSendLinepay = (payBody) => {
  console.log(payBody)
  return request.post('/pay/linepay', payBody, jsonHeader)
}

// 新增訂單
const reqInsertOrder = (data) => {
  return request.post(`/order`, data)
}

// 取得單一訂單
const reqGetOrder = (ordId) => {
  return request.get(`/order/${ordId}`)
}

// 修改訂單狀態
const reqUpdateOrdStatus = (ordId, ordStatus) => {
  return request.patch(`/order/${ordId}?ordStatus=${ordStatus}`)
}

// 刪除訂單
const reqDeleteOrder = (ordId) => {
  return request.delete(`/order/${ordId}`)
}

// 取得會員的訂單
const reqGetMemberOrders = (page) => {
  return request.get(`/order/member/page/${page}`)
}

// 取得會員的所有預約
const reqGetMemberReservations = () => {
  return request.get(`/order/reservation`)
}

const reqGetOrderPage = (condition) => {
  return request.post("/order/pagenation", condition, jsonHeader)
}

//取得總頁數
const reqGetCmsOrderPages = (condition) => {
  return request.post("/order/pages", condition, jsonHeader)
}

//綠界金流
const ecpayCheck = (data) => {
  return request.post("/ecpayCheckout", data, jsonHeader)
}

const ecpaySend = (data) => {
  return request.post("https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5", data, { headers: { "Content-Type": "multipart/form-data" } })
}

/*---------------------------------------- 課程相關請求  -------------------------------------------*/

//從controller拿到所有課程，export出Promise物件給vue?
const getAllCourses = () => {
  return request.get(`/course/all`)
}

//列出該教師個人資料
// const editTeacherProfile = (teacherId) => {
//   return request.get(`/teacher/${teacherId}`)
// }

const editTeacherProfile = (teacher) => {
  return request.put("/edit", teacher, jsonHeader)
}

//列出該教師所有課程
const getCoursesByTeacherId = (teacherId) => {
  return request.get(`/course/teacher/${teacherId}`)
}

//刪除課程by Id
const deleteCourse = (courseId) => {
  return request.delete(`/course/${courseId}`)
}

//查詢單筆課程
const showSingleCourse = (courseId) => {
  return request.get(`/course/${courseId}`)
}

const getCourse = (page, pageSize) => {
  return request.get(`/course/search?page=${page}&pageSize=${pageSize}`)
}

const getAllCourse = (page, pageSize, dataTitles) => {
  return request.get(
    `/course/search?page=${page}&pageSize=${pageSize}&sortBy=${dataTitles}`
  )
}

const searchCourse = (criteria, jsonHeader) =>
  request.post("/course/criteria", criteria, jsonHeader)

//課程分頁
const reqGetCoursePage = (condition) => {
  return request.post("/course/pagenation", condition, jsonHeader)
}

//取得總頁數
const reqGetCmsCoursePages = (condition) => {
  return request.post("/course/pages", condition, jsonHeader)
}

//取得圖片
const UploadTeacherImage = (formData) => {
  return request.post(`/teacher/uploadImage`, formData)
}

const getTeacherImage = (id) => {
  return request.post("teacher/getImage", id, jsonHeader)
}

const reqLoadPicture = (courseImgURL) => {
  return request.get(`/course/base64/image?path=${courseImgURL}`)
}
//取得數值範圍
const reqGetCourseNumberRange = (condition) => {
  return request.post("/course/number-range", condition, jsonHeader)
}

const uploadCourseImage = (courseId, imageFormData, config) => {
  return request.post(`/course/uploadImage?courseId=${courseId}`, imageFormData, config)
}

const reqGetFrontTeacherPages = (condition) => {
  return request.post("/teacher/teacherFrontPagenation", condition, jsonHeader)
}

//刪除一筆老師
const reqDeleteTeacher = (id) => {
  return request.delete(`/teacher/delete/${id}`)
}

//取得單一老師資料
const reqGetTeacherData = (id) => {
  return request.get(`teacher/teacher-display?id=${id}`)
}

//更新老師
// const reqUpdateTeacher = (teacherData) => {
//   return request.post("teacher/updateTeacher", teacherData, jsonHeader)
// }
//更新老師
const updateTeacher = (formData) => {
  return request.post(`/teacher/editTeacher`, formData)
}

//#region ----------------------------------- 課程後台請求  ---------------------------------------*/

//取得單一課程資料
const reqGetCourseData = (id) => {
  return request.get(`course/course-desplay?id=${id}`)
}

//刪除一筆課程
const reqDeleteCourse = (id) => {
  return request.delete(`/course/${id}`)
}

const getTeacher = (teacherId) => {
  return request.get(`/teacher/${teacherId}`, jsonHeader)
}

const getTeacherDetail = () => {
  return request.get(`/teacher/detail`, jsonHeader)
}

const reqGetTeacherPage = (condition) => {
  return request.post("/teacher/pagenation", condition, jsonHeader)
}

//取得總頁數
const reqGetCmsTeacherPages = (condition) => {
  return request.post("/teacher/pages", condition, jsonHeader)
}

//更新課程
const reqUpdateCourse = (courseData) => {
  console.log(courseData)
  return request.post("/course/updateCourse", courseData, jsonHeader)
}

const addCourse = (courseData) => {
  return request.post("/course/add", courseData, jsonHeader)
}

/*---------------------------------------- 商品相關請求  -------------------------------------------*/
//取得所有商品(分頁、一頁顯示幾個、排序)
const getAllProd = (page, pageSize, dataTitles) => {
  return request.get(
    `/product/search?page=${page}&pageSize=${pageSize}&sortBy=${dataTitles}`
  )
}
const SearchProd = (criteria, jsonHeader) =>
  request.post("/product/criteria", criteria, jsonHeader)

const getProd = (page, pageSize, queryString) => {
  return request.get(
    `/product/search?page=${page}&pageSize=${pageSize}&${queryString}`
  )
}
const getProd1 = (queryParams) => {
  return request.get(`/product/search?${queryParams}`)
}
const getProdById = (productId) => {
  return request.get(`/product/details/${productId}`)
}
const reqGetProductPage = (condition) => {
  return request.post("/product/pagenation", condition, jsonHeader)
}

const AddProduct = (productData) => {
  return request.post("/product/add", productData, jsonHeader)
}
const EditProduct = (productId, productData) => {
  return request.post(`/product/edit/${productId}`, productData, jsonHeader)
}
const UploadProdImage = (productId, imageFormData, config) => {
  return request.post(
    `/product/uploadImage?productId=${productId}`,
    imageFormData,
    config
  )
}

const UpdateProdImg = (newProductId, imageFormData, config) => {
  return request.post(
    `/product/updateImg/${newProductId}`,
    imageFormData,
    config
  )
}
const deleteProdById = (productId) => {
  return request.delete(`/product/delete/${productId}`)
}
const getProductImage = (id) => {
  return request.post("product/getImage", id, jsonHeader)
}

const getAllProductImage = (id) => {
  return request.post("product/getAllImage", id, jsonHeader)
}

//取得總頁數
const reqGetCmsProductPages = (condition) => {
  return request.post("/product/pages", condition, jsonHeader)
}
// const SearchProd = (page, pageSize, dataTitles, criteria, jsonHeader) =>
// request.post(`/product/criter?page=${page}&pageSize=${pageSize}&sortBy=${dataTitles}`, criteria, jsonHeader);
/**----------------------------------------  搜索相關請求  -------------------------------------------*/

/**取得搜索提示(暫無用)*/
const reqGetHint = (table, column, searchValue) =>
  request.get(
    `/getSearchHint?tableName=${table}&columnName=${column}&searchValue=${searchValue}`
  )

/**取得分類資訊*/
const reqGetCategory = (id) => request.get(`/category/find?categoryId=${id}`)

/**取得我的最愛資訊*/
const reqGetFavoriteList = () => request.get("/user-favorite-list")

/**新增/刪除最愛*/
const reqUpdateList = (categoryId, itemId) =>
  request.post(
    "/favorite-list/updateList",
    `{"categoryId":"${categoryId}","itemId":"${itemId}"}`,
    jsonHeader
  )

/*----------------------------------------  聊天室相關請求  -------------------------------------------*/

const reqGetChatDatas = (sender, catcher, page) => {
  return request.get(
    `/message/history?sender=${sender}&catcher=${catcher}&page=${page}`
  )
}

const reqGetAdmins = (id) => {
  return request.get(`/message/admins?id=${id}`)
}

const reqReadMessage = (chatMessage) => {
  request.put("/message/setReaded", chatMessage, jsonHeader)
}

const reqGetUnreadSum = (catcher) => {
  return request.get(`/message/unread?catcher=${catcher}`)
}

/*---------------------------------------- 後台統計相關請求  -------------------------------------------*/

const reqSetRecord = (record) => {
  request.put('/record/set', record, jsonHeader)
}

const reqGetVisitRecords = () => {
  return request.get('/record/visitRecord')
}

const reqGetTargetCount = () => {
  return request.get('/record/targetSum')
}


export {
  //會員用
  reqSignIn,
  reqSignUp,
  reqSignOut,
  reqMember,
  reqMemberDetail,
  reqGetAllMembers,
  reqSession,
  reqSecretKey,
  reqUserPermission,
  reqGetMemberId,
  reqChangepassword,
  memberImg,
  reqChangeMember,
  reqMemberpic,
  reqGetCmsMemberPages,
  reqGetMemberPage,
  requpdateMember,
  reqMemberBank,
  reqUpdateCmsMember,

  /*--------食譜用-------*/
  reqTop10HotRecipe,
  reqTop10LatestRecipe,
  req10CategoryRecipe,
  reqTest,
  reqDatas,
  imgTest,
  addRecipe,
  reqGetRecipePage,
  reqGetCmsRecipePages,
  reqGetFrontRecipePages,
  getRecipePicture,
  getStepPictures,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  republishRecipe,
  getCmsRecipe,

  // 教室用
  getReservations,
  getClassrooms,

  // 購物車用
  addToCart,
  getProductCart,
  getCourseCart,
  getReservationCart,
  reqUpdateProdQuantities,
  deleteCart,
  reqGetCartCount,

  // 訂單用
  reqSendLinepay,
  reqGetOrder,
  reqUpdateOrdStatus,
  reqDeleteOrder,
  reqInsertOrder,
  reqGetMemberOrders,
  reqGetMemberReservations,
  reqGetOrderPage,
  reqGetCmsOrderPages,
  ecpayCheck,
  ecpaySend,

  //課程用
  getAllCourses,
  editTeacherProfile,
  deleteCourse,
  getCoursesByTeacherId,
  showSingleCourse,
  getCourse,
  getAllCourse,
  searchCourse,
  reqGetCoursePage,
  reqGetCmsCoursePages,
  getTeacher,
  reqGetTeacherPage,
  reqGetCmsTeacherPages,
  UploadTeacherImage,
  getTeacherImage,
  reqGetFrontTeacherPages,
  reqDeleteTeacher,
  reqGetTeacherData,
  updateTeacher,
  addCourse,
  uploadCourseImage,
  getTeacherDetail,

  //#region 課程後台
  // reqGetCourseData,
  reqLoadPicture,
  reqGetCourseNumberRange,

  //#region 課程後台
  reqGetCourseData,
  reqUpdateCourse,
  reqDeleteCourse,

  //#endregion 課程後台

  /*--------商品用-------*/
  getAllProd,
  SearchProd,
  getProd,
  getProd1,
  getProdById,
  reqGetProductPage,
  reqGetCmsProductPages,
  AddProduct,
  deleteProdById,
  UploadProdImage,
  UpdateProdImg,
  getProductImage,
  getAllProductImage,
  EditProduct,
  /*----------------------------------------  搜索相關請求  -------------------------------------------*/
  reqGetHint,
  reqGetCategory,
  reqGetFavoriteList,
  reqUpdateList,

  /*----------------------------------------  聊天室相關請求  -------------------------------------------*/
  reqGetChatDatas,
  reqGetAdmins,
  reqReadMessage,
  reqGetUnreadSum,
  reqSetRecord,
  reqGetVisitRecords,
  reqGetTargetCount,
}
