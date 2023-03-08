'use strict';

/*SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84*/

const listaStudenti = [
    {
        Id : 213,
        Name : 'Marco della Rovere',
        Grades: 78
    },
    {
        Id : 110,
        Name : 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id : 250,
        Name : 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id : 145,
        Name : 'Gaia Borromini',
        Grades: 74
    },
    {
        Id : 196,
        Name : 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id : 102,
        Name : 'Piero della Francesca',
        Grades: 50
    },
    {
        Id : 120,
        Name : 'Francesca da Polenta',
        Grades: 84
    }
];

const template = document.getElementById('list-template');
const ulContainer = document.getElementById('list');



// const nomeStudenti = listaStudenti.map((element) => {
//     const nomeTemplate = template.content.cloneNode(true);
    
//     nomeTemplate.querySelector('.li').innerHTML = element.Name.toUpperCase();

//     ulContainer.append(nomeTemplate);
// });

// const grades = listaStudenti.filter((element) => {
//     if (element.Grades > 70) {
//         const nomeTemplate = template.content.cloneNode(true);

//         nomeTemplate.querySelector('.li').innerHTML = `nome studente: ${element.Name.toUpperCase()} grado: ${element.Id} `
        
//         ulContainer.append(nomeTemplate);
//         return true;
//     };
//     return false;
// });

// console.log(grades);

const id = listaStudenti.filter((element) => {
    if (element.Grades > 70 && element.Id > 120) {
        const nomeTemplate = template.content.cloneNode(true);

        nomeTemplate.querySelector('.li').innerHTML = `nome studente: ${element.Name} grado: ${element.Grades} id: ${element.Id}`

        ulContainer.append(nomeTemplate);
        return true;
    };
    return false;
});

console.log(id);