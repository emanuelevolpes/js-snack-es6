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

const min = Math.min.apply(Math, weight);

console.log(`la bicicletta più leggera pesa ${min} kg`);