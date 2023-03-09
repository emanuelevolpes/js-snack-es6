'use strict';

/*SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
BONUS
Stampare in pagina oltre che in console!*/

const bike = [
    {
        nome: 'Cannondale',
        peso: 12
    },
    {
        nome: 'Factor',
        peso: 10
    },
    {
        nome: 'Orbea',
        peso: 8
    },
    {
        nome: 'Pinarello.',
        peso: 11
    },
    {
        nome: 'Scott.',
        peso: 7
    },
    {
        nome: 'Specialized.',
        peso: 6.8
    }
];

const weight = bike.map((element) => {
    const {peso} = element;
    return peso;    
});

let lighter = weight[0];

for (let i = 0; i < weight.length; i++) { //for solution
    if (weight[i] < lighter) {
        lighter = weight[i];
    };
};

// const min = Math.min.apply(Math, weight); // math min solution
// const lighter = Math.min(...weight); // math min + spread solution

console.log(`la bicicletta più leggera pesa ${lighter} kg`);