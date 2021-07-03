// https://hackmd.io/GbWsgWbkQfeD3hRs1bEWnw


// 知識點１
// 拷貝A物件的「內容」，到Ｂ物件內
// 使用語法：Object.assign(target, ...sources)
// ps.如果直接用賦值的方法，會把「A物件的變數名」也一起拷貝過去。
// https://wcc723.github.io/javascript/2017/12/24/javascript-spread-operator/


// 知識點２
// 拷貝A陣列的「內容」，到Ｂ陣列內
// 使用語法：[...A陣列]
// 範例：
// let groupA = ['小明', '杰倫', '阿姨'];
// let groupB = ['老媽', '老爸'];
// const groupAll = [...groupA, ...groupB];    // 結果>> ['小明', '杰倫', '阿姨','老媽', '老爸']
// ps.如果直接用push的方法，會無法攤平變成>>                  [['小明', '杰倫', '阿姨'],['老媽', '老爸']]
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


// 知識點３
// 物件是pass by sharing（傳址），變數是pass by value（傳值）
// https://ithelp.ithome.com.tw/articles/10191057





// 題目：
// 請同學修改程式碼以符合以下要求 (只可以修改註解範圍內的程式碼):
// step1. 將 town 的內容複製到 townData。
// step2. 將 Ming, Rick 兩個物件加入到 townData.resident 中

let townData = {};
let town = {
    name: '真心鎮',
    resident: []
};
let Ming = { name: '小明', age: 16 };
let Rick = { name: '瑞克', age: 21 };

/*程式碼修改處 (可以更改 function 規則)*/
// 解法一
function addResident(obj, res1, res2){
    townData = { ...obj };
    console.log('第一題答案', townData);
    
    townData.resident.push(res1);
    townData.resident.push(res2);
    console.log('第二題答案', townData);
}
/*程式碼修改處*/
addResident(town, Ming, Rick);
console.log(townData === town); // 結果須為 false


// // 解法二
// function addResident(obj, res1, res2) {
//     townData = Object.assign({}, obj);
//     townData.resident.push(res1, res2); // push 可推入多個值
// }