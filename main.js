"use strict"

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("сколько фильмов?","");
	/* вариант с for */
/* 	for(let i = 0; i < 1; i++){
		if(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
			i--;
			numberOfFilms = +prompt("сколько фильмов?","");
		}
	} */
	/* вариант с while */
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("сколько фильмов?","");
	}
}
start();


const persanalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres:[],
	privat: false
}


function firsFilms() {
	/* for */
	for (let i = 0; i < 2; i++) {
	const a = prompt("последний фильм",""),
				 b = prompt("оценка","");

	if (a != '' && b != '' && a.length < 50 && a != null && b != null ) {
		persanalMovieDb.movies[a] = b;
		console.log('done');
	}else{
	i--;
console.log('error');
	}
} 


/* while */
/* while (i < 2) {
	const a = prompt("последний фильм",""),
				b = prompt("оценка","");
	i++;
	if (a != '' && b != '' && a.length < 50 && a != null && b != null ) {
		persanalMovieDb.movies[a] = b;
		console.log('done');
	}else{
		i--;
	}
} */




/* do while */
/* let i = 0;
do{
	const a = prompt("последний фильм",""),
	b = prompt("оценка","");
	i++;
	if (a != '' && b != '' && a.length < 50 && a != null && b != null ) {
		persanalMovieDb.movies[a] = b;
		console.log('done');
	}else{
		i--;
	}
}while(i < 2);
 */
}
firsFilms();
 
function filmsCount() {
	if(persanalMovieDb.count <= 10){
	console.log('Просмотрено довольно мало фильмо');
}else if(persanalMovieDb.count > 10 && persanalMovieDb.count <= 30){
	console.log('Вы классический зритель');
}else if(persanalMovieDb.count > 30){
	console.log('киноман');
	
}else{
	console.log('error');
	
}
}
filmsCount();
function filmsCategory() {
	for(let i = 1; i <=3; i++){
		persanalMovieDb.genres[i - 1] = prompt(` любимый жанр № ${i}`)
	}
}
filmsCategory();
function privat(hidden) {
	if (!hidden) {
		console.log(persanalMovieDb);
	}
}
privat(persanalMovieDb.privat);


/* уроки */

/* методы */

const s = 'qwer erty';

console.log(s.indexOf('e'));/* 2 */

console.log(s.slice(2, 6));/* er e */
console.log(s.substring(2, 6));/* er e */

console.log(s.substr(2/* со второй позиции */, 4/*вырежет четыре символа*/));/* er e */

/* методы чисел */
const num = 12.6;
console.log(Math.round(num));/* 13 */
const num2 = 12.3;
console.log(Math.round(num2));/* 12 */

const px = '12.3px';
console.log(parseInt(px));/* 12 преобразует в число */
console.log(parseFloat(px));/* 12.3 */



