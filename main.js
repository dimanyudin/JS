"use strict"
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/




const persanalMovieDb = {
	count: 0,
	movies: {},
	actors:{},
	genres:[],
	privat: false,
	start: function() {
		persanalMovieDb.count = +prompt("сколько фильмов?","");
		/* вариант с for */
	/* 	for(let i = 0; i < 1; i++){
			if(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
				i--;
				numberOfFilms = +prompt("сколько фильмов?","");
			}
		} */
		/* вариант с while */
		while (	persanalMovieDb.count == '' || 	persanalMovieDb.count == null || isNaN(	persanalMovieDb.count)){
			persanalMovieDb.count = +prompt("сколько фильмов?","");
		}
	},
	firsFilms: function() {
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
	},
	filmsCount: function() {
		if(persanalMovieDb.count <= 10){
		console.log('Просмотрено довольно мало фильмо');
	}else if(persanalMovieDb.count > 10 && persanalMovieDb.count <= 30){
		console.log('Вы классический зритель');
	}else if(persanalMovieDb.count > 30){
		console.log('киноман');
		
	}else{
		console.log('error');
		
	}
	},
	filmsCategory: function() {
		for(let i = 1; i <=3; i++){
				let ganre = prompt(` любимый жанр № ${i}`);
			if (ganre == '' || ganre == null) {
				i--;
			}else{
						persanalMovieDb.genres[i - 1] = ganre;
			}
		}
		persanalMovieDb.genres.forEach((item, i)=>{
console.log(`Любимый жанр ${i} - это ${item}`);
		});
	},
	
	privatDB: function(hidden) {
		if (!hidden) {
			console.log(persanalMovieDb);
		}
	},
	toggleVisibleMyDB: function(){
		if (persanalMovieDb.privat) {
			persanalMovieDb.privat == false;
		
		}else{
			persanalMovieDb.privat == true; 
		}
	}
}





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


/* Функции колбэк */


function learnJs(lang, callback) {
		console.log(`я учу ${lang}`);
		callback();
}
function done() {
	console.log('Zzz');
}
learnJs('js', done);

/* объекты */

const obj = {
	name: 'test',
	width: 1200,
	height: 1200,
	colors: {
		border:'black',
		bg: 'red'
	}
}

console.log(Object.keys(obj).length);


for (let key in obj) {
	if (typeof(obj[key]) === 'object') {
		for(let i in obj[key]){
			console.log(`${i}: ${obj[key][i]}`);
		}
	}else{
		console.log(`${key}: ${obj[key]}`);
	}

}

/* массивы */


let arr = ["12","213","43","43","12"];
/* сортировка массива */

/* функция для правильной сортировки чисел */
/* function sorts(a, b) {
	return a - b;
} */
console.log(arr.join("=) "));




/*передача по ссылке, объекты */
/* функция для перебора объекта, поверх */
function clone(copyObj) {
	const newObj = {};

	for (let key in copyObj) {
		newObj[key] = copyObj[key];
	}
	return newObj;
}
/* новый объект */
const opw ={
	a: 4,
	b: 45
}
/* клон */
const newObj = clone(opw);
/* новое значение */
newObj.a = 50;

console.log(newObj);
console.log(opw);

/* метод дабовления / клонирования обектов */
const opw2 ={
	a: 44,
	b: 45
}
const cloneOpw2 = Object.assign({}, opw2);
console.log(opw2);
cloneOpw2.b = 23;
console.log(cloneOpw2);
/*  */

/* копия массива */

const newArr = ['a','sd','sfre'];
/* новый массив куда присвоится копия */
const cloneArr = newArr.slice();
cloneArr[2] = 12;
console.log(newArr);
console.log(cloneArr);


/* Спред оператор для массивов/ оператор разварота данных ... */

const arrs = ['d', 'asd', 'sda'],
			arrs2 = ['1', 23, '23432'],
			areas = [...arrs, ...arrs2, 'qwer'];

			console.log(areas);
			
/* вариант с функцией */			

function log(a,b,c) {
	console.log(a);
	console.log(b);
	console.log(c);
	
}


const nums = [21,234,343];

log(...nums);
/* вариант с объектом */
const obj3 ={
a: 3,
b: 54
}

const newobj3 = {...obj3}
console.log(obj3);
console.log(newobj3);

/*  */

