/*
VIDEOS RECOMENDADOS:

https://www.youtube.com/watch?v=FJ-w0tf3d_w

https://www.youtube.com/watch?v=cuEtnrL9-H0

*/




/////////////////////////////////////////////////////FRONT-END EJERCICIOS ///////////////////////////////////////////////////////////////
async function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
  
   return new Promise((resolve, reject) => { 
  
    setTimeout(() => { fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json()) //transforma mi respuesta en un JSON
      .then(data => {
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        resolve(amountEl_two.value = (amountEl_one.value * rate).toFixed(2));
        //El nummero 2  inidca la cantidad de decimales que queremos ver
        //resolve(currency_one);
  
        //setTimeout(() => {console.log("mi callback")}, 3000);
        //resolve(amountEl_two.value);
  
      })  
      .catch(error => 
        showError(error)
      );
    }, 3000)
   });
  
  }

  async function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
  
   return new Promise((resolve, reject) => { 
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json()) //transforma mi respuesta en un JSON
      .then(data => {
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        resolve(amountEl_two.value = (amountEl_one.value * rate).toFixed(2));
        //El nummero 2  inidca la cantidad de decimales que queremos ver
        //resolve(currency_one);
  
        //setTimeout(() => {console.log("mi callback")}, 3000);
        //resolve(amountEl_two.value);
  
      })  
      .catch(error => 
  
        setTimeout(() => { showError(error) }, 20000)
      );
    
   });
  
  }


  async function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
  
   return new Promise((resolve, reject) => { 
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json()) //transforma mi respuesta en un JSON
      .then(data => {
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        resolve(amountEl_two.value = (amountEl_one.value * rate).toFixed(2));
        //El nummero 2  inidca la cantidad de decimales que queremos ver
        //resolve(currency_one);
  
        //setTimeout(() => {console.log("mi callback")}, 3000);
        //resolve(amountEl_two.value);
  
      })  
      .catch(error => 
        setTimeout(() => { showError(error) }, 20000)
      );
    
   });
  
  }


///////////////////////////////////////////JAVASCRIPT PARA PROGRAMADORES PEC2 ENTREGADA VERSION LIMPIA Y FUNCIONAL//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import "whatwg-fetch";
import XMLHttpRequest from "xhr2";
//import "whatwg-fetch";
//Ejercicio 1: Promesas y funciones asíncronas (1p)
//Función con callback (0.5p)
export function delay(callback, ms) {
    setTimeout(callback, ms);
}

//Función con callback (0.5p)
export function delayPromise(callback, ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            callback();
            resolve();
        }, ms);
    });
}

//Ejercicio 2: Peticiones al servidor con XMLHTTPRequest (2p)--------------------------------------------------------------------
//XMLHttpRequest con callbacks(1p)------------------------------------------------------
export function listMovies1(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true);
    xhr.onload = function () {
        const moviesApi = JSON.parse(xhr.responseText).results;
        let movies = [];
        for (let i = 0; i < moviesApi.length; i++) {
            movies[i] = {
                date: new Date(moviesApi[i].release_date),
                id: moviesApi[i].episode_id,
                title: moviesApi[i].title
            }
        }
        function orden(a, b) {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        }
        movies.sort(orden);
        callback(movies);
    }
    xhr.send();
}

//XMLHttpRequest con promesas (.5p)---------------------------------------------------
export function listMoviesPromise() {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true);
        xhr.onload = function () {
            let moviesApi = JSON.parse(xhr.responseText).results;
            let movies = [];
            for (let i = 0; i < moviesApi.length; i++) {
                movies[i] = {
                    date: new Date(moviesApi[i].release_date),
                    id: moviesApi[i].episode_id,
                    title: moviesApi[i].title
                }
            }
            function orden(a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            }
            movies.sort(orden);
            resolve(movies);
        }
        xhr.send();
    });
}

//XMLHttpRequest con fetch (.5p)
export async function listMoviesFetch() {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.dev/api/films")
            .then(results => results.json())
            .then(films => {
                let moviesApi = films.results;
                let movies = [];
                for (let i = 0; i < moviesApi.length; i++) {
                    movies[i] = {
                        date: new Date(moviesApi[i].release_date),
                        id: moviesApi[i].episode_id,
                        title: moviesApi[i].title
                    }
                }
                function orden(a, b) {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                }
                movies.sort(orden);
                resolve(movies);
            })
    });
}
//Ejercicio 3: Uso de async y await (3p)
//Ejecución en serie (1.5p)
export async function runInSeries(f1, f2, f3) {
    let c = await f3();
    let b = await f2();
    let a = await f1();
    return [a, b, c];
}
//Ejecución en paralelo (1.5p)
export async function runParallel(f1, f2, f3) {
    let myfunc = await Promise.all([f1(), f2(), f3()]);
    //return values;
    //});
    //let myfunc = await Promise.all([f1(), f2(), f3()]);
    return (myfunc);
}



//////////////////////////////////////JAVASCRIPT PARA PROGRAMADORES PEC2 COMENTADA//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PEC2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import "whatwg-fetch";
//Ejercicio 1: Promesas y funciones asíncronas (1p)
//Función con callback (0.5p)
export function delay(callback, ms) { //"setTimeout" Si que es una función reservada de JS
   setTimeout(callback, ms); //Temporized is activated for X miliseconds----paso parametros por funcion
} //my "callback" is executed after "ms" have passed

//Función con callback (0.5p)
export function delayPromise(callback, ms) {
   return new Promise((resolve) => {
      setTimeout(() => { //}, ms);
         callback(); //Este necesita parentesis porque el enunciado dice que es una funcion
         resolve(); //resolvemos por que ya se ha ejecutado
      }, ms);
   });
}
//setTimeout(() => { callback(); resolve();}, ms);

//-------------------------SIN ARROW---------------
//Función con callback (0.5p)
export function delayPromise(callback, ms) {
   return new Promise((resolve) => {
      setTimeout(function () { //}, ms); //parentesis vacío indica que no le paso ningun parametro porque callback() ya la tengo disponible en mi entrada "nivel superior"
         //resolve(); tambien esta disponible en un nivel superior
         callback(); //Este necesita parentesis porque el enunciado dice que es una funcion verdad
         resolve(); //Pasa TEST sin parentesis, PERO necesita SI oSI los parentesis para que la promesa se resuelva
      }, ms);
   });
}
//ALTERNATIVA------------------
//export function delayPromise(callback, ms) {
//   return new Promise(function (resolve) {
//      setTimeout([resolve, callback],ms); // Me sobra un "setTimeout" ?????
//mi primer setTimeout
//   });
//}
//--------------------------------------------------------------

//Ejercicio 2: Peticiones al servidor con XMLHTTPRequest (2p)--------------------------------------------------------------------
//XMLHttpRequest con callbacks(1p)------------------------------------------------------
export function listMovies1(callback) {
   const xhr = new XMLHttpRequest(); //XMLHttpRequest() es un clase con metodo contructor (Le estoy indicando que me cree un OBJETO de esta clase)
   xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true); //que pasa si elimino ?format=json
   //el RAW DE JSON es un archivo de texto simplemente, RAW es un JSON sin ser "PARSEADO"
   //JSON Parseado se convierte en un OBJETO DE JS
   //Cuando hago peticiones a APIS tengo varios metodos GET  y POST 
   //OPEN PORQUE FORMA PARTE DEL CICLO DE VIDA (1.OPEN--> 2.onload (cuando me llegan los datos) --> onerror/oneprogress/oneabort/onetimeout etc --> oneloadSend )

   xhr.onload = function () { //Dispara cuando XMLHttpRequest se completa/resuelve. donde lo hace?? QUE ES ONLOAD COMO TAL
      let moviesApi = JSON.parse(xhr.responseText).results; //guardo en la variable moviesApi los "results" de mi API (xhr.responseText => es mi JSON en RAW)
      // ESTO ES MI RAW: xhr.responseText
      //Los datos de moviesApi son un OBJETO
      let movies = [];
      for (let i = 0; i < moviesApi.length; i++) { // 
         //movies.push({ //es un metodo que me garantiza que se siempre se añada al final del array
         movies[i] = { //porque la "i" dentro?? Es lo que se incremente y me detecta el bucle for (ES UN ARRAY DE OBJETOS)
            date: new Date(moviesApi[i].release_date), //me cuesta entender esta manera de asignar?????? porque new Date???
            id: moviesApi[i].episode_id, //miviesApi[i] se guarda dentro de episode_id "number"
            title: moviesApi[i].title //que significan los ":" ???????????????? 
            //CLAVES (date:,id:,title:) (: es como el "=", se usan los punto porque estamos dentro de un objeto)
         }
         //movies[i] = {date: new Date(moviesApi[i].release_date),id: moviesApi[i].episode_id, title: moviesApi[i].title} 
      }
      function orden(a, b) { // sobra esta función si solo uso el "sort"??????? NO
         //if (fsagg){
         // return fsdag ;
         //}
         if (a.id > b.id) return 1; //se puede obviar corchetes si mi IF es solo 1 linea
         if (a.id < b.id) return -1;
         return 0; //porque este ultimo "return 0;"?????????????????
         // 1 = a>b
         //-1 = a<b
         // 0 a=b  
      }
      movies.sort(orden); //de manera predetermianda lo ordena como si fueran numeros
      callback(movies); //por que lo pide el enunciado SI COMENTO NO PASA TEST
      //QUE ES UN ENDPOINT????????????????????????

   }
   xhr.send(); //Es para ejecutar la petición HTTP
}

//ALTERNATIVA-------------------------------------------------------------------
export function listMovies1(callback) {
   const xhr = new XMLHttpRequest(); //XMLHttpRequest() es un clase con metodo contructor (Le estoy indicando que me cree un OBJETO de esta clase)
   xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true); //que pasa si elimino ?format=json
   //el RAW DE JSON es un archivo de texto simplemente, RAW es un JSON sin ser "PARSEADO"
   //JSON Parseado se convierte en un OBJETO DE JS
   //Cuando hago peticiones a APIS tengo varios metodos GET  y POST 
   //OPEN PORQUE FORMA PARTE DEL CICLO DE VIDA (1.OPEN--> 2.onload (cuando me llegan los datos) --> onerror/oneprogress/oneabort/onetimeout etc --> oneloadSend )

   xhr.onload = function () { //Dispara cuando XMLHttpRequest se completa/resuelve??? donde lo hace?? QUE ES ONLOAD COMO TAL
      let moviesApi = JSON.parse(xhr.responseText).results; //guardo en la variable moviesApi los "results" de mi API (xhr.responseText => es mi JSON en RAW)
      // ESTO ES MI RAW: xhr.responseText
      //Los datos de moviesApi es un OBJETO?????????????
      let movies = [];
      for (let i = 0; i < moviesApi.length; i++) { // 
         //movies.push({ //es un metodo que me garantiza que se siempre se añada al final del array
         movies[i] = { //porque la "i" dentro?? Es lo que se incremente y me detecta el bucle for (ES UN ARRAY DE OBJETOS)
            date: new Date(moviesApi[i].release_date), //me cuesta entender esta manera de asignar?????? porque new Date???
            id: moviesApi[i].episode_id, //miviesApi[i] se guarda dentro de episode_id "number"
            title: moviesApi[i].title //que significan los ":" ???????????????? 
            //CLAVES (date:,id:,title:) (: es como el "=", se usan los punto porque estamos dentro de un objeto)
         }
         //movies[i] = {date: new Date(moviesApi[i].release_date),id: moviesApi[i].episode_id, title: moviesApi[i].title} 
      }
      movies.sort((a, b) => { //paso por parametro mi función de ordenación directamente
         return a.id - b.id; // 
      });

      callback(movies); //por que lo pide el enunciado SI COMENTO NO PASA TEST
      //QUE ES UN ENDPOINT????????????????????????
   }
   xhr.send(); //Es para ejecutar la petición HTTP
}

//---------------------------------------------------------------------------------------------

//XMLHttpRequest con promesas (.5p)---------------------------------------------------
export function listMoviesPromise() { //PORQUE NO ES NECESARIO NINGUN PARAMETRO DE ENTRADA?????
   return new Promise((resolve, reject) => {
      //resolve es para las promesas lo que el return es para las funcioens
      const xhr = new XMLHttpRequest(); //Se crea este objeto 
      xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true);
      xhr.onload = function () {
         let moviesApi = JSON.parse(xhr.responseText).results; //guardo en la variable FILMS los "results" de mi API
         let movies = [];
         for (let i = 0; i < moviesApi.length; i++) {
            movies[i] = {
               date: new Date(moviesApi[i].release_date),
               id: moviesApi[i].episode_id,
               title: moviesApi[i].title
            }
         }
         function orden(a, b) {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
            return 0;
            // 1 = a>b
            //-1 = a<b
            // 0 a=b  
         }
         movies.sort(orden); //de manera predetermianda lo ordena como si fueran numeros
         resolve(movies); //me resuelve la promesa con este valor
      }
      xhr.onerror = () => {
         reject("Error fetching movies");
      }
      xhr.send(); //Es para ejecutar la petición HTTP
   });
}

//XMLHttpRequest con fetch (.5p)-------
export async function listMoviesFetch() {
   return new Promise((resolve, reject) => { //El return permite retornar mi promesa una vez se ha resuelto
      fetch("https://swapi.dev/api/films")    //1-HACER PETICION Y ESPECIFICAR LA URL (fech retorna una promesa)
         .then(results => results.json())    //2-PROCESAMOS LOS RESULTADOS EN RAW
         .then(films => { //TRATAMOS LOS RESULTADOS DEL RETORNO DE MI API (COMO EN EL NAVEGADOR)
            let moviesApi = films.results; //guardo en la variable FILMS los "results" de mi API
            let movies = [];
            for (let i = 0; i < moviesApi.length; i++) {
               movies[i] = {
                  date: new Date(moviesApi[i].release_date),
                  id: moviesApi[i].episode_id,
                  title: moviesApi[i].title
               }
            }
            function orden(a, b) {
               if (a.id > b.id) return 1;
               if (a.id < b.id) return -1;
               return 0;
               // 1 = a>b
               //-1 = a<b
               // 0 a=b  
            }
            movies.sort(orden); //de manera predetermianda lo ordena como si fueran numeros
            resolve(movies); //Aqui se resuelve la promesa, al resolverse se retorna
         }).catch(err => reject("Se ha encontrado Error"));
   });
}
//XMLHttpRequest con fetch (.5p)--------ALTERNATIVA MOSTRANDO EN UN HTML--------------------------------------------
export async function listMoviesFetch() {
   //1-HACER PETICION Y ESPECIFICAR LA URL
   //2-PROCESAMOS LOS RESULTADOS
   //var div_usuarios = document.querySelector("#usuarios");
   //alert("hola"); //This ALERT allows know that JS works correctly
   //Fetch (hace peticiones AJAX asincronas a un servidor) y peticiones a servicios/apis rest
   var peliculas = []; //we inicialize a variable as array
   fetch("https://swapi.dev/api/films") //Fetch is a method-This is a Promise
      //  We convert a Object "data" to JSON (Usable JS Object)
      .then(results => results.json()) //This a method that pick up datas, this function is as a CALLBACK
      .then(films => { //that replace a "FUNCTION" with a "RETURN"
         peliculas = films.results;
         console.log(peliculas);

         peliculas.map((miPeli, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = miPeli.title + " " + miPeli.episode_id + " " + miPeli.release_date;

            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").getElementsByClassName.display = "none";
         });
      });
}

//Ejercicio 3: Uso de async y await (3p)
//Ejecución en serie (1.5p)
//ME TIENE QUE DAR UN ARRAY "segun text"
export async function runInSeries(f1, f2, f3) {
   //myArray.push(await)
   let c = await f3(); //se ejecuta y pasa al siguiente cuando ha terminado
   let b = await f2(); //se ejecuta cuando C termina
   let a = await f1(); //se ejecuta cuando b termina
   return [a, b, c];
}

/*
//Ejecución en paralelo (1.5p)
// ME TIENE QUE DAR UN ARRAY
export async function runParallel(f1, f2, f3) {
   let a = f1(); //se ejecuta cuando b termina
   let b = f2(); //se ejecuta cuando C termina
   let c = f3(); //se ejecuta y pasa al siguiente cuando ha terminado
   return [await f1(), await f2(), await f3()];
}
*/

//Ejecución en paralelo (1.5p)----OK
export async function runParallel(f1, f2, f3) {
   const arr = [f1(), f2(), f3()];
   return await Promise.all(arr)
}

//Ejecución en paralelo (1.5p)----OK
export async function runParallel(f1, f2, f3) {
   let a = f1();
   let b = f2();
   let c = f3();
   return Promise.all([a, b, c]);
}

//Ejecución en paralelo (1.5p)----OK
export async function runParallel(f1, f2, f3) {
   return await Promise.all([f1(), f2(), f3()]);
}





//PEC2: FUNCIÓN CALLBACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Ejercicio 2: Peticiones al servidor con XMLHTTPRequest (2p)
//XMLHttpRequest con callbacks(1p)
export function listMovies1(callback) {
   const xhr = new XMLHttpRequest();
   xhr.open(method: 'GET', url: 'https://swapi.dev/api/films/?format=json', async: true);
   xhr.onload = function () {
      console.log(JSON.parse(xhr.responseText));
   }
   xhr.send();
}

//---------------------

export function listMovies1(callback) {
   const xhr = new XMLHttpRequest();
   xhr.open(method: 'GET', url: 'https://swapi.dev/api/films/?format=json', async: true);
   xhr.onload = function () {
      callback(JSON.parse(xhr.responseText));
   }
   xhr.send();
}

//---------------------

export function listMovies1(callback) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true);

   xhr.onload = function () {
      callback(JSON.parse(xhr.responseText));
   }
   xhr.send();
}
XMLHttpRequest.timeout

//---------------------

export function listMovies1(callback) {
   const xhr = new XMLHttpRequest();

   xhr.onload = function () {
      callback(JSON.parse(xhr.responseText));
   }
   xhr.open('GET', 'https://swapi.dev/api/films/?format=json', true);
   xhr.send();
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

'use strict'; //hace mi documento mas estricto

var div_usuarios = document.querySelector("#usuarios");
//alert("hola"); //This ALERT allows know that JS works correctly
//Fetch (hace peticiones AJAX asincronas a un servidor) y peticiones a servicios/apis rest
var peliculas = []; //we inicialize a variable as array
fetch("https://swapi.dev/api/films") //Fetch is a method-This is a Promise in "PENDING" status
   //  We convert a Object "data" to JSON (Usable JS Object)
   .then(results => results.json()) //"then" is a method that pick up datas, this function is as a CALLBACK
   .then(films => { //that ARROW replace a ("FUNCTION" with a "RETURN")
      peliculas = films.results;
      console.log(peliculas);

      peliculas.map((miPeli) => {
         let nombre = document.createElement('h3');
         nombre.innerHTML = miPeli.release_date + " " + miPeli.episode_id + " " + miPeli.title;

         div_usuarios.appendChild(nombre);
         document.querySelector(".loading").getElementsByClassName.display = "none";
      });
   });

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Ejercicio 1: Promesas y funciones asíncronas (1p)
//Función con callback (0.5p)
export function delay(callback, ms) {
   setTimeout(callback, ms); //setTimeout retarda X milisegundos la ejecución de "callback"
}

//Función con callback (0.5p)
//-------------------------------------------------SOLUCION 1-----------------------------
export function delayPromise(callback, ms) {
   return new Promise(function (resolve) {
      setTimeout(resolve, setTimeout(callback, ms));
   });
}
//-------------------------------------------------SOLUCION 2-----------------------------
export function delayPromise(callback, ms) {
   return new Promise(function (resolve) {
      resolve(setTimeout(callback, ms));
   });
}

//---------------------
function miPromesa() {
   return new Promise(function (resolve, reject) {
      let suma = 2 + 20;
      if (suma === 8) {
         resolve("Correcto"); //function RESOLVE is associated with method THEN
      }
      else {
         reject("Error!"); //funct. REJECT is associated with method CATCH
      }
   });
}

miPromesa().then(function (mensaje) {
   console.log(mensaje);

}).catch(function (error) {
   console.log(error);
});













//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//-------------------------------------https://www.youtube.com/watch?v=8aGhZQkoFbQ -------------------------------------------
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D 

//una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función
//FECTH es un metodo que permite hacer peticiones AJAX de manera mas simple que con el JS antiguo. Permite obtener resultados
//Una petición AJAX es una llamada a un servicio o API REST o BACKEND

// SETTIMEOUT VS PROMISE --> https://dmitripavlutin.com/javascript-promises-settimeout/

// QUE ES CALLBACK?  // https://www.youtube.com/watch?v=DaXuPcdKqQ4&t=1s -----------------------------------------------------------------
//1
function mensaje(nombre) {
   console.log("hola", nombre); //nombre es un parametro
}
mensaje("Nicolas");
//2--------------------------------------------------------

function callback() {
   console.log("Yo soy un maldito CALLBAAACK!!!");
}

function mensaje(fn) {
   fn();
}
mensaje(callback); //Yo soy un maldito CALLBAAACK!!!
//3--------------------------------------------------------

function function1() {
   console.log("mensaje 1");
}
function function2() {
   console.log("mensaje 2");
}

function1(); //"mensaje 1"
function2(); //"mensaje 2"

//4--------------------------------------------------------
function function1() {
   setTimeout(function () {
      console.log("mensaje 1");
   }, 3000);
}

function function2() {
   console.log("mensaje 2");
}

function1(); //"mensaje 1" ESTE MENSAJE SALDRA MAS TARDE 3000 MILISEGUNDOS MAS TARDE
function2(); //"mensaje 2"

//5-------------------------------------------------------- MENSAJE 1 Y 2 A LA VEZ  CON EL SETTIMEOUT USANDO CALLBACK
function function1(callback) {
   setTimeout(function () {
      console.log("mensaje 1");
      callback();
   }, 3000);
}

function function2() {
   console.log("mensaje 2");
}

function1(function2); // "mensaje 1"
// "mensaje 2"
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// QUE ES UNA PROMESA----------------------------------------------------------------------------------------------------------------------------------------
// https://www.youtube.com/watch?v=pHBmmbDQl0o

//una promesa: si prometo hacer una tarea recibire un premio, si no cumplo, no recibiré ningún premio
//The parameters RESOLVE and REJECT can be called by another aleatory name.
//BUT: in programming, the programmers engineers by agreement call: resolve--> todo fue exitoso. reject --> ocurrió un error
//these parameters(resolve & reject) can be functions

let p = new Promise(function (resolve, reject) {
   let suma = 2 + 6;
   if (suma === 8) {
      resolve("Correcto"); //function RESOLVE is associated with method THEN
   }
   else {
      reject("Error!"); //funct. REJECT is associated with method CATCH
   }
});

p.then(function (mensaje) {
   console.log(mensaje);

}).catch(function (error) {
   console.log(error);
});
//TE PROMETO QUE SI LA SUMA ES CORRECTA TE DIRE "Correcto!" SI NO TE AVISARE "Error!"
//FUNCIÓN QUE NOS RETORNA UNA PROMESA

function miPromesa() {
   return new Promise(function (resolve, reject) {
      let suma = 2 + 20;
      if (suma === 8) {
         resolve("Correcto"); //function RESOLVE is associated with method THEN
      }
      else {
         reject("Error!"); //funct. REJECT is associated with method CATCH
      }
   });
}

miPromesa().then(function (mensaje) {
   console.log(mensaje);

}).catch(function (error) {
   console.log(error);
});

// EJEMPLO: AHORA SIMULAMOS UNA API
function miPromesa() {
   return new Promise(function (resolve, reject) {
      let isHomeworkDone = true;
      if (isHomeworkDone === true) { //if this condition is true then.. we send "iphone object" to
         let phone = { //this is a object
            color: "negro",
            brand: "iphone"
         }
         resolve(phone); //we send found if we complet HOMEWORK
      }
      else {
         reject("No te has ganado el iphone"); //funct. REJECT is associated with method CATCH
      }
   });
}

miPromesa().then(function (mensaje) {
   console.log(mensaje);

}).catch(function (error) {
   console.log(error);
});
//RETORNAR LA PROMESA DESPUES DE HABER OBTENIDO LA RESPUESTA DE OTRA PROMESA

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//----------------------------------------------------------------------------------------------------------------------------------------
console.log("HEllO"); //HELLO

setTimeout(function () { console.log("There") }, 5000);

console.log("Hola"); //Hola
// 5 SEGUNDOS DESPUES VEMOS "There"

//------------------------------------- https://www.youtube.com/watch?v=cCOL7MC4Pl0 -------------------------------------------

Promise.resolve().then(() => console.log("Hey!"));
console.log("yo");
//-------------------------

function loop() {
   Promise.resolve().then(loop);
}

loop();

//-------------------------------

button.addEventListener("click", () => {
   Promise.resolve().then(() => console.log("Microtask1"));
   console.log("Listener 1");
});

button.click();
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


function listMovies1(callback) {


   var xhttp = new XMLHttpRequest();
   const url = 'https://swapi.dev/api/films/?format=json';


   xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {

         const result = JSON.parse(xhttp.response);

         let movies = result.results;
         // movies.sort(function(a,b){return new Date(a.release_date) - new Date(b.release_date)});
         movies.sort(function (a, b) { return a.episode_id - b.episode_id });

         let moviesList = [];

         movies.map((item) => {
            let movie = {
               date: new Date(item.release_date),
               id: item.episode_id,
               title: item.title
            };

            moviesList.push(movie);

         });

         callback(moviesList);


      } else {
         // throw new Error('There is a problem getting the items');
      }

   }

   xhttp.onerror = () => {
      throw new Error('There is a problem getting the items');
   }

   xhttp.open("GET", url);
   xhttp.send();

}

// la función callback que puede mostrar los resultados de la llamada a listMovies1
function showMovies(movies) {
   console.log(movies);
}

// llamada a listMovies1 pasando la función callback como parámetro
listMovies1(showMovies);