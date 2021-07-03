// https://hackmd.io/nWIgS5DqQJ60CnwY3DEeCg



// 型別轉換
// 知識點1：轉換成數字
// 方法：parseInt()、Number()


// 知識點2：轉換成字串
// 方法：stringify()
// 範例：
// let obj = {name: "Hex"};
// JSON.stringify(42); // "42"
// JSON.stringify(true); // "true"
// JSON.stringify(obj); // "{"name":"Hex"}"


// 知識點3：從Json格式轉為
// localStorage 的儲存規定要用字串，
// 因此從localStorage 取得的物件、陣列「字串」時，需要將它們轉換回物件、字串格式才能正常使用。
// 方法：JSON.parse()





// 題目：
// 取得範例中的 input DOM 元素，並且取得其中的值 （DOM 結構上取得的都是字串）
// 將值定義成變數命名為 value
// 使以下判斷式驗證執行 if 的結果 (答錯魯一輩子喔 :D)
const app = document.querySelector('#app');
let value = parseInt(app.value);

if (value === 520) {
    console.log('暗戀對象喜歡我')
} else {
    console.log('暗戀對象只想和我當普通朋友')
}