// https://hackmd.io/pcgo_BRyScSWIqjN0rv8LQ



// 題目：
// 請修正以下程式碼錯誤，並執行 console.log
// 請嘗試說明以下程式碼錯誤的原因
let saySomething = '小姐一個人嗎 :D';
(function() {
  console.log(saySomething);
})

// 1. 「小姐一個人嗎」的結尾要有分號
// 2. 少了一個括弧，改成這樣即可：
(function() {
    console.log(saySomething);
  })()