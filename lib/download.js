"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
var download = function (href, name) {
    var link = document.createElement("a");
    link.download = name + ".png";
    link.href = href;
    link.click();
    link.remove();
};
exports.download = download;
//# sourceMappingURL=download.js.map