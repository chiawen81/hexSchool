// https://hackmd.io/7OMZaWtIRRm2nYCaZwHePQ?view



// map介紹
// 為 JavaScript 的陣列方法，可以用來「修改陣列元素」。
// 不會影響原來的陣列，而是會透過函式內所回傳的值組合成一個新的陣列。
// map() 需要設定回傳值，如果不設定則會回傳 undefined
// 範例:
let arr = [1, 2, 3, 4];
let newArr = arr.map((item) => {
    return item * 2;
});
console.log(arr); // 結果為: [1, 2, 3, 4]
console.log(newArr); // 結果為: [2, 4, 6, 8]





// 題目：
// 請使用 map() 操作 array 陣列，賦予 newArray 陣列元素。結果如下圖:
//  ["小明18歲囉", "小美15歲囉", "杰倫19歲囉", "漂亮阿姨22歲囉", "老媽28歲囉"]
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

let newArray = array.map(function (item, i) {
    return item.name + item.age +"歲囉"
})
console.log(newArray);