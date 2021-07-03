// https://hackmd.io/SffwS7WtRaeL9SjVg10tDw?view


// // 知識點：箭頭函式
// function saySomething(string) {                        // 傳統函式
//     return '接招' + string;
// }

// //【 箭頭函式的運用技巧如下 】
// // 要點１：轉成箭頭函式
// const saySomething = (string) => {
//     return '接招 ' + string;
// }

// // 要點２：當只有單行表達式時，可同時省略 return 及 {}
// const saySomething = (string) => '接招 ' + string;      // 省略後依然保有回傳的特質
// console.log(saySomething('菜鳥!'));

// // 要點３：不過要注意，如果有使用 {}，就需要自行加上 return
// const saySomething = (string) => { '接招 ' + string };
// console.log(saySomething('菜鳥!'));                     // 會回傳 undefined

// // 要點４：只有一個參數可以不加括號 ()
// const saySomething = string => '接招 ' + string;
// console.log(saySomething('菜鳥!'));

// // 要點５：沒有參數、參數有兩個以上都不能省略 ()
// const saySomething = () => '接招 菜鳥!';
// console.log(saySomething());





// 題目
// 請將以下程式碼簡化為箭頭函式 (不影響結果的情況下進行最大簡化)
// 題目一
function sum(a, b) {
    let c = a + b;
    return c;
}
console.log(sum(5, 6));

const sum1 = (a, b) => {
    let c = a + b;
    return c;
}
console.log('第一題答案：', sum1(5, 6));



// 題目二
function square(num) {
    return num * num;
}
console.log(square(5))

const square2 = num => num * num;
console.log('第二題答案：', square(5));
// 如果有使用 {}，就需要自行加上 return。不是如果有使用return，要加上{}



// 題目三
setTimeout(function () {
    console.log('延遲 1 秒');
}, 1000);

setTimeout(() => {
    console.log('第三題答案 ： 延遲 1 秒');
}, 1000);
// 沒有參數、參數有兩個以上，不可省略()



// 題目四
let arr = [1, 2, 3];
let arrNew = arr.map(function (item, i) {
    return item * i;
});
console.log(arrNew);
let arrNew1 = arr.map((item, i) => item * i);
console.log('第四題答案：', arrNew1);
// 沒有參數、參數有兩個以上，不可省略()
// 如果沒有{}，可以不用寫return



// 題目五
let obj = {
    fn: function fn2(a) {
        return a * a;
    }
}
console.log(obj.fn(10));

let obj2 = {
    fn: fn2 = a => a * a
}
console.log('第五題答案：', obj2.fn(10));
// 參數只有一個的話，可以省略（）
// 如果沒有{}，可以不用寫return
