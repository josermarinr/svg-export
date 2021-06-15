# Export SVG

## motivation

Many library utilise html2canvas & canvg to transform and export svg,  this library work without other dependencies and its more light and more performance

## easy to use

this library it's very easy to implementing, you need install with

`npm i svg-export`

then you can simple use like

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

background, color of your svg, default white.

size: custom size of you svg.

extraSize: in many case the xAxis in rechart its not render because its other svg inside for that reason and if you want have more space in top or buttons place you cand add more with this props.

fontFamily: the first problem in export svg its the external font like google font are not render by default for that you need only write the url of you fonts where the font-face its declared.