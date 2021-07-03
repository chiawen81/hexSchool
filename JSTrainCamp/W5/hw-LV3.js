// 目標
//  1. 可以選擇免費/投幣，並新增資料到底下
//  2. 點擊按鈕可以切換顯示全部、免費、投幣式
//  3. 延伸功能一：以按鈕顏色區別顯示目前的清單位置為投幣、免費、全部
//  4. 延伸功能二：在非當前面板新增資料時，不會顯示在底下。舉例來說：
//     在投幣式面板新增免費充電站時不會顯示在底下，切換至免費面板時才會顯示

const data = [                                           // 假資料
    {
        name: "文文充電站",
        type: "投幣式"
    }, {
        name: "金金充電站",
        type: "免費"
    }, {
        name: "喵喵充電站",
        type: "免費"
    }, {
        name: "呱呱充電站",
        type: "投幣式"
    }
];
let list = document.querySelector("#list");               // 表單取值
let allBtn = document.querySelector("#allBtn");           // 按鈕- 全部
let freeBtn = document.querySelector("#freeBtn");         // 按鈕- 免費
let chargeBtn = document.querySelector("#chargeBtn");     // 按鈕- 投幣式
let submit = document.querySelector("#submitBtn");        // 按鈕- 送出
let spotName = document.querySelector("#input");          // 充電站名字
let spotType = document.querySelector("#selector");       // 充電站類型

// ——————————  初始預設狀態  ——————————
// 預設在「全部」的清單面板
data.forEach(function (item, i) {
    list.innerHTML += `<li>${item.name}充電站，${item.type}</li>`;
});
allBtn.setAttribute('class', "choicedBtn");



// —————————————  篩選  —————————————
// 監聽事件
allBtn.addEventListener('click', function () {
    filter("全部");
    colorChange(allBtn);
});
freeBtn.addEventListener('click', function () {
    filter("免費");
    colorChange(freeBtn);
});
chargeBtn.addEventListener('click', function () {
    filter("投幣式");
    // chargeBtn.setAttribute('class',"choicedBtn");
    colorChange(chargeBtn);
});


// 執行篩選
function filter(condition) {
    list.innerHTML = "";                   // 初始值清空

    data.forEach(function (item, i) {      // 依條件篩選資料
        if (condition === item.type) {
            addData(item.name, item.type);

        } else if (condition === "全部") {
            addData(item.name, item.type);
        };
    });
}



// ———————————  新增資料  ———————————
let obj = {};

submit.addEventListener("click", function () {
    // console.log('test');
    // console.log(spotName.value);
    // console.log(spotType.value);
    obj = {};
    obj.name = spotName.value;
    obj.type = spotType.value;
    data.push(obj);

    // 延伸功能2：在免費的地方新增資料投幣資料時，在下方不會看到，要切到投幣才會看到
    if (allBtn.getAttribute('class') === "choicedBtn") {
        addData(spotName.value, spotType.value);
    } else if (freeBtn.getAttribute('class') === "choicedBtn" && spotType.value === "免費") {
        addData(spotName.value, spotType.value);
    } else if (chargeBtn.getAttribute('class') === "choicedBtn" && spotType.value === "投幣式") {
        addData(spotName.value, spotType.value);
    };
    spotName.value = ""
})


function addData(name, type) {
    list.innerHTML += `<li>${name}充電站，${type}</li>`;
}


// ———————————  延伸功能1  ———————————
// 按鈕會變色顯示現在的清單位置為全部/免費/投幣
function colorChange(btnName) {
    allBtn.setAttribute('class', "");
    freeBtn.setAttribute('class', "");
    chargeBtn.setAttribute('class', "");
    btnName.setAttribute('class', "choicedBtn");
}



