/* BEGIN */
/* 4 */

// const a = 3.14;
// const d = Number(prompt("Sonni kiriting:"));
// const l = a*d;
// alert("Aylananing uzunligi " + l + " ga teng")


/* 5 */

// const a = Number(prompt("Sonni kiriting:"));
// const v = a*a*a;
// const s = 6*(a*a);
// alert("Kubning hajmi " + v + " ga teng");
// alert("Kubning To'la sirti " + s + " ga teng");


/* 6 */

// const a = Number(prompt("Birinchi sonni kiriting:"));
// const b = Number(prompt("Ikkinchi sonni kiriting:"));
// const c = Number(prompt("Uchinchi sonni kiriting:"))
// const v = a*b*c;
// const s = 2*(a*b+b*c+a*c);
// alert("Paralellopipedning hajmi " + v + " ga teng")
// alert("Paralellopipedning to'la sirti " + s + " ga teng");


/* 8 */

// const r = Number(prompt("Sonni kiriting:"))
// const pi = 3.14;
// const l = 2*pi*r;
// const s = pi*(r*r);
// alert("Doiraning uzunligi " + l + " ga teng")
// alert("Doiraning yuzasi " + s + " ga teng");


/* 9 */

// const a = Number(prompt("Birinchi sonni kiriting:"));
// const b = Number(prompt("Ikkinchi sonni kiriting:"));
// const value = (a+b)/2;
// alert("Sonning o'rta arifmetigi " + value + " ga teng")


/* 10 */

// const a = Number(prompt("Birinchi sonni kiriting:"));
// const b = Number(prompt("Ikkinchi sonni kiriting:"));
// const yigindi = a+b;
// const kopaytma = a*b;
// const kvadrat1 = a*a;
// const kvadrat2 = b*b;
// alert("Sonlarning yig'indisi " + yigindi + " ga teng");
// alert("Sonlarning ko'paytmasi " + kopaytma + " ga teng");
// alert("Sonning birinchisini kvadrati " + kvadrat1 + " ga teng");
// alert("Sonning ikkinchisini kavadrati " + kvadrat2 + " ga teng");

/* 11 */

// const a = Number(prompt("Birinchi sonni kiriting:"));
// const b = Number(prompt("Ikkinchi sonni kiriting:"));
// const yigindi = a+b;
// const kopaytma = a*b;
// const modul1 = a*-1;
// const modul2 = b*-1;
// alert("Sonlarning yig'indisi " + yigindi + " ga teng");
// alert("Sonlarning ko'paytmasi " + kopaytma + " ga teng");
// alert("Sonning birinchisini moduli " + modul1 + " ga teng");
// alert("Sonning ikkinchisini moduli " + modul2 + " ga teng");


/* 12 */

// const a = Number(prompt("Birichi katetni kiriting:"));
// const b = Number(prompt("Ikkinchi katetni kiriting:"));
// const aKvadrat = Math.pow(a,2);
// const bKvadrat = Math.pow(b,2);
// const c= Math.pow(a+b,1/2);
// const p = a+b+c;
// alert("Gipotenuza " + c + " ga teng");
// alert("Perimetr " + p + " ga teng");

/* 13 */

// const r1 = Number(prompt("Sonni kiriting:"));
// const r2 = Number(prompt("Sonni kiriting"));
// const pi = Math.PI;
// const s1 = pi*r1;
// const s2 = pi*r2;
// const s3 = pi*(r1-r2);
// alert("Birinchi yuza " + s1 + " ga teng");
// alert("Ikkinchi yuza " + s2 + " ga teng");
// alert("Yuzalar ayirmasi " + s3 + " ga teng");

/* 14 */

// const pi = Math.PI;
// const r = Number(prompt("Sonni kiriting:"));
// const l = 2*pi*r;
// const s = pi*Math.pow(r,2);
// alert("Aylananing radiusi: " + l + " ga teng");
// alert("Aylananing yuzi: " + s + " ga teng");

/* 15 */

// const s = Number(prompt("Sonni kiriting:"));
// const r = Math.sqrt(s/Math.PI);
// const d = 2*r;
// alert('Aylananing radiusi ' + Math.ceil(r) + ' ga teng' + ' Aylananing diametri ' + Math.ceil(d) + ' ga teng');

/* 16 */

// const a = Number(prompt("Birinchi sonni kiriting:"));
// const b = Number(prompt("Ikkinchi sonni kiriting:"));
// const maxValue = Math.max(a,b);
// const minValue = Math.min(a,b);
// const l = maxValue-minValue;
// alert("Orasidagi masofa " + l + " ga teng");

/* 17 */

// const a = Number(prompt("A kesmani kiriting:"));
// const b = Number(prompt("B kesmani kiriting:"));
// const c = Number(prompt("C kesmani kiriting"));
// const acUzunligi = a+c;
// const bcUzunligi = b+c;
// alert("AC kesmani uzunligi " + acUzunligi + " ga teng");
// alert("BC kesmani uzunligi " + bcUzunligi + " ga teng");

/* 18 */

// const a = Number(prompt("A kesmani kiriting:"));
// const b = Number(prompt("B kesmani kiriting:"));
// const c = Number(prompt("C kesmani kiriting"));
// const acKopaytmasi = a*c;
// const bcKopaytmasi = b*c;
// alert("AC kesmani ko'paytmasi " + acKopaytmasi + " ga teng");
// alert("BC kesmani ko'paytmasi " + bcKopaytmasi + " ga teng");

/* 19 */

// const x1 = Number(prompt("Sonni kiriting:"));
// const x2 = Number(prompt("Sonni kiriting:"));
// const y1 = Number(prompt("Sonni kiriting:"));
// const y2 = Number(prompt("Sonni kiriting:"));
// const p = Math.abs(2*(x2-x1)+(y2-y1));
// const s = Math.abs((x2-x1)*(y2-y1));
// alert("To'rtburchakni perimetri " + p + " ga teng");
// alert("To'rtburchakni yuzi " + s + " ga teng");

/* 20 */

// const x1 = Number(prompt("Sonni kiriting:"));
// const x2 = Number(prompt("Sonni kiriting:"));
// const y1 = Number(prompt("Sonni kiriting:"));
// const y2 = Number(prompt("Sonni kiriting:"));
// const xKvadrat = Math.pow(x2-x1,2);
// const yKvadrat = Math.pow(y2-y1,2);
// const l = Math.pow(xKvadrat+yKvadrat,1/2);
// alert("Orasidagi masofa " + Math.ceil(l) + " ga teng");

/* 22 */

// let a = Number(prompt("Birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting"));
// let c = a;
// a=b;
// alert(`${a} ${c}`);

/* 23 */

// let a = Number(prompt("birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting:"));
// let c = Number(prompt("Uchinchi sonni kiriting:"));
// const d = a;
// a=b;
// b=c;
// c=d;
// alert(`${a} ${b} ${d}`);

/* 24 */

// let a = Number(prompt("birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting:"));
// let c = Number(prompt("Uchinchi sonni kiriting:"));
// const d = a;
// a=c;
// c=b;
// b=a;
// alert(`${a} ${d} ${c}`);

/* 25 */

// const x = Number(prompt("Sonni kiriting:"));
// const y = 3*Math.pow(x,6)-6*Math.pow(x,2)*-7;
// alert("Qiymat " + y + " ga teng");

/* 26 */

// const x = Number(prompt("Sonni kiriting:"));
// const y = 4*Math.pow((x-3),6)-7*Math.pow((x-3),3)+2;
// alert("Qiymat " + y + " ga teng");

/* 27 */

// const a = Number(prompt('Sonni kiriting:'));
// const a2 = Math.pow(a,2);
// const a4 = Math.pow(a,4);
// const a8 = Math.pow(a,8);
// alert('Birninchi daraja: ' + a2 + ' ga teng' + ' Ikkinchi daraja: ' + a4 + ' ga teng' + ' Uchinchi daraja: ' + a8 + ' ga teng');

/* 28 */

// const a = Number(prompt("sonni kiriting:"));
// const a2 = Math.pow(a, 2);
// const a3 = Math.pow(a, 3);
// const a5 = Math.pow(a, 4);
// const a10 = Math.pow(a, 10);
// const a15 = Math.pow(a, 15);
// alert(a2 + ' ' + a3 + ' ' + a5 + ' ' + a10 + ' ' + a15);

/* Integer */
/* 2 */

// const a = Number(prompt("Og'irlikni kiriting:"));
// const m = a*1000;
// alert(a + "tonna " + m + " kg teng")

/* 3 */

// const a = Number(prompt("Kilobaytni kiriting:"));
// const m = a*1024;
// alert(a + "kb " + m + " bayt teng")

/* 4 */

// const a = Number(prompt("Brinchi kesmani kiriting:"));
// const b = Number(prompt("Ikkinchi kesmani kiriting:"));
// const maxValue = Math.max(a,b);
// const minValue = Math.min(a,b);
// const c = Math.abs(a/b);
// alert("A kesmada " + c + " marta")

/* 5 */

// const a = Number(prompt("Brinchi kesmani kiriting:"));
// const b = Number(prompt("Ikkinchi kesmani kiriting:"));
// const maxValue = Math.max(a,b);
// const minValue = Math.min(a,b);
// const c = Math.trunc(a/b);
// const q= a%b;
// const d = b-q;
// alert(Number(`${c}${d}`));

/* 6 */

// const a = Number(prompt("Ikki xonali sonni kiriting:"));
// const bolinma = a/10;
// const butun = Math.trunc(bolinma);
// const qoldiq = bolinma-butun;
// const birlik = Math.round(qoldiq*10);
// alert(`${butun} ${birlik}`);

/* 7 */

// const a = Number(prompt("Ikki xonali sonni kiriting:"));
// const bolinma = a/10;
// const butun = Math.trunc(bolinma);
// const qoldiq = bolinma-butun;
// const birlik = Math.round(qoldiq*10);
// const yigindi = butun+birlik;
// alert(`${yigindi}`);

/* 8 */

// const a = Number(prompt("Ikki xonali sonni kiriting:"));
// const bolinma = a/10;
// const butun = Math.trunc(bolinma);
// const qoldiq = bolinma-butun;
// const birlik = Math.round(qoldiq*10);
// alert(`${birlik}${butun}`);

/* 9 */

// const a = Number(prompt("Uch xonali sonni kiriting:"));
// const bolinma = a/100;
// const butun = Math.trunc(bolinma);
// alert(`${butun}`);

/* 10 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const bolinma = son/10;
// const butunQism = Math.trunc(bolinma);
// const onlik = butunQism/10;
// const butunQismOnlik = Math.trunc(onlik);
// const qoldiqOnlik =(onlik - butunQismOnlik)*10;
// const qoldiq = (bolinma - butunQism)*10;
// alert(Number(`${Math.round(qoldiq)}${Math.round(qoldiqOnlik)}`));

/* 12 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const bolinma = son/10;
// const butunQism = Math.trunc(bolinma);
// const onlik = butunQism/10;
// const butunQismOnlik = Math.trunc(onlik);
// const qoldiqOnlik =(onlik - butunQismOnlik)*10;
// const qoldiq = (bolinma - butunQism)*10;
// const yigindi = +onlik+qoldiqOnlik+qoldiq;
// alert(Number(`${Math.round(yigindi)}`));

/* 13 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const yuzlarXonasi = Math.trunc(son/100);
// const birinchiAyirma = (son/100 - yuzlarXonasi)*10;
// const onlarXonasi = Math.trunc(birinchiAyirma);
// const ikkinchiAyirma = birinchiAyirma - onlarXonasi;
// const birlarXonasi = Math.round(ikkinchiAyirma*10)
// alert(Number(`${onlarXonasi}${birlarXonasi}${yuzlarXonasi}`));

/* 14 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const yuzlarXonasi = Math.trunc(son/100);
// const birinchiAyirma = (son/100 - yuzlarXonasi)*10;
// const onlarXonasi = Math.trunc(birinchiAyirma);
// const ikkinchiAyirma = birinchiAyirma - onlarXonasi;
// const birlarXonasi = Math.round(ikkinchiAyirma*10)
// alert(Number(`${birlarXonasi}${yuzlarXonasi}${onlarXonasi}`));

/* 15 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const yuzlarXonasi = Math.trunc(son/100);
// const birinchiAyirma = (son/100 - yuzlarXonasi)*10;
// const onlarXonasi = Math.trunc(birinchiAyirma);
// const ikkinchiAyirma = birinchiAyirma - onlarXonasi;
// const birlarXonasi = Math.round(ikkinchiAyirma*10)
// alert(Number(`${onlarXonasi}${yuzlarXonasi}${birlarXonasi}`));

/* 16 */

// const son = Number(prompt("Uch xonali son kiriting"));
// const yuzlarXonasi = Math.trunc(son/100);
// const birinchiAyirma = (son/100 - yuzlarXonasi)*10;
// const onlarXonasi = Math.trunc(birinchiAyirma);
// const ikkinchiAyirma = birinchiAyirma - onlarXonasi;
// const birlarXonasi = Math.round(ikkinchiAyirma*10)
// alert(Number(`${yuzlarXonasi}${birlarXonasi}${onlarXonasi}`));

/* 17 */

// const a =Number(prompt("4 xonali osn kiriting:"));
// const b = a%1000;
// const c = Math.trunc(b/100);
// alert(Number(`${c}`));

/* 18 */

// const a =Number(prompt("4 xonali osn kiriting:"));
// const b = Math.trunc(a/1000);
// alert(`${b}`)

/* 19 */

// const sekund = Number(prompt("Sekundni kiriting:"));
// const m = Math.floor(sekund/60);
// alert(Number(`${m}`))

/* 20 */

// const sekund = Number(prompt("Sekundni kiriting:"));
// const h = Math.floor(sekund/3600);
// alert(`${h}`);

/* 21 */

// const sekund = Number(prompt("Sekundni kiriting:"));
// const minutes = Math.floor(sekund / 60);
// const seconds = sekund % 60;
// alert(`${minutes} ${seconds}`)

/* 22 */

// const sekund = Number(prompt("Sekundni kiriting:"));
// const h = Math.floor(sekund / 3600);
// const seconds = sekund % 60;
// alert(`${h} ${seconds}`)

/* 23 */

// const sekund = Number(prompt("Sekundni kiriting:"));
// const h = Math.floor(sekund / 3600);
// const qoldiq = sekund % 3600;
// const minutes = Math.floor(qoldiq / 60);
// const seconds = qoldiq % 60;
// alert(`${h} ${minutes} ${seconds}`);

/* Boolean */
/* 2 */

// const a = Number(prompt());
// const result = a%2 > 0;
// alert(`${result}`);

/* 4 */

// const a = Number(prompt());
// const b = Number(prompt());
// const resultA = a > 2;
// const resultB = b <= 3;
// alert(resultA == resultB);

/* 5 */

// const a = Number(prompt());
// const b = Number(prompt());
// const resultA = a >= 0;
// const resultB = b < -2;
// alert(resultA == resultB);

/* 6 */

// const a = Number(prompt());
// const b = Number(prompt());
// const c = Number(prompt());
// const result = a <= b <= c;
// alert(result);

/* 7 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const c = Number(prompt("Sonni kiriting:"));
// const result = a < b < c;
// alert(result);

/* 8 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const resultA = a%2 > 0;
// const resultB = b%2 > 0;
// alert(resultA == resultB)

/* 9 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const resultA = a%2 > 0;
// const resultB = b%2 > 0;
// alert(`${resultA} ${resultB}`);

/* 10 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const result = (a % 2 == 1) || (b % 2 == 1);
// alert(result);

/* 11 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const result = a % 2 === b % 2;
// alert(result);

/* 12 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const c = Number(prompt("Sonni kiriting:"));
// const resultA = a > 0;
// const resultB = b > 0;
// const resultC = c > 0;
// alert(resultA == resultB == resultC)

/* 13 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const c = Number(prompt("Sonni kiriting:"));
// const resultA = a > 0;
// const resultB = b > 0;
// const resultC = c > 0;
// const result = Boolean(resultA+resultB+resultC);
// alert(result);

/* 14 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const c = Number(prompt("Sonni kiriting:"));
// const resultA = a > 0;
// const resultB = b > 0;
// const resultC = c > 0;
// const result = resultA+resultB+resultC;
// alert(result == 1);

/* 15 */

// const a = Number(prompt("Sonni kiriting:"));
// const b = Number(prompt("Sonni kiriting:"));
// const c = Number(prompt("Sonni kiriting:"));
// const resultA = a > 0;
// const resultB = b > 0;
// const resultC = c > 0;
// const result = resultA+resultB+resultC;
// alert(result == 2);

/* 16 */

// const a = Number(prompt("Ikki xonali son kiriting:"));
// const result = a%2 == 0;
// alert(result)

/* 17 */

// const a = Number(prompt("Uch xonali son kiriting:"));
// const result = a%2 > 0;
// alert(result);

/* if */
/* 1 */
// let a = Number(prompt())
// if (a > 0) {
//     alert(a + 1)
// }
// else{
//     alert(a - 2)
// }

/* 8 */
// let a = Number(prompt());
// let b = Number(prompt());
// if (a > 0) {
//     alert(a + "  va  " + b);
// }
// else {
//     alert(a + "  va  " + b)
// }

/* 10 */
// let a = Number(prompt());
// let b = Number(prompt());
// let c = 0;
// if (a < b || b < a) {
//     alert(a+b);
// }
// else if (a == b){
//     a = c;
//     b = c;
//     alert(a + "  "  + b);
// }

/* 11 */
// const a = Number(prompt());
// const b = Number(prompt());
// const c = 0;
// if (a > b || b > a) {
//     alert(Math.max(a,b));
// }
// else if (a == b) {
//     alert(c);
// }

/* 12 */
// const a = Number(prompt());
// const b = Number(prompt());
// const c = Number(prompt());
// alert(Math.min(a,b,c));

/* 13 */
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// let middle;
// if ((a > b && a < c) || (a < b && a > c)) {
//     middle = a;
//     alert(a);
// } else if ((b > a && b < c) || (b < a && b > c)) {
//     middle = b;
//     alert(b);
// } else {
//     middle = c;
//     alert(c);
// }

/* 14 */
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// alert(Math.min(a,b,c) + "  " + Math.max(a,b,c));

/* 16 */
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// if (a < b && b < c) {
//     a = a*2;
//     b = b*2;
//     c = c*2;
//     alert(a + "  " + b + "  " + c);
// }
// else {
//     a = -a;
//     b = -b;
//     c = -c;
//     alert(a + "  " + b + "  " + c);
// }

/* 17 */
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// if ((a < b && b < c) || (a > b && b > c)) {
//     a = a*2;
//     b = b*2;
//     c = c*2;
//     alert(a + "  " + b + "  " + c);
// }
// else {
//     a = -a;
//     b = -b;
//     c = -c;
//     alert(a + "  " + b + "  " + c);
// }

/* case */
/* 2 */
// let a = Number(prompt("1-5 son kiriting:"));
// switch (a) {
//     case 1:
//         alert("yomon");
//         break;
//     case 2:
//         alert("qoniqarsiz");
//         break;
//     case 3:
//         alert("qoniqarli");
//         break;
//     case 4:
//     alert("yaxshi");
//     break;
//     case 5:
//         alert("a'lo");
//         break;
//     default:
//         alert("xato");
//         break;
// }

/* 3 */
// let a = Number(prompt("1-12gacha son kiriting:"));
// switch (a) {
//     case 1:
//         alert("qish");
//         break;
//     case 2:
//         alert("qish");
//     break;
//     case 3:
//         alert("bahor");
//     break;
//     case 4:
//         alert("bahor");
//     break;
//     case 5:
//         alert("bahor");
//     break;
//     case 6:
//         alert("yoz");
//     break;
//     case 7:
//         alert("yoz");
//     break;
//     case 8:
//         alert("yoz");
//     break;
//     case 9:
//         alert("kuz");
//     break;
//     case 10:
//         alert("kuz");
//     break;
//     case 11:
//         alert("kuz");
//     break;
//     case 12:
//         alert("qish");
//     break;
//     default:
//         alert("xato qiymat!!!")
//         break;
// }

/* 4 */
// let a = Number(prompt("1-12gacha son kiriting:"));
// switch (a) {
//     case 1:
//         alert("31");
//         break;
//     case 2:
//         alert("28");
//     break;
//     case 3:
//         alert("31");
//     break;
//     case 4:
//         alert("30");
//     break;
//     case 5:
//         alert("31");
//     break;
//     case 6:
//         alert("30");
//     break;
//     case 7:
//         alert("31");
//     break;
//     case 8:
//         alert("31");
//     break;
//     case 9:
//         alert("30");
//     break;
//     case 10:
//         alert("31");
//     break;
//     case 11:
//         alert("30");
//     break;
//     case 12:
//         alert("30");
//     break;
//     default:
//         alert("xato qiymat!!!")
//         break;
// }

/* 5 */
// let a = Number(prompt("A sonni kiriting:"));
// let b = Number(prompt("B sonni kiriting:"));
// let c = Number(prompt("1-7 son kiriting:"));
// switch (c) {
//     case 1:
//         alert(a + b);
//         break;
//     case 2:
//         alert(a - b);
//         break;
//     case 3:
//         alert(a / b);
//         break;
//     case 4:
//         alert(a * b);
//         break;
//     default:
//         alert("xato qiymat!!!")
//         break;
// }