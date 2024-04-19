// REVISAR ESTE LINK!!!! https://medium.com/@steveleung9527/minimal-setup-for-typescript-html5-development-8105f6e9f69d


//https://webpack.js.org/guides/getting-started/
//https://www.youtube.com/watch?v=2UBKjshUwM8
//https://learning.oreilly.com/videos/introduction-to-typescript/10000DIHV201907/10000DIHV201907-piros_u03m01/
//https://learning.oreilly.com/videos/understanding-typescript/9781789951905/9781789951905-video1_3/






// REVISAR LOS IMPORT-EXPORTS

//https://www.typescriptlang.org/docs/handbook/modules.html
//https://www.typescriptlang.org/docs/handbook/module-resolution.html




//INSTALACIÓN GLOBAL:

// npm i -g typescript

// VERSIÓN: tsc -v

// COMPILAR DE `TS`  -->  `JS` 
// tsc first.ts

// COMPILAR DE `TS`  -->  `JS` a una versión mas NUEVA ES6
// tsc --target es6 first.ts

// COMPILAR CICLICAMENTE 1 archivo.ts CON UN WATCHER DE MANERA CONTINUA
// tsc main.ts -w

// COMPILAR CICLICAMENTE TODOS LOS ArchivoS.ts CON UN WATCHER DE MANERA CONTINUA
// tsc *.ts -w O ---  tsc -w

// COMPILAR CICLICAMENTE TODOS LOS ArchivoS.ts CON UN WATCHER DE MANERA CONTINUA EN 1 UNICO DIRECTORIO (ACTUAL)
// tsc -p ./ -w

/*****************
 * tsconfig.json //se puede crear con el comando tsc -init
 *****************/
/*

{
    "compilerOptions": {
        "target": "ES6"
    },
    "files": [],
    "include": [
        "*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}*/

/*****************
 * TypeScript desde NODE
 *****************/
/*

//  node first.js  // ejecuta el archivo




- Paso por Copia: int, double, string, char, bool
  Al pasar un parametro en una función, dependiendo del tipo de datos hace una copia de la variable y usa esta copia en la función.

- Paso por Referencia: 
  En vez de pasar el objeto como tal se le pasa la dirección de memoria a la función.