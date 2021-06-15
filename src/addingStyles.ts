export function addingStyles(clone: any, original: SVGSVGElement | any) {
    let containerElements = ["svg", "g"];

    for (let element = 0; element < clone.childNodes.length; element++) {
        let child = clone.childNodes[element];
        if (containerElements.indexOf(child.tagName) !== -1) {
            addingStyles(child, original.childNodes[element]);
            continue;
        }
        let style =
            original.childNodes[element].currentStyle ||
            window.getComputedStyle(original.childNodes[element]);

        if (style === "undefined" || style === null) continue;

        for (let ThisStyle = 0; ThisStyle < style.length; ThisStyle++) {
            child.style.setProperty(
                style[ThisStyle],
                style.getPropertyValue(style[ThisStyle])
            );
        }
    }

}
