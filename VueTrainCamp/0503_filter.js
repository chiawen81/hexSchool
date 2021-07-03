// https://hackmd.io/qa8OY8GcReuqMHQiNu2EEw



// filter 介紹
// 為 JavaScript 的陣列方法，可以用來「篩選陣列元素」。
// 不會影響原來的陣列，而是會透過函式內所回傳的值組合成一個新的陣列。
// 範例：
let price = [900, 1000, 400, 200, 100];
let newPrice = price.filter(item => {
    // 會篩選出「判斷為 true 的陣列元素」
    return item > 300;
})
console.log(price); // 結果為: [900, 1000, 400, 200, 100]
console.log(newPrice); // 結果為: [900, 1000, 400]





// 題目：
// 請使用 filter() 操作 array 陣列，篩選出屬性 age <= 18 的陣列元素有哪些，並指派給 newArray。
const array = [
    {
        name: '小明',
        age: 18
    },
    {
        name: '小美',
        age: 15
    },
    {
        name: '杰倫',
        age: 19
    },
    {
        name: '漂亮阿姨',
        age: 22
    },
    {
        name: '老媽',
        age: 28
    }
];
let newArray = [];
newArray=array.filter(function (item, i) {
    if (item.age <= 18) {
        return item.name;
    };
});
console.log(newArray);