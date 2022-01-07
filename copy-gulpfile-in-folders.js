const { readdirSync, statSync } = require('fs')
const { join } = require('path')
const fs = require("fs");

const dirs = function(p) {
    return readdirSync(p).filter(function(f) {
        return statSync(join(p, f)).isDirectory()
    })
}

let counter = 0;

const createGulpFiles = function(dir) {
    if (fs.existsSync(dir)) {
        fs.copyFile('gulpfile.js', dir + '/gulpfile.js', (err) => {
            if (err) throw err;
            counter++;
            console.log(`${counter<10?'0'+counter:counter}. gulpfile.js został skopiowany do katalogu \x1b[34m${dir}/gulpfile.js\x1b[0m`);
        });
    } else {
        console.log(`Nie znaleziono katalogu ${dir}`)
    }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Czy skopiowałeś do tego katalogu node_modules i gulp-file.js? [Y/n] `, (answer = "") => {
    readline.close()

    if (answer.toUpperCase() !== "Y") {
        return;
    }

    let ok = true;

    if (!fs.existsSync('./node_modules')) {
        console.log('Nie znalazłem katalogu \x1b[31mnode_modules\x1b');
        ok = false;
    }

    if (!fs.existsSync('./gulpfile.js')) {
        console.log('Nie znalazłem pliku \x1b[31mgulpfile.js\x1b');
        ok = false;
    }

    if (!ok) {
        return;
    }

    console.log('\x1b[33m%s\x1b[0m', '------------------------------------------');
    console.log('\x1b[33m%s\x1b[0m', 'Zaczynam przegrywanie gulpfile.js do zadań');
    console.log('\x1b[33m%s\x1b[0m', '------------------------------------------');

    const folders = [
        "01_Dzien_1/01_Podstawy/01_Pierwsze_kroki_z_SCSS",
        "01_Dzien_1/01_Podstawy/02_Zmiana_wartosci_w_CSS",
        "01_Dzien_1/01_Podstawy/03_Zmienne",
        "01_Dzien_1/02_Zagniezdzanie/01_Stylowanie_z_zagniezdzaniem",
        "01_Dzien_1/03_Partials_i_importowanie/01_Zadania",
        "01_Dzien_1/04_Mixins/01_Zadanie_1",
        "01_Dzien_1/04_Mixins/02_Zadanie_2",
        "01_Dzien_1/04_Mixins/03_Zadanie_3",
        "02_Dzien_1_-_Praca_domowa/01_Tooltip",
        "03_Dzien_2/01_Dziedziczenie/01_Placeholdery",
        "03_Dzien_2/02_Listy_i_mapy/01_Zadanie_1",
        "03_Dzien_2/02_Listy_i_mapy/02_Zadanie_2",
        "03_Dzien_2/02_Listy_i_mapy/03_Zadanie_3",
        "03_Dzien_2/03_Logika/01_Zadanie_1",
        "03_Dzien_2/03_Logika/02_Zadanie_2",
        "03_Dzien_2/03_Logika/03_Zadanie_3",
        "03_Dzien_2/04_Funkcje/01_Zadanie_1",
        "03_Dzien_2/04_Funkcje/02_Zadanie_2",
        "03_Dzien_2/04_Funkcje/03_Zadanie_3",
        "03_Dzien_2/04_Funkcje/04_Zadanie_4",
        "03_Dzien_2/04_Funkcje/05_Zadanie_5",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/01_Zadanie_1",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/02_Zadanie_2",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/03_Zadanie_3",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/04_Zadanie_4",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/05_Zadanie_5",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/06_Zadanie_6",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/07_Zadanie_7",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/08_Zadanie_8",
        "03_Dzien_2/05_Wstep_do_RWD_i_jednostki/09_Zadanie_9",
        "04_Dzien_2_-_Praca_domowa/01_Wielkosci_naglowkow",
        "04_Dzien_2_-_Praca_domowa/02_Jednostki",
        "05_Dzien_3/01_Media_Queries/01_Zadanie_1",
        "05_Dzien_3/01_Media_Queries/02_Zadanie_2",
        "05_Dzien_3/01_Media_Queries/03_Zadanie_3",
        "05_Dzien_3/01_Media_Queries/04_Zadanie_4",
        "05_Dzien_3/02_Mobile_first/01_Zadanie_1",
        "05_Dzien_3/03_Grid/01_Zadanie_1",
        "05_Dzien_3/03_Grid/02_Zadanie_2",
        "05_Dzien_3/04_Flexbox/01_Verti",
        "06_Dzien_3_-_Praca_domowa/01_Mobile_First",
        "06_Dzien_3_-_Praca_domowa/02_Flexbox_Holy_Grail",
        "07_Dzien_4/01_Elastyczne_media/01_Zadanie_1",
        "07_Dzien_4/01_Elastyczne_media/02_Zadanie_2",
        "07_Dzien_4/01_Elastyczne_media/03_Zadanie_3",
        "07_Dzien_4/02_Animacje/01_Niedzwiadek",
        "07_Dzien_4/02_Animacje/02_Zadania",
        "07_Dzien_4/02_Animacje/03_Zombie",
        "07_Dzien_4/02_Animacje/04_Rakieta",
        "08_Dzien_4_-_Praca_domowa/01_Flexbox_Shrink",
        "08_Dzien_4_-_Praca_domowa/02_Flexbox_Grow_Shrink",
    ];

    for (const el of folders) {
        const path = decodeURIComponent("./" + el)
        createGulpFiles(path);
    }
})

