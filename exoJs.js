//Nombre pair
//Somme
//Nombre divisible par 5
let nombres = [1, 5, 25, 2, 4, 8, 90, 100];
let nombresPair = [];
let somme = 0;
let nombresDivisiblePar5 = [];

for (let i = 0; i < nombres.length; i++) {
    somme += nombres[i];

    if (nombres[i] % 2 == 0) {
        nombresPair.push(nombres[i])
    }

    if (nombres[i] % 5 == 0) {
        nombresDivisiblePar5.push(nombres[i])
    }
}

console.log(
`Somme des nombres dans le tableau nombres: ${somme}
Nombre pair dans le tableau nombres: ${nombresPair}
Nombre divisible par 5: ${nombresDivisiblePar5}`
);


//chaine de caractères +5
//chaine de caratère misy "a"
//remplacer "o" par "i"
let noms = ["Andry", "Ravalomanana", "Bema", "Mom", "Koto"];

let chaineSup5 = [];
let chaineAveCa = [];
let chaineRemplaceOi = [];

for (let i = 0; i < noms.length; i++) {
    if (noms[i].length > 5) {
        chaineSup5.push(noms[i]);
    }
    if (noms[i].includes("a")) {
        chaineAveCa.push(noms[i]);
    }
    if (noms[i].includes("o")) {
        chaineRemplaceOi.push(noms[i].replace(/o/g, "i"));
    } else {
        chaineRemplaceOi.push(noms[i]);
    }
}

console.log(
    `Chaine de caractère supérieur à 5: ${chaineSup5}
Chaine de caractère avec "a": ${chaineAveCa}
Le tableau noms avec les noms qui contenaient "o" et remplacés par "i" :
${chaineRemplaceOi}`
);
