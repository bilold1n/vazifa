//1
// class worker1 {
//   constructor(name, role, nat, lang) {
//     this.name = name;
//     this.role = role;
//     this.nat = nat;
//     this.lang = lang;
//   }
//   tafsilotlar() {
//     console.log(
//       `Ismi: ${this.name}, role: ${this.role}, manzil: ${this.nat} tili:${this.lang}`
//     );
//   }
// }
// let user = new worker1("Habibullo", "developer", "uzbek", "uzbek");
// console.log(user);
// user.tafsilotlar();
// class worker2 {
//   constructor(name, role, nat, lang) {
//     this.name = name;
//     this.role = role;
//     this.nat = nat;
//     this.lang = lang;
//   }
//   tafsilotlar() {
//     console.log(
//       `Ismi: ${this.name}, role: ${this.role}, manzil: ${this.nat} tili:${this.lang}`
//     );
//   }
// }
// let user1 = new worker2("Biloldin", "developer", "uzbek", "english");
// console.log(user1);
// user.tafsilotlar();
//2
// class Rectangle {
//   constructor(boyi, eni) {
//     this.boyi = boyi;
//     this.eni = eni;
//   }
//   yuzasi() {
//     return this.boyi * this.eni;
//   }
//   Perimet() {
//     return 2 * (this.boyi + this.eni);
//   }
// }

// // Rectangle classining namunasi
// let Tortburchak = new Rectangle(5, 3);
// console.log(Tortburchak);
// console.log("Torburchakning yuzasi:", Tortburchak.yuzasi());
// console.log("Torburchakning perimetri:", Tortburchak.Perimet());
//3
// class Mashina {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   tafsilot() {
//     console.log(
//       `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
//     );
//   }
// }
// let Mashina1 = new Mashina("mers", "brabus", "2023");
// Mashina1.tafsilot();
// console.log(Mashina1);
// class eshiklar extends Mashina {
//   constructor(brand, model, year, doors) {
//     super(brand, model, year);
//     this.doors = doors;
//   }
// }
// let eshiklar1 = new eshiklar("mers", "brabus", "2023", "4");
// console.log(eshiklar1);
//4
// class BankAccount {
//   constructor(raqam, balans) {
//     this.raqam = raqam;
//     this.balans = balans;
//   }
//   pulqoshish(pul) {
//     this.pul = pul;
//     console.log(
//       `pulingizga qo'shildi endi sizning pulingiz: ${
//         Number(this.raqam) + Number(pul)
//       } ming`
//     );
//   }
//   pulayrish(pul1) {
//     this.pul1 = pul1;
//     console.log(
//       `pulingizdan olindi endi sizning pulingiz: ${
//         Number(this.raqam) - Number(pul1)
//       } ming`
//     );
//   }
// }
// let user = new BankAccount("48", "4445");
// console.log(user);
// user.pulqoshish("12");
// user.pulayrish("8");
//5
// class shape {
//   constructor(son, son1) {
//     this.son = son;
//     this.son1 = son1;
//   }
//   maydon() {
//     console.log(`shakl maydoni: ${this.son * this.son1}`);
//   }
// }
// class doira extends shape {
//   constructor(son, son1) {
//     super(son, son1);
//   }
//   doiramaydoni() {
//     console.log(`doira maydoni: ${this.son * this.son1}`);
//   }
// }
// class uchburchak extends shape {
//   constructor(son, son1) {
//     super(son, son1);
//   }
//   uchburchakmaydoni() {
//     console.log(`uchburchak maydoni: ${this.son * this.son1}`);
//   }
// }
// let shape1 = new shape("5", "8");
// console.log(shape1);
// shape1.maydon();
// let doira1 = new doira("5", "8");
// console.log(doira1);
// doira1.doiramaydoni();
// let uchburchak1 = new uchburchak("5", "8");
// console.log(uchburchak1);
// uchburchak1.uchburchakmaydoni();
//6
// class Xodim {
//   constructor(ism, ish_haqi) {
//     this.ism = ism;
//     this.ish_haqi = ish_haqi;
//   }

//   yillikIshHaqi() {
//     console.log(`yillik ish haqqi: ${this.ish_haqi * 12}`);
//   }
// }

// class Menejer extends Xodim {
//   constructor(ism, ish_haqi, bonus) {
//     super(ism, ish_haqi);
//     this.bonus = bonus;
//   }
//   yillikIshHaqi() {
//     console.log(
//       `yillil ish haqqi bonus bilan: ${this.ish_haqi * 12 + this.bonus}`
//     );
//   }
// }
// let Xodim1 = new Xodim("Mirjalol", "500");
// let menejer1 = new Menejer("Biloldin", 500, 1000);
// let menejer2 = new Menejer("Shukurullo", 600, 1200);
// console.log(Xodim1);
// Xodim1.yillikIshHaqi();
// console.log(menejer1);
// console.log(menejer2);
// menejer1.yillikIshHaqi();
// menejer2.yillikIshHaqi();
//7
// class kitob {
//   constructor(sarlavha, muallif, nashr_yili) {
//     this.sarlavha = sarlavha;
//     this.muallif = muallif;
//     this.nashr_yili = nashr_yili;
//   }
//   tafsilot() {
//     console.log(
//       `sarlavha: ${this.sarlavha}, muallif: ${this.muallif}, nashr_yili: ${this.nashr_yili}`
//     );
//   }
// }

// class ebook extends kitob {
//   constructor(sarlavha, muallif, nashr_yili, narx) {
//     super(sarlavha, muallif, nashr_yili);
//     this.narx = narx;
//   }
//   tafsilot() {
//     console.log(
//       `sarlavha: ${this.sarlavha}, muallif: ${this.muallif}, nashr_yili: ${this.nashr_yili} narxi:${this.narx}`
//     );
//   }
// }
// let kitob1 = new kitob("xamza", "alisher navoiy", "1486");
// let ebook1 = new ebook("boburnoma", "bobur", "1786", "2500");
// console.log(kitob1);
// kitob1.tafsilot();
// console.log(ebook1);
// ebook1.tafsilot();
//8
// class hayvon {
//   constructor(tur, tovush) {
//     this.tur = tur;
//     this.tovush = tovush;
//   }
//   tovush1() {
//     console.log(`${this.tur} nig tovushi ${this.tovush}`);
//   }
// }

// class It extends hayvon {
//   constructor(tur, tovush, rang) {
//     super(tur, tovush);
//     this.rang = rang;
//   }

//   tovush1() {
//     console.log(`${this.tur} nig tovushi ${this.tovush}`);
//   }
//   rangi() {
//     console.log(`${this.tur} nig rangi ${this.rang}`);
//   }
// }

// let hayvon1 = new hayvon("ot", "kish");
// let it = new It("It", "Woof", "Qora");
// console.log(hayvon1);
// console.log(it);
// hayvon1.tovush1();
// it.tovush1();
// it.rangi();
//9
// class Bank {
//   constructor(name) {
//     this.name = name;
//     this.filial = [];
//   }

//   filial_qoshish(filial_kiritish) {
//     this.filial.push(filial_kiritish);
//     console.log(`${filial_kiritish} filiallarga qo'shildi.`);
//   }

//   filial_ayrish(filial_kiritish) {
//     const index = this.filial.indexOf(filial_kiritish);
//     if (index !== -1) {
//       this.filial.splice(index, 1);
//       console.log(`${filial_kiritish} filiali olib tashlandi.`);
//     } else {
//       console.log(`${filial_kiritish} filiali topilmadi.`);
//     }
//   }

//   filiallar() {
//     console.log("Filiallar:");
//     this.filial.forEach((filial_kiritish, index) => {
//       console.log(`${index + 1}. ${filial_kiritish} filiali`);
//     });
//   }
// }

// let bank = new Bank("MyBank");
// bank.filial_qoshish("Fargona");
// bank.filial_qoshish("Jizzah");
// bank.filial_qoshish("Toshkent ");
// bank.filiallar();

// bank.filial_ayrish("Andijin");
// bank.filial_ayrish("Jizzah");
// bank.filiallar();
//10
// class mahsulot {
//   constructor(id, name, narx) {
//     this.id = id;
//     this.name = name;
//     this.narx = narx;
//   }
//   umumiy_narh(miqdor) {
//     console.log(`umummiy narxi: ${this.narx * miqdor}`);
//   }
// }

// class PersonalCareProduct extends mahsulot {
//   constructor(id, name, narx, muddati) {
//     super(id, name, narx);
//     this.muddati = muddati;
//   }
//   umumiy_narh(miqdor) {
//     console.log(`umummiy narxi: ${this.narx * miqdor}`);
//   }
// }
// let sovun = new mahsulot(1, "sovun", 2);
// let shampun = new PersonalCareProduct(2, "Shampoo", 17, 1);
// console.log(sovun);
// console.log(shampun);
// sovun.umumiy_narh(5);
// shampun.umumiy_narh(2);
