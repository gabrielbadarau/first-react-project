# My first React project

In order for this project to work I used node v13.10.1 and npm v.8.1.3

## Concepts learned:

- împărțirea unei pagini în componente
- JSX 
- props 
- state
- randare condiționată 
- randare repetitvă 
- lifecycle methods
- formulare 
- transmiterea datelor între componente 
- setState 

## Functionalities:

- Preluare useri din API - userii noștri sunt aduși în urma unui request asincron către JSON Placeholder
- Listare useri existenți - userii pe care i-am preluat din API sunt afișați pe ecran
- Adăugare user nou - completând câmpurile din formular, la submitere userul nou introdus este listat pe ecran
- Schimbare culoare fundal - dând click pe butonul din subsolul paginii, putem schimba culoarea de fundal a paginii
- Două proprietăți noi pentru fiecare user: salariu și imagine
- Un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.
- Două componente noi, numite PostList și PostItem. PostList va fi o listă de componente de tip PostItem.
- În componenta PostList, atunci când este afișată pe ecran, facem un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate.
- Două butoane: Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.
- Buton de ștergere.
- Validare a datelor în form (să nu poată fi introdus un nume gol, iar emailul să conțină caracterele `@` și `.`)
- Stilizarea aplicației

## Project based on the following repositories:

Cursul 2: https://github.com/razvancir96/react-curs02
Cursul 3: https://github.com/razvancir96/react-curs03
Cursul 4: https://github.com/razvancir96/react-curs04
