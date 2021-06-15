"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addingStyles = void 0;
function addingStyles(clone, original) {
    var containerElements = ["svg", "g"];
    for (var element = 0; element < clone.childNodes.length; element++) {
        var child = clone.childNodes[element];
        if (containerElements.indexOf(child.tagName) !== -1) {
            addingStyles(child, original.childNodes[element]);
            continue;
        }
        var style = original.childNodes[element].currentStyle ||
            window.getComputedStyle(original.childNodes[element]);
        if (style === "undefined" || style === null)
            continue;
        for (var ThisStyle = 0; ThisStyle < style.length; ThisStyle++) {
            child.style.setProperty(style[ThisStyle], style.getPropertyValue(style[ThisStyle]));
        }
    }
}
exports.addingStyles = addingStyles;
//# sourceMappingURL=addingStyles.js.map