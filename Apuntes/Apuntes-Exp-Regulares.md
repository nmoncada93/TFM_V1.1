# Expresiones Regulares (Reglas-BEM)

## Qué es: `"^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$"` 


- Los caracteres ^ y $ son el inicio y el final de la cadena respectivamente.
- El punto situado después de ^ significaría cualquier carácter.
  
- El primer [a-z] significa que se debe comenzar por una letra (después del carácter anterior).
  
- Después, podemos observar ([a-z0-9-]+). Significaría que después de la primera letra podríamos encontrar uno o más caracteres de entre los siguientes: letras, números o guiones "-".
  
- El interrogante significa que después de lo anterior puede aparecer o no lo siguiente.
  
- El bloque siguiente sería este: (__([a-z0-9]+-?)+). Lo cual serían dos guiones bajos (también llamados barra baja o subrayados), seguidos de letras y/o números. Estas letras y/o números podrían ir separados por un guion. También podrían acabar en un guion.
  
- El interrogante otra vez significa que puede aparecer o no lo siguiente.
  
- El bloque siguiente es similar al anterior: (--([a-z0-9]+-?)+). Serían dos guiones seguidos de letras y/o números. Como antes, estas letras y/o números podrían ir separados por un guion. También podrían acabar en un guion.
  
- Finalmente, {0,2} significa que esta última expresión podría aparecer entre 0 y 2 veces.
  
- Podríamos añadir el carácter “\” delante del punto y de esa manera garantizaríamos que el primer carácter es un punto.

### Consejos:
En la página de BEM donde se habla de naming (https://getbem.com/naming/), se dan ejemplos de nombres, que como podemos observar cumplirían esta expresión regular:

`.form { }`

`.form--theme-xmas { }`

`.form--simple { }`

`.form__input { }`

`.form__submit { }`

`.form__submit--disabled { }`

Podéis probar esta y otras expresiones regulares en páginas como por ejemplo esta: https://regex101.com/
