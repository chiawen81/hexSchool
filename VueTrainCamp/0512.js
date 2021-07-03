// https://hackmd.io/t5G6PDr9RwGMDZeLXIvzuQ?view



// 題目
let name = '小明';
const age = 16;
let person = {
    name: '小明',
}
const wallet = {
    money: 1000
}
const dessert = ['cake', 'ice-cream'];

/* 請問以下程式碼哪些會報錯? */
name = '小美';
age = 17;                   // 報錯(const不可重新賦值)
person.name = '大明';
dessert.push('fruit');
dessert = ['chocolate'];    // 報錯(const不可重新賦值)
wallet = {};                // 報錯(const不可重新賦值)
wallet.money = 1100;        // 這個不會錯喔！！！！！（可以提問）