# Guía @mdo Mark Otto http://codeguide.co/

# REGLAS SEGUN @MDO https://codeguide.co/ 

# HTML-------------------------------------------------
## SINTAXIS HTLM

- no usar mayusculas en las etiquetas
- elementos anidados sangrado una vez (2 espacios)
- comillas doble en los atributos
- no incluir barra inclinada final en elementos de cierre automaticos
- no omitir las etiquetas de cierre opcionales

## ATRIBUTO DE IDIOMA

- especificar el atributo de idioma

## MODO DE COMPATIBILIDAD

- no es necesario incluir la <meta> etiqueta de compatibilidad de documentos de IE

## CODIFICACIÓN DE CARACTER

- garantizar la representacion adecuada del contenido declarando una codificacion de caracteres explicita: codificacion de caracter UTF-8

## CSS Y JAVASCRIPT INCLUYEN
- no es necesario especificar type cuando se incluyen archivos CSS y JavaScript

## ORDEN DE ATRIBUTOS

- seguir este orden
- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- role, aria-*
- tabeindex
- style

## PREFERENCIA DEL EDITOR
- configurar su editor para evitar inconsistencias de codigo comunes: editorconfig
- utilizar tabulaciones programables configuradas en dos espacios
- recorte el espacio en blanco final al guardar
- codificacion UTF-8
- agregar nueva linea al final de los archivos

# CSS------------------------------------------------------

## SINTAXIS CSS
- selectores individuales en una sola linea al agrupar selectores
- espacio antes de la llave de apertura de los bloques de declaracion
- llaves de cierre de bloques de declaracion en una nueva linea
- espacio despues de :
- cada declaracion en su propia linea
- terminar declaraciones con ;
- espacio entre los valores de propiedad separados por comas
- no poner un 0 antes valores con un cero inicial
- poner en minusculas todos los valores hexadecimales
- usar valores hexadecimales abreviados 
- no poner unidades para valores 0

## ORDEN DE DECLARACION
- recess order
- posicionamiento
- modelo de caja
- tipografia
- visual
- varios

## PROPIEDADES LÓGICAS

## EVITAR @IMPORTS
- Usar varios `<link>` 
- compilar CSS con Sass o Less en un solo archivo

## CONSULTA DE MEDIOS
- colocarlos lo mas cerca posible de sus conjuntos de reglas relevantes

## DECLARACIONES INDIVIDUALES
- en conjuntos de reglas de una sola declaracion, eliminamos los saltos de linea

## LIMITAR USO DE NOTACIONES ABREVIADAS

## EVITAR ANIDAMIENTO INNECESARIO

## COMENTARIOS
- bien comentado
- usar // con preprocesadores
- eliminar los comentarios al enviar el CSS a produccion

## NOMBRES DE CLASES
- mantener las clases en minusculas y guiones normales
- evitar anotacion abreviada
- nombres significativos
