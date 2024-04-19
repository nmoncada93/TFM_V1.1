## VisualStudio Code

`ctrl+p` Esto permite abrir la barra de busqueda de ejecutables
- Introducir ahora `>`

`ctrl+b` Esto permite ocultar la barra lateral izquierda

`ctrl+a` Selecciona todo el codigo del archivo

`alt+caps+f` Formatear el codigo

### Bracket Pair Colorizer
    `{
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs":"active"
    }`

## **En HTML: Emmet**

Escribir `!` + `Enter` : Esto nos creará una base de arcchivo HTML



## Node.js

## APIS

https://rapidapi.com/cedricnoguera/api/open-weather-map27/ 

https://pokeapi.co/ 

## Parcel Bundler

https://lenguajejs.com/automatizadores/parcel/guia-tutorial-inicial-de-parcel/ 

### Solución problemas 

MODIFICAR: package.json

1. 
   "description": "Boilerplate for Advanced HTML/CSS Tools UOC students",
    AÑADIR:  `"source":"src/index.html",`

   
2. 
   Quitar la línea src/index.html de la línea "parcel:serve": "parcel src/index.html -p 8123 --target web --open", 
   Quitar src/index.html de la línea "parcel:build": "parcel build src/index.html --target web --no-source-maps --no-cache",

