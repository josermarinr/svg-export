# Export SVG

## [demo](https://josermarinr.github.io/demo-export-svg/)
## [demo repo](https://github.com/josermarinr/demo-export-svg)
## motivation

Many libraries utilize html2canvas & canvg to transform and export SVG. 
This library work without other dependencies, and it's more light and more performance.

## easy to use

this library's very easy to implement, you need to install it with

`npm i svg-in-png`

then you can simply use like

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

## options

``` ts
    background?: string;
    size?: { width: number, height: number};
    extraSize?: { width: number, height: number};
    fontFamily?: {url: string, fontFamily: string};
```

background, the color of background SVG, default white.

size: the custom size of SVG.

extraSize: in many cases, the xAxis in rechart does not render because it's another SVG inside for that reason or if you want to have more space on top or buttons place you can add more with these props.

fontFamily: the first problem in export SVG it's the external font, like google font, is not rendered by default for that you need only write the URL of your fonts where the font-face it's declared.