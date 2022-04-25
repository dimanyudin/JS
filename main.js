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




