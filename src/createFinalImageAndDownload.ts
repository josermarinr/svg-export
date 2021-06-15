import { download } from "./download";

export function createFinalImageAndDownload(
    DOMURL: any,
    url: string,
    canvas: HTMLCanvasElement,
    titleToExport: string
) {
    DOMURL.revokeObjectURL(url);
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        canvas.toBlob((blob) => {
            navigator.msSaveOrOpenBlob(blob, titleToExport);
        });
    } else {
        let imgURI = canvas.toDataURL("image/png");
        download(imgURI, titleToExport);
    }
}
