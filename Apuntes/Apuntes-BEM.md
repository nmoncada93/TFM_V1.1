# **BEM**

https://www.youtube.com/watch?v=NucZM0GMRi4

https://www.youtube.com/watch?v=UTz1X-TzLKo&t=536s

https://en.bem.info/ 

Sobre el Reset: https://getbem.com/faq/#global-css-resets



BEM se basa en:

## **BLOQUE:** 
Trozo de la página web que tiene sentido por si mismo, son REUTILIZABLES E INDEPENDIENTES.

`.cabecera-etc`, `button-etc`
- Menú de navegación, una publicación de texto etc 

- Un bloque puede estar formado por varios **ELEMENTOS**

*Ejemplo:*:
HTML: 

`<nav class="menu">` :ESTO SERIA EL BLOQUE
`button class="menu__button>Join</button>"` :ESTO SERIA EL ELEMENTO
`<nav/>`

CSS:
`.menu {  }`
`.menu__button`


## **ELEMENTO:**
Trozo de la página web que NO tiene sentido por si solo y forma parte de un bloque.

- Se usan las clases poniendo el bloque al que pertenecen, dos `_ _` y el nombre del Elemento.

Etiquetas hijas del contendor (.bloque__elemento).

## **MODIFICADOR:** 

Etiquetas hijas diferentes entree ellas (.bloque__elemento--modificador)

## Ejemplo

`<div class="bloque">`
`<div class="bloque__elemento"></div>`
`<div class="bloque__elemento bloque__elemento--modificador"></div>`
`</div>`

`.menu{}`
`.menu__li{}`
`.menu__li--active{}`

## EL CSS