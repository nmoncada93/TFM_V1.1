## EXTENSIÓN PARA VisualStudioCode

https://kumardeepak.xyz/blog/stylelint-scss-and-visual-studio-code/ 



# REGLAS .STYLELINTRC
Además de las reglas recomendadas (stylelint-config-recommended-scss) y la regla de@mdo que ordena las declaraciones (stylelint-config-recess-order), vistas en la documentación de la asignatura, he configurado en la clave rules otras reglas de stylelint vistas en la página https://stylelint.io/user-guide/rules/.

`{ ...,
"rules": {
"declaration-block-no-duplicate-properties": true,
"selector-anb-no-unmatchable": true,
"annotation-no-unknown": true,
"no-unknown-animations": true,
"declaration-property-unit-allowed-list": {
"font-size": ["em", "rem", "px", "vw"], "/^animation/": "s",
"line-height": []
},
"length-zero-no-unit": true,
"selector-disallowed-list": ["/^#/"],
"function-name-case": "lower",
"max-nesting-depth": 2,
"alpha-value-notation": "number",
"font-weight-notation": "numeric",
"shorthand-property-no-redundant-values": true
} }`

Son reglas que se indican en las guías de estilo de la documentación como buenas prácticas pero que no están incorporadas en el paquete de reglas recomendadas básicas. Regulan lo siguiente:

– declaration-block-no-duplicate-properties: No permite propiedades duplicadas dentro de bloques de declaración. npm run stylelint me ha detectado que en una regla había una declaración duplicada: display: inline-block y display: flex
– selector-anb-no-unmatchable: No permite selectores An+B incompatibles.
– annotation-no-unknown: No permite fallos de escritura en !important.
– no-unknown-animations: No permite animaciones con nombre desconocido.
– declaration-property-unit-allowed-list: la he configurado de modo que sólo se permitan valores em, rem, px y vw para la declaración font-size y valores por defecto (normal) en line-height.
– length-zero-no-unit: No permite unidades de medida para el valor 0.
– selector-disallowed-list: No permite utilizar “id” (["/^#/"]) como selectores.
– function-name-case: Sólo permite clases escritas en minúsculas.
– max-nesting-depth: La profundidad máxima de anidamiento es de 2 hijos.
– alpha-value-notation: Se limitan los valores alfa a números. Los porcentajes no están permitidos.
– font-weight-notation: Se limitan los valores de las fuentes a numéricos.
– shorthand-property-no-redundant-values: No permite valores redundantes en propiedades abreviadas como margin, border-radius, padding.

Es una configuración estandar que tengo pensado utilizar en otros proyectos, ya que intuyo que cuanto más extensos sean, más utilidad tendrá crean un patrón de escritura unitario.



# Extensión Stylelint para VsCode

Visual Studio Marketplace:  (https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

# Instalación Stylelint

1. `npm install --save-dev stylelint` : es la base

2. `npm install --save-dev stylelint-scss stylelint-config-recommended-scss` : es la configuración para usar una configuración base con .scss (SASS)

3. Crear fichero: `.stylelintrc` con los siguientes datos:

`{
  "extends": ["stylelint-config-recommended-scss"],
  "rules": {}
}`

## Aplicando BEM a Stylelint

4. 
`{
  …
  "rules": {
    …
    "selector-class-pattern": "^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
  }
}`

## Aplicando la guía de estilo @mdo

5. Con esta configuración aseguramos que se cumpla ORDEN DE DECLARACIONES

`npm install --save-dev stylelint-config-recess-order`

6. Actualizar el fichero .stylelintrc
`{
  …
  "extends": [
    …,
    "stylelint-config-recess-order",
  ]
      …
}`

## Añadir Stylelint a la rutina del proyecto (habilitando npm run stylelint)

Con esto podremos ejecutar `npm run stylelint`

7. Modificar `package.json` :

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


## Restringiendo la compilación si no se valida (incorporamos styelint a npm run build)

8. Modificamos el `package.json`

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


Lo que tendremos por defecto sería esto: 
`"npm-run-all clean parcel:build"`


## IGNORAR CODIGO EN STYLELINT (https://stylelint.io/user-guide/ignore-code/)

/* stylelint-disable */

/* stylelint-enable */


https://www.youtube.com/watch?v=EBlXDDzE_8Y

https://www.youtube.com/watch?v=XbMxA70ZA6o

## SMACSS
https://www.youtube.com/watch?v=1HaMCYYzsgg

https://www.youtube.com/watch?v=1HaMCYYzsgg

https://www.youtube.com/watch?v=Lgm631N6Fvg



## CONFIGURACIÓN PECS

{
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order"
  ],
  "rules": {
    "selector-class-pattern": "^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
    "color-named": "never",
    "declaration-empty-line-before": "never",
    "string-no-newline": true,
    "length-zero-no-unit": true,
    "color-hex-length": "short",
    "unit-allowed-list": ["rem", "%", "rgb", "rgba", "hsl", "hsla", "px", "s", "vh", "fr", "em"],
    "color-no-invalid-hex": true,
    "no-irregular-whitespace": true,
    "selector-attribute-quotes": "always"
  }
}