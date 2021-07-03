// https://hackmd.io/cajoFzxxQ6ax4VPDgU4A4g



// 知識點：深拷貝、淺拷貝





// 題目1
// 1-1. 請問以下的輸出結果為何?
// 1-2. 如果希望 console.log(obj === objNew); 的結果為 false，則可以如何修改?
let obj = {
    title: '錢錢',
    amounts: 66666,
}
let objNew = obj;
objNew.amounts = 123;
console.log(obj.amounts);      // 輸出結果為何?                  >> Ans: 123
console.log(obj === objNew);   // 輸出結果為 true 還是 false?    >> Ans: true
// 補充說明：物件有傳值的特性（pass by sharing），所以obj直接賦值給objNew時，改動objNew會連obj也一起改
// 1-2Ans: 原則：     讓二者進行深拷貝，兩者因pass by sharing的連動關聯即可消失
//         具體作法：  把「let objNew = obj;」  改成  「let objNew = {...obj};」即可



// 題目2  (陷阱題!，需要用深拷貝處理)
// 2-1. 請問以下的輸出結果為何?
// 2-2. 如果希望調整 objNew2.innerObj 時不會影響到 obj2，則可以如何修改?
let obj2 = {
    title: '錢錢',
    amounts: 66666,
    innerObj: {
        title: '私房錢',
        amounts: 1000
    }
}
let objNew2 = { ...obj2 };
console.log(obj2 === objNew2);       // 輸出結果為 true 還是 false?   >> Ans: false
objNew2.innerObj.amounts = 2000;
console.log(obj2.innerObj.amounts);  // 輸出結果為何?                 >> Ans: 2000
// 2-2Ans: 只要把obj2「展開後」再賦值給objNew2，就不會影響到obj2
//         照現在的程式碼就不用再做修改了