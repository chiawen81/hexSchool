//LV1：拿CSS 現成模版套用，練習下方的套票列表用 JS 的 innerHTML 套用，
//並需運用 Code JS 面板裡面的 data 變數資訊，
//上方新增套票功能與下拉篩選地區功能可不做。


let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];


// 宣告變數
let cardCode = document.querySelector(".ticketCard-area");

// 寫法一(foreach)
data.forEach(function (item, i) {
  cardCode.innerHTML += `
  <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${item.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${item.area}</div>
                    <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h3>
                            <a href="#" class="ticketCard-name">${item.name}程</a>
                        </h3>
                        <p class="ticketCard-description">
                        ${item.description}
                        </p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後 <span id="ticketCard-num">${item.group} </span> 組
                        </p>
                        <p class="ticketCard-price">
                            TWD <span id="ticketCard-price">${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>
  `
});


// 寫法二（for）
// function addInfo(data){
//   for(let i =0;i<3;i++){
//     cardCode.innerHTML+=`
//     <li class="ticketCard">
//     <div class="ticketCard-img">
//         <a href="#">
//             <img src="${data[i].imgUrl}" alt="">
//         </a>
//         <div class="ticketCard-region">${data[i].area}</div>
//         <div class="ticketCard-rank">${data[i].rate}</div>
//     </div>
//     <div class="ticketCard-content">
//         <div>
//             <h3>
//                 <a href="#" class="ticketCard-name">${data[i].name}程</a>
//             </h3>
//             <p class="ticketCard-description">
//             ${data[i].description}
//             </p>
//         </div>
//         <div class="ticketCard-info">
//             <p class="ticketCard-num">
//                 <span><i class="fas fa-exclamation-circle"></i></span>
//                 剩下最後 <span id="ticketCard-num">${data[i].group} </span> 組
//             </p>
//             <p class="ticketCard-price">
//                 TWD <span id="ticketCard-price">${data[i].price}</span>
//             </p>
//         </div>
//     </div>
// </li>
//     `

//   }
// }

// addInfo(data);