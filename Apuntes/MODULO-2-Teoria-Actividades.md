# LA ESTRUCTURA CSS (ARQUITECTURA) Y COMO TRABAJAR CON CSS (METODOLOGIA)

ARQUITECTURA: se centra en la organización de las carpetas (No hay nada "oficial" , son convenciones)

- OOCSS
- ITCSS
- ACSS(Atomic design)
- SMACSS
- BEMIT

METODOLOGIA: reglas para saber como nombrar las clases

## Arquitectura
Se utiliza junto a alguna metodología

### OOCSS + SAASS
- Provien de BEM
- la organización se basa en muchos archivos (styles, _base, _layout, _modules, _other, _shame).
- Otra alternativa a lo anterior es que todo eso sean carpetas
- **Se tiene  que utlizas SASSS

Ventajas: facil de organizar e implemtnar
Desventajas: HTML muy largo y sucio

### ITCSS + SAASS
- Se basa en la organizacion de carpetas (Settings,Tools, generic, Elments, Objects, Components, Utilities)
- Tiene su propia metodologia
-Se basa en las clases
- No hay una nomenclatura oficial

Desventajas: demasidas carpetas... NO RECOMENDADA PARA EMPEZAR

### ACSS
- Se basa en el Atomic Design
- (iones, Atomos, Moleculas, Organismos, Plantillas, Paginas)

### SMACSS
- Se suele usar con FRAMEWORKS
- (Base, Layout, Modules, State, Theme)
- Se usa Kebab case,

Ventajas: Muy documentado
Desventajas: id como selector, uso de etiquetas como selector

# **BEM**

BEM se basa en:

- BLOQUE: etiqueta contenedora (.bloque)
- ELEMENTO: etiquetas hijas del contendor (.bloque__elemento)
- MODIFICADOR: etiquetas hijas diferentes entree ellas (.bloque__elemento--modificador)

## Ejemplo

`<div class="bloque">`
`<div class="bloque__elemento"></div>`
`<div class="bloque__elemento bloque__elemento--modificador"></div>`
`</div>`

`.menu{}`
`.menu__li{}`
`.menu__li--active{}`


////////////////////////////////////////////////////////////////////////

# Stylelint ()

**Stylelint**: es un **LINTER** y esto es una herramienta para resolver malas practicas y avisarnos de errores.

Hay dos tipos de **Linter**:

- Pre-formateadores: *Pretier*, *Stylelint*
- Calidad de codigo:

1- `npm install --save-dev stylelint`

*stylelint-scss --> https://github.com/stylelint-scss/stylelint-scss (Se debe instalar ya que estamos usando SCSS de SASS)

*stylelint-config-recommended-scss --> https://github.com/stylelint-scss/stylelint-config-recommended-scss (Configuración base recomendada)

2- *`npm install --save-dev stylelint-scss stylelint-config-recommended-scss`

3- Hay que crear en la raíz del proyecto un fichero con nombre .stylelintrc.
Con esto realializamos la configuración base.

`{
  "extends": ["stylelint-config-recommended-scss"],
  "rules": {}
}`

4- Se debe personalizar la configuración base para hacer cumplir las reglas de estilo, por ese motivo debemos añadir estas reglas al fichero .stylelintrc, tambien sería valido utilizar algún plugin para VsCode.

**En caso de haber utilizado la Metodologia BEM:**
- Utilizaremos *selector-class-patern* https://stylelint.io/user-guide/rules/selector-class-pattern/

`{
  …
  "rules": {
    …
    "selector-class-pattern": "^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
  }
}`

5- Modificar el `package.json` de **uoc-boilerplate** añadiendo al sección de Scripts la nueva entrada:

`{
   "name": "uoc-boilerplate",
   ...
   "scripts": {
     ...
     "stylelint": "stylelint src/**/*.scss",
     ...
   },
   ...
}`

6- Probar que suscede al ejecutar `npm run stylelint` (los avisos que puedan salir hacen referencia a las discrepancias que pueda haber al leer nuestro css en función de las reglas que debemos aplicar)

7- Incorporar la rutina que se ha creado a la rutina de `build`, esto permitira que el codigo **unicamente se compile para producción si las hojas de estilo cumplen todas las reglas**.

- Añadir la rutina:
  `{
   "name": "uoc-boilerplate",
   ...
   "scripts": {
     ...
     "build": "npm-run-all clean stylelint parcel:build",
     ...
   },
   ...
}`

- `npm-run-all` --> nos servirá para ejecutar todo y compilar en caso de que se valide nuestro estilo en función de la regla.



