# Export SVG

## [English README](./../README.md)

## [demo](https://josermarinr.github.io/demo-export-svg/)

## [demo repo](https://github.com/josermarinr/demo-export-svg)

## Motivacion

Muchas librerias estan compuestas por otras librerias como html2Canvas o canvg haciendo estas muy dificiles de mantener y muy pesadas. en esta libreria atacamos dos problemas, el peso del script y la performance, sin problemas de navegadores y utilisable en librerias de chart como Rechartsjs y d3js.

## Facil para usar

esta libreria es muy facil de implementar, solo necesitas installar con:

``` bash
npm i svg-in-png
 ```

y luego se usa con de la siguiente manera:

``` ts
svgExport({
  id:"thisChart",
  titleToExport:"example",
  options: {
      fontFamily: {
          url: 'https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap',
          fontFamily: "Sigmar One"
      }
  }
})
```

## Opciones

``` ts
    background?: string;
    size?: { width: number, height: number};
    extraSize?: { width: number, height: number};
    fontFamily?: {url: string, fontFamily: string};
```

background, es el color de fondo del SVG, default blanco.

size: talla modificable de tu svg.

extraSize: in varios casos, la Xaxis de rechartsJs no es renderizada porque forma parte de otro SVG, por esta razon es necesario agregar un poco de altura o largo de tu export, tambien si desea tener mas espacio(padding) en la parte superio o inferior puedes usar esta propiedad.

fontFamily: El primer problema de varios expor SVG son los tipos de letras externos, como google font, los cuales no se renderizan por default para ello solo debes adjuntar el URL del tipo de fuente si lo tienes en local recuerda que deben tener el formato font-face de CSS declarado.