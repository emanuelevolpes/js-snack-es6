<!-- SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto. -->

1. ci viene fornita una variabile con il nome del tavolo ('Tavolo Vip');
2. ci viene fornito un array con i nomi degli invitati;
3. dobbiamo creare una lista con al suo interno degli oggetti che abbiano come keys: 'nome del tavolo', 'nome dell'ospite', 'posto occupato';
4. stampiamo ogni elemento della lista in console ciclando la stessa.

-----------------------------------------------------------------------------------------------

<!-- SNACK 2
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
120 Francesca da Polenta    84 -->

1. abbiamo un array contenente degli oggetti che hanno come keys: 'Id', 'Name', 'Grades';
2. dobbiamo prelevare i valori della key 'Name' e creare una lista contenente gli stessi, ma convertiti in maiuscolo;
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70;
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120.

-----------------------------------------------------------------------------------------------

<!-- SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal -->
<!-- BONUS
Stampare in pagina oltre che in console! -->

1. creare una lista di oggetti con le prorpietà nome e peso;
2. entrare all'interno della lista e per ogni oggetto entrapolare il valore della proprietà peso;
3. confrontare i valori e stampare in console quello minore.

-----------------------------------------------------------------------------------------------

<!-- SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.-->
<!-- BONUS
Stampare in pagina oltre che in console! -->

1. creare una lista di oggetti, le proprietà di ogni oggetto saranno: nome, punti fatti e falli subiti;
2. assegnare un valore al nome e il valore 0 a punti fatti e falli subiti;
3. generare numeri random e assegnarli alle proprietà punti fatti e falli subiti;
4. creare una lista di oggetti con le sole proprietà nome e falli subiti e stampare in console.