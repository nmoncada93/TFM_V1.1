## NPM LIBRERIAS

### Librerias

#### Animate on Scroll (AoS)
    https://michalsnik.github.io/aos/, fàcil d'instal.lar i que afegint els corresponents atributs als elements html es poden crear efectes zoom i fade molt interessants. Important inicialitzar la llibreria amb AOS.init(); en el arxiu Js principal.

#### SplideJS
    (https://splidejs.com/). Esta librería nos permite crear carruseles de imágenes, videos o cualquier otro contenido que queramos, ofreciéndo multitud de opciones combinables para ajustar todo a nuestras necesidades. Incluye varios temas de estilos, aunque los más curiosos pueden personalizarlos también. 

#### GliderJS

#### Fancybox
    (https://fancyapps.com/fancybox/), que es muy sencilla de montar. Lo que hace es que te deja mostrar una serie de imágenes y si le das click a alguna, entras en un carrussel full-size y te deja hacer zoom. Está muy adaptado a todas las pantallas y se puede personalizar mucho, aunque eso es más complejo.

#### Cookies LGPD
    Esta librería se encarga del consentimiento de las cookies de obligada inclusión en toda web por Ley General de Protección de Datos (LGPD).

    Aparecerán en la web mientras que no se pulse aceptar, una vez pulsado no volverá a aparecer.

    https://www.npmjs.com/package/cookieconsent

#### Responsive NAV

#### PostHTML Expressions
    Enlace: https://github.com/posthtml/posthtml-expressions

    Esta ha sido sin duda la dependencia a la que más partido le he sacado ya que me ha permitido utilizar arrays, bucles y variables en parciales de HTML. Lo que me ha facilitado el trabajo enormemente.

    Para instalarlo se ha ejecutado en la consola npm i -D posthtml-expressions y su configuración se ha realizado en el archivo de raíz .posthtmlrc de este modo:

    `{ ...,
    "posthtml-expressions": { "locals": {
    "active": "OK" }
    } 
    }`

#### Isotope
    Enlace: https://isotope.metafizzy.co/

    Isotope es una dependencia que integra filtros y clasificación de contenido. Simplifica considerablemente nuestro código HTML y aporta una gran variedad de plantillas grid y soluciones de JavaScript con una configuración relativamente sencilla.

    Para instalarla se ejecuta npm i -D isotope en la consola y se inicializa con import Isotope from 'isotope-layout'; en el archivo main.js. Para personalizar la plantilla, hay muchos ejemplos y posibilidades que se explican en la web. Yo he elegido una plantilla masonry con una clasificación random y el código que he tenido que configurar ha quedado así:

#### Fsilightbox
    Enlace: https://fslightbox.com/

    Como complemento de la plantilla grid masonry he instalado y empleado una galería lightbox para poder visualizar también las imágenes a tamaño completo.
    Para añadir esta dependencia al proyecto se ejecuta npm i -D fslightbox y se inicializa mediante import fslightbox from 'fslightbox'; . El marcado HTML y los atributos que cargan la imagen no tiene mayor complicación.

#### sp-supermarquee

    Enlace: https://superplug.in/supermarquee

    Le he querido dar un poco de dinamismo al sitio dando movimiento a un texto concreto y al usar la etiqueta marquee de HTML he comprobado que estaba obsoleta y he encontrado un montón de librerías que imitan ese comportamiento. Yo he optado por esta.

    Para la instalación de esta dependencia se ejecuta npm i -D sp- supermarquee y se inicializa con import SuperMarquee from 'sp-supermarquee';.
    La configuración depende del la dirección, velocidad, contenido y otras customizaciones que se quieran hacer. En mi proyecto lo he personalizado de este modo: