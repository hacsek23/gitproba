/* 1.feladat
Hajdu Zoltán János
Ruander Team#12
HTML: 90
CSS: 85
JavaScript: 40-50
*/

//2. feladat

let szam=Number(prompt("Add meg a számot!"));
let hatvany=Number(prompt("Add meg a hatványát!"));

document.write(`${szam**=hatvany}`);


//3. feladat

let randomSzam=Math.round(Math.random(100-300)*(150-50))+50;


document.write(`${randomSzam*2}`)



//4.feladat

let eletkor=Number(prompt("Add meg az életkorod!"));


if(eletkor<6 && eletkor>0)
{document.write(`Ha az életkorod ${eletkor}, kisgyermekkorban vagy!`);}

else if(eletkor<12 && eletkor>6)
{document.write(`Ha az életkorod ${eletkor}, gyermekkorban vagy!`);}

else if(eletkor<16 && eletkor>12)
{document.write(`Ha az életkorod ${eletkor}, serdülőkorban vagy!`);}

else if(eletkor<20 && eletkor>16)
{document.write(`Ha az életkorod ${eletkor}, ifjúkorban vagy!`);}

else if(eletkor<30 && eletkor>20)
{document.write(`Ha az életkorod ${eletkor}, fiatak felnőtt korban vagy!`);}

else if(eletkor<60 && eletkor>30)
{document.write(`Ha az életkorod ${eletkor}, felnőtt korban vagy!`);}

else if(eletkor>60 && eletkor<121)
{document.write(`Ha az életkorod ${eletkor}, aggkorban vagy!`);}

else
{document.write("Az évszám hibás!");}

//5.feladat

let szam=Number(prompt("Adj meg egy számot!"));
let oszto=Number(prompt("Add meg az osztószámot!"));

if(szam%oszto==0)
{document.write("A maradék nulla");}

else
{document.write("A maradék NEM nulla");}


//6. feladat

{document.write("Az első 10 négyzetszám:");}
if(i*i<101)
{document.write(`${i*i},`)}


