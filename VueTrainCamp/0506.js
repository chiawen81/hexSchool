// https://hackmd.io/zqThpKKHQKC1dxWK48jwSA?both



// 知識點
// 表達式 vs 陳述式
// 陳述式：會執行一些程式碼，可能是幾個單詞或是一個片段（但不會是單一個字母），但最大的特徵是不會回傳結果。
//        包含：宣告（var、function）、流程控制（block、if…else）、迴圈（for、for…in）、其它（import, export）
//        EX: var a 、 {  console.log(a); }
// 表達式：最大的特徵在於會回傳結果。
//        包含：純值、變數、運算子、執行函式、正規表達式、函式表達式
//        EX: 1、1 === 1





// 題目
// 問題 1-1 (判斷何者為表達式): 
if (Ans) {                         // 表達式
    console.log("Ans 是表達式");    // 陳述式
}


// 問題 1-2：請問以下有哪些選項代入 Ans 可以輸出 console.log 不會報錯?
// 1. 2 === 2
// 2. "string"
// 3. var a 
// 4. if(true){let a = 2;}
// 5. [25, 30] // 純陣列
// 6. {name: "hexSchool"}  // 純物件
// 答案：1.2.5.6


// 問題 2-1 (表達式的應用):
function hexIsGood() {
    return true;
}
// 以上程式碼為一個「表達式」，請大家到 MDN 或是透過 Google 搜尋，尋找有哪些程式運作可以插入以上的表達式，仍能正確運行。


// Ex1: 可以帶入三元運算子
function hexIsGood() {
    return true;
}
console.log(hexIsGood() ? '很棒棒' : '不棒棒');

// Ex2: 可以代入樣板字面值
function hexIsGood() {
    return true;
}
let str = `六角學院很讚: ${hexIsGood()}`;
console.log(str);

// Ex3
hexIsGood()

// Ex4
if(hexIsGood()){console.log('in')}

// Ex5
if(hexIsGood()===true){console.log('in')}