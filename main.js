"use strict"

const numberOfFilms = prompt("сколько фильмов?","");


const persanalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres:[],
	privat: false
}

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
if(persanalMovieDb.count <= 10){
	console.log('Просмотрено довольно мало фильмо');
}else if(persanalMovieDb.count > 10 && persanalMovieDb.count <= 30){
	console.log('Вы классический зритель');
}else if(persanalMovieDb.count > 30){
	console.log('киноман');
	
}else{
	console.log('error');
	
}
console.log(persanalMovieDb);
