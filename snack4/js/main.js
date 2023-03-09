'use strict';

/*SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!*/

/*
+++++++++++++
Functions
+++++++++++++
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
++++++++
Main
++++++++
*/

const team = [
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Cremonese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Empoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Hellas Verona',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lecce',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

const myTeam = team.map((element) => {
    let puntiFattiRnd = getRndInteger(1, 100);
    let falliSubitiRnd = getRndInteger(1, 100);
    element.puntiFatti = puntiFattiRnd;
    element.falliSubiti = falliSubitiRnd;
    return element;
});

const myTeamB = myTeam.map((element) => {
    const {nome, falliSubiti} = element;
    return {nome, falliSubiti};
});

console.log(myTeamB)