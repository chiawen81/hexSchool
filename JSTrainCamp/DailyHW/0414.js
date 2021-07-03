console.clear();
let baseUrl = "https://hexschoollivejs.herokuapp.com";
let api_path = "fangwenwen";
let productList = document.querySelector('.productList');
let productData = [];
let productSelect = document.querySelector('.productSelect');
let matchCondition = [];
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
getProduct();


function getProduct() {
    let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
    axios.get(url)
        .then(function (res) {
            productData = res.data.products;
            renderProduct(productData);
            createOption(productData);
            searchBtn.addEventListener("click", function () {
                keywords(productData)
            })

        })
        .catch(function (error) {
            console.log(error);
        })
}


function renderProduct(product) {
    let str = '';
    product.forEach((item) => {
        str += `
      <div class="col-6 mb-3">
      <div class="card">
        <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
          <p class="card-text"><strong>種類:</strong> ${item.category}</p>
          <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
          <p class="card-text"><strong>售價:</strong> ${item.price}</p>
          <p class="card-text"><strong>描述:</strong> ${item.description}</p>
        </div>
      </div>
    </div>
    `
    })
    productList.innerHTML = str;
}


// 商品篩選功能
productSelect.addEventListener('change', selectFilter);
function selectFilter(e) {
    let category = e.target.value;
    if (category === "全部") {
        renderProduct(productData);
        return;
    }
    let targetProducts = [];
    productData.forEach(function (item) {
        if (item.category === category) {
            targetProducts.push(item);
        }
    })
    renderProduct(targetProducts);
}
// 0413目標
// 嘗試不要將 select 欄位寫死，
// 而是使用 axios 取回的 products 資料，篩選出產品的 category 後再渲染至網頁上


// 製作選項
function createOption(data) {
    console.log(data)
    let unstorted = data.map(function (item, i) {
        return item.category;
    });
    console.log('unstorted', unstorted);

    let sorted = unstorted.filter(function (item, i) {
        return unstorted.indexOf(item) === i
    })
    console.log(sorted)
    renderSelect(sorted);
}


// 將篩選器渲染到畫面上
function renderSelect(data) {
    productSelect.innerHTML += `<option value="全部" selected>全部</option>`;

    data.forEach(function (item, i) {
        productSelect.innerHTML += `<option value="${item}">${item}</option>`
    });
}

// 關鍵字搜尋
function keywords(data) {
    console.log(data)

    // 取得欲比對的關鍵字
    let targetWords = searchInput.value.trim().toLowerCase();
    // let targetProduct = []

    // targetProduct = data.filter(function (item, i) {
    //     // console.log(item,i)
    //     let title = item.title.trim().toLowerCase();
    //     // console.log(item.title)
    //     console.log(i, item.title, targetWords, title.match(targetWords))
    //     return title.match(targetWords)
    // });
    // console.log(targetProduct)
    // renderProduct(targetProduct);


    // // // 原始資料(原始寫法)
    // data.map(function (item, i) {
    //     matchCondition.push(item.title)
    // })
    // console.log(matchCondition)
//Louvre 雙人床架／雙人加大
    // 原始寫法(修)
    data.map(function (item, i) {
        let matchCondition=[]
        console.log(targetWords,item.title)
        if (item.title.trim().toLowerCase() === targetWords.trim().toLowerCase() ) {
            console.log('符合條件', i, item)
            matchCondition.push(item);
            console.log(matchCondition)
            renderProduct(matchCondition);
        }

    })
 


    // // 兩者比對
    // productTitle.forEach(function (item, i) {
    //     console.log(targetWords, item)
    //     if (targetWords.match(item) != null) {
    //         console.log(item)
    //         matchCondition.push(item);
    //     }
    // })
    // console.log('符合條件的：', matchCondition);
    // renderKeywordsResult(matchCondition, data);    // 渲染關鍵字比對的結果
}

// 渲染關鍵字比對的結果
function renderKeywordsResult(matchData, allData) {
    let renderData = []
    console.log('in')

    // 抓出符合資料的完整資料

    for (let i = 0; i < allData.length; i++) {
        console.log("in2")
        if (allData[i].title === matchData[0]) {
            console.log(i)
            productList.innerHTML = "";
            console.log(allData[i])

            renderProduct(allData[i])
        }
    }
}
