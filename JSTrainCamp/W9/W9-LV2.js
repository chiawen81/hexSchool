chartData = [
    ['Louvre 雙人床架', 1],
    ['Antony 雙人床架', 2],
    ['Anty 雙人床架', 3],
    ['其他', 4],
]

// C3.js
let chart = c3.generate({
    bindto: '#chart', // HTML 元素綁定
    data: {
        type: "pie",
        columns: chartData,
        colors: {
            "Louvre 雙人床架": "#DACBFF",
            "Antony 雙人床架": "#9D7FEA",
            "Anty 雙人床架": "#5434A7",
            "其他": "#301E5F",
        }
    },
});
let orderListData = [];  // 訂單資料
let orderIdTemp;
const orderTableWrap = document.querySelector(".orderTableWrap");    // 訂單資料表格
const discardAllBtn = document.querySelector(".discardAllBtn");      // 按鈕- 刪除全部

getOrdersAPI()        // 取得訂單列表資訊

// ————————————  待辦  ————————————
// 3. 渲染圖表













// 更改訂單狀態
orderTableWrap.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.path[2].children[0].innerText);    // 訂單編號(createdAt)
    console.log('點擊的文字', e.target.innerText);
    console.log('準備要打API的訂單ID', orderIdTemp);
    findOrderId(e.path[2].children[0].innerText);    // 訂單ID (id)

    // 更改訂單狀態
    if (e.target.innerText === "已處理" || e.target.innerText === "未處理") {
        if (e.target.innerText === "已處理") {        // 已處理
            e.target.innerText = "未處理";
            getOrderStatusAPI(orderIdTemp, false);
        } else {                                     // 未處理
            e.target.innerText = "已處理";
            getOrderStatusAPI(orderIdTemp, true);
        };
    };


    // 刪除單筆訂單
    if (e.target.defaultValue === "刪除") {
        console.log('我是刪除：', e.target.defaultValue);
        deleteOrder(orderIdTemp);
    };
});



// 取得訂單編號
function findOrderId(choiceOrderNum) {
    orderListData.forEach(function (item, i) {
        if (Number(choiceOrderNum) === item.createdAt) {
            orderIdTemp = item.id
        }
    })
}



// 渲染下方訂單列表
function renderList(data) {
    orderTableWrap.innerHTML = "";

    if (data.length) {
        // step1- 產出資料
        let str = "";
        let status = "";  // 處理狀態
        let buyProduct;   // 購買清單
        data.forEach(function (item, i) {
            // 處理狀態
            if (item.paid === true) {
                status = "已處理";
            } else {
                status = "未處理";
            };

            // 購買清單
            buyProduct = "";                // 恢復成預設值
            (item.products).forEach(function (item, i) {
                buyProduct += item.title + `<br>`;
            })
            console.log('該筆交易購買清單：', buyProduct);


            str += `<tr>
    <td>${item.createdAt}</td>
    <td>
      <p>${item.user.name}</p>
      <p>${item.user.tel}</p>
    </td>
    <td>${item.user.address}</td>
    <td>${item.user.email}</td>
    <td>
      <p>${buyProduct}</p>
    </td>
    <td>2021/03/08</td>
    <td class="orderStatus">
      <a href="#">${status}</a>
    </td>
    <td>
      <input type="button" class="delSingleOrder-Btn" value="刪除">
    </td>
</tr>`;
        })

        // step2- 把表格組裝起來
        orderTableWrap.innerHTML = `<table class="orderPage-table">
<thead>
    <tr>
        <th>訂單編號</th>
        <th>聯絡人</th>
        <th>聯絡地址</th>
        <th>電子郵件</th>
        <th>訂單品項</th>
        <th>訂單日期</th>
        <th>訂單狀態</th>
        <th>操作</th>
    </tr>
</thead>`+ str + `</table>`;


    } else {        // 目前沒有訂單

        orderTableWrap.innerHTML = `<table class="orderPage-table">
        <thead>
            <tr>
                <th>訂單編號</th>
                <th>聯絡人</th>
                <th>聯絡地址</th>
                <th>電子郵件</th>
                <th>訂單品項</th>
                <th>訂單日期</th>
                <th>訂單狀態</th>
                <th>操作</th>
            </tr>
        </thead>

       <tr>
            <td colspan="8">目前沒有訂單！</td>
       </tr>
    </table>`;
    };

} // ———————  結束renderList資料渲染


discardAllBtn.addEventListener('click', function (e) {
    console.log('觸發刪除全部', e)
    deleteAllOrders();
});





// ————————————  摳API系列  ————————————
// deleteOrder("68XT6fsuijucrYJ9rM0p");  // 刪除單筆訂單
// deleteAllOrders();    // 刪除全部訂單

// 摳API- 取得訂單列表資訊
function getOrdersAPI() {
    axios.get("https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/fangwenwen/orders", {
        headers: {
            'Authorization': "ntTjAw0MVtZC8srUTw1tx2MqZkc2"
        }
    }).then(res => {
        console.log('訂單列表', res);
        if (res.status === 200) {
            orderListData = res.data.orders;    // 取得訂單列表資料
            renderList(res.data.orders);        // 渲染明細
        }
    }).catch(errorRes => {
        console.log(errorRes);
    });
}



// 摳API- 修改訂單狀態
function getOrderStatusAPI(orderId, orderStatus) {
    axios.put("https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/fangwenwen/orders", {
        "data": {
            "id": orderId,
            "paid": orderStatus
        }
    }, {
        headers: {
            'Authorization': "ntTjAw0MVtZC8srUTw1tx2MqZkc2"
        }
    }).then(res => {
        console.log(res);
        if (res.status === 200) {
            alert('狀態修改成功');
        }
    }).catch(errorRes => {
        console.log(errorRes);
    });
}



// 摳API- 刪除單筆訂單
function deleteOrder(orderId) {
    console.log('執行deleteOrder')
    axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/fangwenwen/orders/${orderId}`,
        {
            headers: {
                'Authorization': "ntTjAw0MVtZC8srUTw1tx2MqZkc2"
            }
        })
        .then(function (res) {
            console.log(res);
            alert("刪除特定訂單成功");
            getOrdersAPI();         // 重新打API、render資料

        }).catch(errorRes => {
            console.log(errorRes);
        })
}


// 摳API- 刪除全部訂單
function deleteAllOrders() {
    console.log('deleteAllOrders');
    axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/fangwenwen/orders`,
        {
            headers: {
                'Authorization': "ntTjAw0MVtZC8srUTw1tx2MqZkc2"
            }
        })
        .then(res => {
            console.log('res', res);
            alert('成功刪除全部');
            getOrdersAPI();         // 重新打API、render資料

        }).catch(error => {
            console.log('error', error);
        })
}

