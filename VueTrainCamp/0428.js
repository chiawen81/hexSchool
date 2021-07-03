// https://hackmd.io/baeXjiybRK-pUX6YxefSvA



// 語法：
// Object.keys() 可以取得指定物件的所有 key 值，並回傳一個陣列。
// Object.values() 可以取得指定物件的所有 value 值，並回傳一個陣列。
// 範例：
const object1 = {
    a: "字串",
    b: 42,
    c: false
};

console.log(Object.keys(object1)); // 結果: ["a", "b", "c"]
console.log(Object.values(object1)); // 結果: ["字串", 42, false]


// 作業題目：
// 建立一個陣列，其中包含所有的屬性名稱 (需使用 Object.keys)。
// 建立一個陣列，其中包含所有的屬性值 (需使用 Object.values)。
// 承接第 1 題，透過 forEach、使用 console.log 輸出陣列的所有屬性名稱。
// 承接第 2 題，透過 for 迴圈、使用 console.log 輸出陣列的所有屬性值。
let obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}

let ary1 = Object.keys(obj);
console.log('第一題答案：', ary1);

let ary2 = Object.values(obj);
console.log('第二題答案：', ary2);

ary1.forEach(function (item, i) {
    console.log('第三題答案：',item);
});

for (let i = 0; i < ary2.length; i++) {
console.log('第四題答案：',ary2[i])
};


