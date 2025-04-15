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