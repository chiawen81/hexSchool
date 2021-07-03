// https://hackmd.io/r3vzx6c5T3y801t0VTLdqg



// 知識點：
//「callback 函式」，可以簡單的理解為:「把函式作為參數調用」
function greeting(arr) {                                // 原始函式
    alert('Hello ' + arr.name);
}
let arr = { name: "Jordan" };

function processUserInput(callback, arr) {              // callback 函式
    callback(arr);
    // 筆記：函式也可以當變數，放進另一個函式的參數裡
}

processUserInput(greeting, arr);                        // 呼叫
// 在 callback 函式中調用 greeting 函式，並把 arr 也一併代入
// 反應：跳出一個alert寫「Hello Jordan」





// 題目：
// 以下 crowdAge 為部分民眾的年紀資料，請修改程式碼、篩選出屬性 age > 18 的陣列元素，並將它們一一加入 filterResult 這個陣列中。
let crowdAge = [
    {
        name: 'Rick',
        age: 17
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Jordan',
        age: 19
    },
    {
        name: 'Jack',
        age: 7
    },
    {
        name: 'Reol',
        age: 27
    }
]

// callback 函式
function ageFilterCB(cb, arr) {
    return cb(arr);
}

function ageFilter(arr) {
      /* 只能在此插入程式碼 */
    let target = []
    arr.forEach(item => {
        if (item.age > 18) {
            target.push(item);
        };
    });
    return target;
}

let filterResult = [];
filterResult = ageFilterCB(ageFilter, crowdAge);
console.log(filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */



// 解法一
// function ageFilter(arr) {
//   let target = arr.filter(item => item.age > 18);
//   return target;
// }


//  解法二
// function ageFilter(arr) {
//   let target = [];
//   arr.forEach(item => {
//   	if(item.age > 18) {
//     	target.push(item);
//     }
//   })
//   return target;
// }

