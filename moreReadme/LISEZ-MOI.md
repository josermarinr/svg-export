# Export SVG

## [English README](./../README.md)

## [demo](https://josermarinr.github.io/demo-export-svg/)

## [demo repo](https://github.com/josermarinr/demo-export-svg)

## Motivacion

De nombreuses libraries utilisent html2canvas & canvg pour transformer et exporter SVG.
Cette library fonctionne sans autres dépendances. plus léger et plus performant.

## Facile à utiliser

Cette librairie est très simple à mettre en place, il suffit de l'installer avec :

``` bash
npm i svg-in-png
 ```

puis implémenté avec :

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

# Options

``` ts
    background?: string;
    size?: { width: number, height: number};
    extraSize?: { width: number, height: number};
    fontFamily?: {url: string, fontFamily: string};
```

background, est la couleur de fond du SVG, le blanc par défaut.

size : taille modifiable de votre svg.

extraSize : dans plusieurs cas, l'axe X de rechartsjs n'est pas rendu car il fait partie d'un autre SVG, pour cette raison il est nécessaire d'ajouter un peu de hauteur ou de longueur à votre export, aussi si vous voulez avoir plus d'espace (padding) dans la partie supérieure ou inférieure, vous pouvez utiliser cette propriété.

fontFamily : Le premier problème de plusieurs exportateurs SVG sont les polices externes, comme la police google, qui ne sont pas rendues par défaut, pour cela vous n'avez qu'à joindre l'URL du type de police si vous l'avez localement, rappelez-vous qu'elles doivent avoir le format de police -face de CSS déclaré.