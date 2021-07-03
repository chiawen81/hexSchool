const productWrap = document.querySelector(".productWrap");         // 卡片區ul
const productSelect = document.querySelector(".productSelect");     // 選單
const shoppingCart = document.querySelector(".shoppingCart-table"); // 購物車DOM
const clearProduct = document.querySelector(".material-icon");      // 刪除品項按鈕
const clearProductAll = document.querySelector(".discardAllBtn");   // 刪除全部品項
let productsDetailAPIData;
let filterAry = [];
let cartsNowProductCount;  // 購物車的「品項」數量
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerEmail = document.querySelector("#customerEmail");
const customerAddress = document.querySelector("#customerAddress");
const tradeWay = document.querySelector("#tradeWay");
const sumnitOrder = document.querySelector(".orderInfo-btn");


// 初始化
getProductsDetail();    // 摳API- 拿產品列表資料
getCartInit();          // 摳API- 購物車初始資訊

// ————————————————  摳API系列  ————————————————
// 摳API- 拿產品列表資料
function getProductsDetail() {
    axios.get("https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/products").then(res => {
        console.log(res);
        if (res.status === 200) {
            productsDetailAPIData = res.data.products;
            renderproductWrapHTML(productsDetailAPIData);    // 渲染產品資訊到畫面上
        }
    });
}



// ————————————  渲染產品資訊到畫面上  ————————————
function renderproductWrapHTML(data) {
    console.log('觸發renderproductWrapHTML', data)
    productWrap.innerHTML = "";    // 初始化- 清除html
    data.forEach(function (item, i) {
        productWrap.innerHTML += `<li class="productCard">
        <h4 class="productType">新品</h4>
        <img src="${item.images}" alt="">
        <a href="#" id="addCardBtn" data-productId="${item.id}">加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${item.origin_price}</del>
        <p class="nowPrice">NT$${item.price}</p>
    </li>`;
    })
}



// ——————————————————  選單篩選  ——————————————————
productSelect.addEventListener("change", function () {
    filterAry = [];    // 清空暫存(符合條件的產品列表)
    productsDetailAPIData.forEach(function (item, i) {
        console.log(item.category, productSelect.value);
        if (item.category === productSelect.value) {
            filterAry.push(item);
            console.log('資料檢查', productSelect.value, item.category)
            // console.log(filterAry);
            renderproductWrapHTML(filterAry)                       // 渲染產品資訊到畫面上
        } else if (productSelect.value === "全部") {
            renderproductWrapHTML(productsDetailAPIData);          // 渲染產品資訊到畫面上
        };
    });
});



// ————————————————  加入購物車  ————————————————
// 摳API- 取得購物車資訊
function getCartInit() {
    axios.get("https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/carts").then(res => {
        console.log(res);
        if (res.status === 200) {
            checkCartHasProduct(res.data.carts.length, res.data.carts, res.data.finalTotal)
        }
    }).catch(error => {
        console.log(error);
    })
}


// 檢查購物車
function checkCartHasProduct(cartsLength, cartsData, finalTotal) {
    // 重新render購物車、修改總金額
    if (cartsLength) {
        renderCart(cartsData, finalTotal);
    } else {
        shoppingCart.innerHTML = `<br><br><br><br><span class="cartNoProduct">目前購物車內沒有商品！</span><br><br><br><br>`
    };
    cartsNowProductCount = cartsLength;    // 更新購物車目前品項數量
    console.log('購物車的「品項」數量', cartsNowProductCount);
}


// 監聽事件- 加入購物車
productWrap.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);    // 加入購物車的DOM元素
    let productId = e.target.dataset["productid"];
    addToCartAPI(productId);
})


// 摳API- 加入購物車
function addToCartAPI(id) {
    axios.post("https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/carts", {
        "data": {
            "productId": id,
            "quantity": 1
        }
    }).then(res => {
        console.log('addToCartAPI結果(成功)', res);
        if (res.status === 200) {
            let cartInfo = getCartInfo(res.data.carts, id);
            console.log('cartInfo', cartInfo);
            console.log('更新總金額', res.data.finalTotal)
            alert(`已成功將「${cartInfo.product.title}」加入購物車！`);

            renderCart(res.data.carts, res.data.finalTotal); // 重新渲染購物車
        }

    }).catch(errorRes => {
        console.log('addToCartAPI結果(失敗)', errorRes);
    });
}


// 重新渲染購物車畫面
function renderCart(allCartData, finalTotal) {
    console.log('購物車資訊(所有商品)', allCartData);
    cartsNowProductCount = allCartData.length;    // 更新購物車目前品項數量

    // step1- 產出商品明細
    let str = '';
    allCartData.forEach(function (item, i) {
        let subTotal = (item.product.price) * (item.quantity)
        str += `<tr>
        <td>
            <div class="cardItem-title">
                <img src=${item.product.images} alt="">
                <p>${item.product.title}</p>
            </div>
        </td>
        <td>${item.product.price}</td>
        <td>${item.quantity}</td>
        <td>${subTotal}</td>
        <td class="discardBtn">
            <a href="javascript:void(0);" class="material-icons" data-cartId=${item.id}>
                clear
            </a>
        </td>
    </tr>`;
    })

    // step2- 前面加上表頭
    shoppingCart.innerHTML = ` <tr>
    <th width="40%">品項</th>
    <th width="15%">單價</th>
    <th width="15%">數量</th>
    <th width="15%">金額</th>
    <th width="15%"></th>
</tr>`+ str;

    // step3- 後面加上總金額
    shoppingCart.innerHTML += `<tr><td>
    <a href="#" class="discardAllBtn">刪除所有品項</a>
</td><td></td><td></td><td>
    <p>總金額</p>
</td>
<td>NT$${finalTotal}</td>
</tr>`;
}// ———————————渲染購物車明細畫面結束


// 購物車的商品訊息(單個)
function getCartInfo(cartData, productId) {
    let returnInfo;
    cartData.forEach(function (item, i) {
        if (item.product.id === productId) {
            console.log('加入購物車的產品', item);
            console.log('新增產品的購物車id：', item.id);
            returnInfo = item;
        };
    });

    return returnInfo;
}





// —————————————————  刪除購物車商品  —————————————————
// 摳API- 刪除購物車內品項
shoppingCart.addEventListener("click", function (e) {
    console.log(e);
    console.log('加入購物車的DOM元素', e.target);
    console.log('欲刪除的品項名：', e.path[2].children[0].innerText);
    let cartId = e.target.dataset["cartid"];              // 單個刪除按鈕的購物車id
    let deleteProductName = e.path[2].children[0].innerText;

    if (e.target.className === "material-icons") {        // 刪除單項產品
        deleteProduct(cartId, deleteProductName);
    } else if (e.target.className === "discardAllBtn") {  // 刪除全部產品
        console.log('in')
        deleteAllProduct();
    } else {
        console.log('shoppingCart監聽觸發-其他元素')
    };
})


// 刪除購物車商品- 單個
function deleteProduct(cartId, deleteProductName) {
    axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/carts/${cartId}`).then(res => {
        console.log(res);
        if (res.status === 200) {
            alert(`已成功將「${deleteProductName}」從購物車刪除!`);
            // 重新render購物車、修改總金額
            checkCartHasProduct(res.data.carts.length, res.data.carts, res.data.finalTotal);
        };
    }).catch(errorRes => {
        console.log(errorRes);
    });
}


// 刪除購物車商品- 全部
function deleteAllProduct() {
    axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/carts`).then(res => {
        console.log(res);
        if (res.status) {
            alert(res.data.message);
            // 重新render購物車、修改總金額
            checkCartHasProduct(0, res.data.carts, 0);
        }
    }).catch(errorRes => {
        console.log(errorRes);
    });
}





// —————————————————  送出訂單  —————————————————
// 送出訂單
sumnitOrder.addEventListener('click', function (e) {
    console.log('觸發監聽，預訂資料：',customerName.value, customerPhone.value, customerEmail.value, customerAddress.value, tradeWay.value);

    if (cartsNowProductCount) {      // 確認購物車有商品
        if (customerName.value && customerPhone.value && customerEmail.value && customerAddress.value) {   // 預訂資料驗證
            axios.post("https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/fangwenwen/orders", {
                "data": {
                    "user": {
                        "name": customerName.value,
                        "tel": customerPhone.value,
                        "email": customerEmail.value,
                        "address": customerAddress.value,
                        "payment": tradeWay.value
                    }
                }
            }).then(res => {
                console.log('成功送出訂單res：',res)
                if (res.status === 200) {
                    alert('已成功送出訂單\n感謝您的訂購！');
                };
            }).catch(errorRes => {
                console.log(errorRes);
            });
        } else {
            // 預訂資料未通過驗證
            alert('預訂資料欄位皆為必填，請檢查是否有遺漏！');
        };

    } else {
        // 購物車內沒有商品
        alert('目前購物車沒有商品喔！\n請先選購再填單預訂：)')
    };
})





