//Константы, масивы

//Меню:
//Горячий кофе:
const cappuchino = 9;
const moccachino = 9;
const raff = 10;
const espresso = 8;
//Чаи:
const blackTea = 6;
const greenTea = 7;
const redTea = 9;
const blueTea = 11;
const herbalTea = 8;



const min = 1;
const max = 5;
const latte = 7;
const N = max - min + 1;
const sum = [
[9],
[7],
[9],
[11],
[8]
];
const sumTea = [
[6],
[7],
[9],
[11],
[8]
];
/////////////////////////////////////
function randomInteger(min, max) {
return Math.floor(Math.random() * N) + min ;
}
const priceList = [
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
]
const priceList2 = [
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
randomInteger(1, 5),
]
////////////////////////////////////
//Переменные
let tC1 = sum[0] / 10;
let tC2 = sum[1] / 10;
let tC3 = sum[2] / 10;
let tC4 = sum[3] / 10;
let tC5 = sum[4] / 10;

let t1 = sumTea[0] / 10;
let t2 = sumTea[1] / 10;
let t3 = sumTea[2] / 10;
let t4 = sumTea[3] / 10;
let t5 = sumTea[4] / 10;

let summaC = tC1 + tC2 + tC3 + tC4 + tC5;
let summaT = t1 + t2 + t3 + t4 + t5;
let fullCoffeCash = tC1 * priceList[0] + tC2 * priceList[1] + tC3 * priceList[2] + tC4 * priceList[3] + tC5 * priceList[4];

//Фунцкии

let fullTeaCash = t1 * priceList2[0] + t2 * priceList2[1] + t3 * priceList2[2] + t4 * priceList2[3] + t5 * priceList2[4];
let usdSumma = fullCoffeCash * 27 + fullTeaCash * 27;
let allTeaCash = fullTeaCash + fullCoffeCash;
let allCash = fullTeaCash + fullCoffeCash ;
const bucket = [];

function buy(item) {
let totalPrice = 0;
bucket.push(item);
for (let i = 0; i < bucket.length; i++) {
 totalPrice = totalPrice + bucket[i].price;
}
console.log();
uptadePrice(totalPrice);
updateBucket();
}

function uptadePrice(totalPrice) {
const tip = totalPrice * 0.1;
const elementPrice = document.getElementById("price");
elementPrice.innerHTML = totalPrice;
const elementTip = document.getElementById("tip");
elementTip.innerHTML = tip.toFixed(1);
}

function updateBucket() {
let result = "";
for (let i = 0; i < bucket.length; i++) {
  result += updateBucketItem(bucket[i]);
}
const elementBucket = document.getElementById("bucket");
elementBucket.innerHTML = result;
}

function updateBucketItem(item) {
const imgCoffe = "https://png.pngtree.com/png-clipart/20190603/original/pngtree-decorative-coffee-cup-vector-material-png-image_471520.jpg";

const imgTea = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyK3cxZjsSdUO54A5KA8rcq0M7hOWOuSTjg&usqp=CAU";
return `<li>
      <img class = "item" src="${item.type === 'coffe' ? imgCoffe: imgTea}" alt="" /> ${item.name}: ${item.price}$
    </li>`
}

function coffe() {

//Первый заказ
console.log("1. " + sum[0] * priceList[0] / 10  + "$" + " :cash for: " + priceList[0] + 'cups' + ' \'cappuchino\'  ' + sum[0] * priceList[0] + '$');

//Второй заказ
console.log("2. " + sum[1] * priceList[1] / 10 + "$" + " :cash for: " + priceList[1]  + 'cups' + ' \'latte\' ' + sum[1] * priceList[1]  + '$');

//Третий заказ
console.log("3. " + sum[2] * priceList[2] / 10 + "$" + " :cash for: " + priceList[2] + 'cups' +  ' \'moccachino\' ' + sum[2] * priceList[2] + '$');

//Четвертый заказ
console.log("4. " + sum[3] * priceList[3] / 10 + "$" + " :cash for: " + priceList[3] + 'cups' + ' \'ruff\' ' + sum[3] * priceList[3] + '$');

//Пятый заказ
console.log("5. " + sum[4] * priceList[4] / 10 + "$" + " :cash for: " + priceList[4] + 'cups' + ' \'espresso\' ' + sum[4] * priceList[4] + '$');
}

//Чаи
function teas() {
console.log("1. " + sumTea[0] * priceList2[0] / 10 + "$" + " :cash for: " + priceList2[0] + 'cups' + ' BlackTea ' + sumTea[0] * priceList2[0] + "$");

console.log("2. " + sumTea[1] * priceList2[1] / 10 + "$" + " :cash for: " + priceList2[1] + 'cups' + ' GreenTea ' + sumTea[1] * priceList2[1] + "$");

console.log("3. " + sumTea[2] * priceList2[2] / 10 + "$" + " :cash for: " + priceList2[2] + 'cups' + ' RedTea ' + sumTea[2] * priceList2[2] + "$");

console.log("4. " + sumTea[3] * priceList2[3] / 10 + "$" + " :cash for: " + priceList2[3] + 'cups' + ' BlueTea ' + sumTea[3] * priceList2[3] + "$");

console.log("5. " + sumTea[4] * priceList2[4] / 10 + "$" + " :cash for: " + priceList2[4] + 'cups' + ' HerbalTea ' + sumTea[4] * priceList2[4] + "$");
}

//Калькулятор
function calculate(sum) {
console.log((allCash * 10).toFixed(1) + "$" + " :All cash from day");
//Кофе
console.log(allTeaCash.toFixed(1) +  "$" + " :All tea cash from day");
console.log(fullCoffeCash.toFixed(1) + "$" + " :All tea cash from coffe");
//Чаи
console.log(fullTeaCash.toFixed(1) + "$" + " :All tea cash from tea");
}

//Конечный вывод
console.log("              Coffe bar \n          'Magic Drinkables' \n");
console.log("                 Coffe \n");
coffe(); 
console.log("\n                  Tea \n");
teas();
console.log("");
console.log("------------------------------------------");
calculate();
console.log("It is " + usdSumma.toFixed(1) + " in USD");

