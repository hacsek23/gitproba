/*1. feladat: LNKO optimalizálás. A "&& i<=szamKetto" részt hozzátettem a for ciklushoz, ezáltal ha a szamKetto a kisebb a két megadott szám közül, abban az esetben sem számol el a program a nagyobb számig (szamEgy), hanem csak értelemszerűen a kisebb számig keresi az LNKO-t.*/


let szamEgy=prompt("Add meg az első vizsgálandó számot");
let szamKetto=prompt("Add meg az második vizsgálandó számot");
let lnko=1;

document.write(`A vizsgált számok: ${szamEgy}, ${szamKetto}`);
for(let i=2;i<=szamEgy && i<=szamKetto;i++){
	document.write(`<br>Aktuálisan vizsgált ciklusváltozó:${i}`);
	if(szamEgy%i==0 && szamKetto%i==0 && szamEgy<szamKetto){
    	lnko=i;
    	document.write("[osztója]");    
    }
}
document.write(`<hr>A ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}`);



/*2. feladat: prímszám optimalizálás. A for ciklusba beépítettem egy "/2" részt, illetve az "oszto==2" értéket "oszto==1". Értelmezésem szerint elég a vizsgaltSzam feléig megnéznie a számokat a programnak, ugyanis ha addig csak az egy lesz osztója, utána már csak önmagával lesz osztható, tehát prím szám.
*/

let vizsgaltSzam=prompt("Add meg a vizsgálandó számot");
let oszto=0;
for(let i=1;i<=vizsgaltSzam/2;i++){
	if(vizsgaltSzam%i==0){
    	oszto++;
    }
}
if(oszto==1)
{
	document.write(`A(z) ${vizsgaltSzam} prím`);
}
else{
	document.write(`A(z) ${vizsgaltSzam} NEM prím`);}


	/*3. feladat: relatív prím optimalizálás. A "&& i<=szamKetto" részt hozzátettem a for ciklushoz, 
ezáltal ha a szamKetto a kisebb a két megadott szám közül, 
abban az esetben sem számol el a program a nagyobb számig (szamEgy), 
hanem csak értelemszerűen a kisebb számig keresi a megoldást.*/

let szamEgy=prompt("Add meg az első vizsgálandó számot");
let szamKetto=prompt("Add meg az második vizsgálandó számot");
let lnko=1;
document.write(`A vizsgált számok: ${szamEgy}, ${szamKetto}`);
for(let i=2;i<=szamEgy && i<=szamKetto;i++){
	document.write(`<br>Aktuálisan vizsgált ciklusváltozó:${i}`);
	if(szamEgy%i==0 && szamKetto%i==0 && szamEgy=szamEgy){
    	lnko=i;
    	document.write("[osztója]");    
    }
}
if(lnko==1)
{
	document.write(`<hr>A ${szamEgy} és ${szamKetto} RELATÍV PRÍM legnagyobb közös osztója: 1`);
}

else
{
	document.write(`<hr>A ${szamEgy} és ${szamKetto} NEM RELATÍV PRÍM legnagyobb közös osztója: ${lnko}`);
}


