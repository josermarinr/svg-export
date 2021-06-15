import { cleanBoard } from "./cleanBoard";
import { createFinalImageAndDownload } from "./createFinalImageAndDownload";
import { createImage } from "./createImage";
import { options } from "./interfaces";
import { createwhiteBoard } from "./createwhiteBoard";
import { addingStyles } from "./addingStyles";
import { addingFontFamilyFromUrl } from "./addingFontFamilyFromUrl";

export async function svgExport({
    id,
    titleToExport,
    options,
}: {
    id: string;
    titleToExport: string;
    options?: options;
}) {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    const elementContainer = document.querySelector(`#${id}`);
    let svg = elementContainer?.querySelector("svg");

    if( options?.fontFamily?.url){
        addingFontFamilyFromUrl(
            svg!,
            options.fontFamily.url
        ).then(() =>
            setTimeout(() => {
                console.log("done");
                renderSVG(svg!, context, options, canvas, titleToExport);
            }, 500)
        );
    }else{
        renderSVG(svg!, context, options, canvas, titleToExport);
    }
}

export function renderSVG(
    svg: SVGSVGElement,
    context: CanvasRenderingContext2D | null,
    options: options | undefined,
    canvas: HTMLCanvasElement,
    titleToExport: string
): any {
    if (context) {
        svg.style.background = options?.background || "white";

        let copy = svg.cloneNode(true) as HTMLElement;

        let width: number, height: number;

        if (options?.size) {
            width = options.size.width;
            height = options.size.height;
        } else if (options?.extraSize?.width) {
            width = svg.getBBox().width + options.extraSize.width;
            height = svg.getBBox().height + options.extraSize.height;
        } else {
            width = svg.getBBox().width;
            height = svg.getBBox().height;
        }

        addingStyles(copy, svg);

        let data = new XMLSerializer().serializeToString(copy);

        let DOMURL = window.URL || window.webkitURL || window;
        let image = new Image();

        let svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
        let url = DOMURL.createObjectURL(svgBlob);

        image.src = url;

        canvas.width = width;
        canvas.height = height + 50;

        cleanBoard(context, width, height);
        let BgColor = options?.background || "white";
        createwhiteBoard(context, width, height, BgColor);

        createImage(context, image, width, height);

        image.onload = function () {
            if (context) {
                URL.revokeObjectURL(url);

                createImage(context, image, width, height);

                createFinalImageAndDownload(DOMURL, url, canvas, titleToExport);
            }
        };
    }
}
