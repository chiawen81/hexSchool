// https://hackmd.io/SbDvk2pYT0OQoIui65N3Dw?view



let c = ' 這是中文字';
let arr = {
  a: 'a',
  1: 'b',
  ' 這是中文字': 'c',
  'b': 'd',
  '--some data': 'e'
}

console.log(arr[1]);  // 請取得結果為 'b' 的值
console.log(arr[' 這是中文字']);  // 請取得結果為 'c' 的值，必須使用變數
console.log(arr['b']);  // 請取得結果為 'd' 的值，必須使用點記號
console.log(arr['--some data']);  // 請取得結果為 'e' 的值