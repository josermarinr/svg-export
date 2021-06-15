"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFinalImageAndDownload = void 0;
var download_1 = require("./download");
function createFinalImageAndDownload(DOMURL, url, canvas, titleToExport) {
    DOMURL.revokeObjectURL(url);
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        canvas.toBlob(function (blob) {
            navigator.msSaveOrOpenBlob(blob, titleToExport);
        });
    }
    else {
        var imgURI = canvas.toDataURL("image/png");
        download_1.download(imgURI, titleToExport);
    }
}
exports.createFinalImageAndDownload = createFinalImageAndDownload;
//# sourceMappingURL=createFinalImageAndDownload.js.map