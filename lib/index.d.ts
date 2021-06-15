import { options } from "./interfaces";
export declare function svgExport({ id, titleToExport, options, }: {
    id: string;
    titleToExport: string;
    options?: options;
}): Promise<void>;
export declare function renderSVG(svg: SVGSVGElement, context: CanvasRenderingContext2D | null, options: options | undefined, canvas: HTMLCanvasElement, titleToExport: string): any;
//# sourceMappingURL=index.d.ts.map