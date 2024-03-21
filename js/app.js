// yangi uyga vazifa
// 1
// let arr = [5, 8, 9, 6, 7];
// let newArr = arr.map((item) => {
//   return item * item;
// });
// console.log(newArr);
// 2
// let arr = [5, 8, 9, 6, 7, -8];
// let newArr = arr.filter((item) => {
//   return item < 0;
// });
// console.log(newArr);
// 3
// 4
// let arr = [5, 8, 7, 9, 0, 7, 8];
// let newArr = arr.reduce((acc, item) => {
//   if (item !== 0) {
//     return item + acc;
//   } else {
//     console.log(acc);
//   }
// }, 0);
// 5
// let massiv = [1, 0, 3, 10, 4, 5, 6];
// let yigindi = massiv.reduceRight((acc, item) => {
//   if (item !== 0) {
//     return acc + item;
//   } else {
//     console.log(acc);
//   }
// }, 0);
// 6
// let massiv = [1, 2, 7, 4, 7, 5, 6];
// let birXilMavjud = false;
// for (let i = 0; i < massiv.length - 1; i++) {
//   if (massiv[i] == massiv[i + 1]) {
//     birXilMavjud = true;
//     break;
//   }
// }
// if (birXilMavjud) {
//   console.log("ha");
// } else {
//   console.log("yo'q");
// }
//7
// let massiv = [1, 5, 3, 4, 0, 5, 6];
// let mavjudmi = false;
// for (let i = 0; i < massiv.length; i++) {
//   for (let j = i + 1; j < massiv.length; j++) {
//     if (massiv[i] === massiv[j]) {
//       mavjudmi = true;
//       break;
//     }
//   }
//   if (mavjudmi) {
//     break;
//   }
// }
// if (mavjudmi) {
//   console.log("ha");
// } else {
//   console.log("yo'q");
// }
//8
// let massiv = [8, 77];
// let ushlab = [];
// for (let i = 0; i < massiv.slice(-1); i++) {
//   ushlab.push(massiv[0]);
// }
// console.log(ushlab);
//9
// let uzunlik = 5;
// let massiv = [];
// for (let i = 1; i <= uzunlik; i++) {
//   let element = "x".repeat(i);
//   massiv.push(element);
// }
// console.log(massiv);
//10
// let uzunlik = 5;
// let massiv = [];
// for (let i = 1; i <= uzunlik; i++) {
//   let element = String(i).repeat(i);
//   massiv.push(element);
// }
// console.log(massiv);
