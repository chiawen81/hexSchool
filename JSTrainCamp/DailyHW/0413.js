console.clear();
let baseUrl = "https://hexschoollivejs.herokuapp.com";
let api_path = "fangwenwen";
let productList = document.querySelector('.productList');
let productData = [];
let productSelect = document.querySelector('.productSelect');


function getProduct() {
    let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
    axios.get(url)
        .then(function (res) {
            productData = res.data.products;
            renderProduct(productData);
            // getCategories(productData);
            createOption(productData);
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
getProduct();


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
    console.log('unstorted',unstorted);

    let sorted = unstorted.filter(function (item, i) {
        return unstorted.indexOf(item)===i
    })
    console.log(sorted)
    renderSelect(sorted);
}


// 將篩選器渲染到畫面上
function renderSelect(data) {
    productSelect.innerHTML+=`<option value="全部" selected>全部</option>`;

    data.forEach(function(item,i){
        productSelect.innerHTML += `<option value="${item}">${item}</option>`
    });
}