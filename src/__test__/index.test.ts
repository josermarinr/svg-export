/**
 * @jest-environment jsdom
*/
import { svgExport } from "./../index";


/**
 * @jest-environment jsdom
 */
describe(svgExport, () => {
    beforeAll(() => {
        document.body.innerHTML =
            '<div id="imagesave" style="width: 200px">' +
            '    <svg version="1.0" viewBox="0 0 150.000000 150.000000" preserveAspectRatio="xMidYMid meet" class="img30p icon-main-color">' +
            '    <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">' +
            '    <path d="M873 7880000" stroke="none">' +
            '    <path d="M873 788 l-183 -183 -100 128 212 212 212 212 -24 26 c-13 14 -26 25 -29 25 -3 0 -88 -82 -188 -182z"></path>' +
            "    </g>" +
            "    </svg>" +
            "</div>";

        const createElement = document.createElement.bind(document);

        document.createElement = (tagName: any, options: any) => {
            if (tagName === "canvas") {
                return {
                    getContext: () => ({
                        direction: "ltr",
                        fillStyle: "#000000",
                        filter: "none",
                        font: "10px sans-serif",
                        globalAlpha: 1,
                        globalCompositeOperation: "source-over",
                        imageSmoothingEnabled: true,
                        imageSmoothingQuality: "low",
                        lineCap: "butt",
                        lineDashOffset: 0,
                        lineJoin: "miter",
                        lineWidth: 1,
                        miterLimit: 10,
                        shadowBlur: 0,
                        shadowColor: "rgba(0, 0, 0, 0)",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        strokeStyle: "#000000",
                        textAlign: "start",
                        textBaseline: "alphabetic",
                        clearRect(x: number, y: number, w: number, h: number) {
                            jest.fn();
                        },
                        drawImage(
                            image: HTMLElement,
                            dx: number,
                            dy: number,
                            dWidth: number,
                            dHeight: number
                        ) {
                            jest.fn();
                        },
                        beginPath() {
                            jest.fn();
                        },
                        rect(x: number, y: number, w: number, h: number) {
                            jest.fn();
                        },
                        fill() {
                            jest.fn();
                        },
                    }),
                    measureText: () => ({}),
                };
            }
            return createElement(tagName);
        };

        global.URL.createObjectURL = jest.fn(
            () =>
                '"blob:http://localhost:4000/ea9b4b19-5ded-44ff-bc4a-227abdaabe38"'
        );

        if (!window.SVGElement) {
            // @ts-ignore
            window.SVGElement.prototype = {};
        }
        // @ts-ignore
        window.SVGElement.prototype.getBBox = () => ({
            x: 0,
            y: 0,
            width: 20,
            height: 20,
        });
        window.getComputedStyle = jest.fn((element) =>
            new CSSStyleDeclaration()
        )
        // @ts-ignore
        window.SVGElement.prototype.getComputedTextLength = () => 200;
        global.XMLSerializer = jest.fn();
        // @ts-ignore
        global.XMLSerializer.prototype.serializeToString = jest.fn(
            (SVGElement) => {
                return '"<svg xmlns=\\"http://www.w3.org/2000/svg\\" class=\\"recharts-surface\\" width=\\"27\\" height=\\"200\\" viewBox=\\"0 0 27 200\\" version=\\"1.1\\" style=\\"background: rgb(255, 255, 255);\\"><defs><clipPath id=\\"recharts20-clip\\"><rect x=\\"80\\" y=\\"20\\" height=\\"145\\" width=\\"-83\\"/></clipPath></defs><g class=\\"recharts-layer recharts-cartesian-axis recharts-yAxis yAxis\\"><g class=\\"recharts-cartesian-axis-ticks\\"><g class=\\"recharts-layer recharts-cartesian-axis-tick\\"><g transform=\\"translate(72,165)\\"><text x=\\"0\\" y=\\"0\\" dy=\\"5\\" font-weight=\\"bold\\" text-anchor=\\"end\\" font-size=\\"12\\" fill=\\"#aebecd\\">0€</text></g></g><g class=\\"recharts-layer recharts-cartesian-axis-tick\\"><g transform=\\"translate(72,128.75)\\"><text x=\\"0\\" y=\\"0\\" dy=\\"5\\" font-weight=\\"bold\\" text-anchor=\\"end\\" font-size=\\"12\\" fill=\\"#6e7a8a\\">20€</text></g></g><g class=\\"recharts-layer recharts-cartesian-axis-tick\\"><g transform=\\"translate(72,92.5)\\"><text x=\\"0\\" y=\\"0\\" dy=\\"5\\" font-weight=\\"bold\\" text-anchor=\\"end\\" font-size=\\"12\\" fill=\\"#aebecd\\">40€</text></g></g><g class=\\"recharts-layer recharts-cartesian-axis-tick\\"><g transform=\\"translate(72,56.25)\\"><text x=\\"0\\" y=\\"0\\" dy=\\"5\\" font-weight=\\"bold\\" text-anchor=\\"end\\" font-size=\\"12\\" fill=\\"#6e7a8a\\">60€</text></g></g><g class=\\"recharts-layer recharts-cartesian-axis-tick\\"><g transform=\\"translate(72,20)\\"><text x=\\"0\\" y=\\"0\\" dy=\\"5\\" font-weight=\\"bold\\" text-anchor=\\"end\\" font-size=\\"12\\" fill=\\"#aebecd\\">80€</text></g></g></g></g><g class=\\"recharts-layer recharts-reference-line\\"><line y=\\"0\\" stroke=\\"#D5DDE5\\" stroke-width=\\"2\\" fill=\\"none\\" fill-opacity=\\"1\\" x1=\\"80\\" y1=\\"165\\" x2=\\"-3\\" y2=\\"165\\" class=\\"recharts-reference-line-line\\"/></g><g class=\\"recharts-layer recharts-line\\"><path stroke=\\"#2F06FC\\" stroke-width=\\"2\\" fill=\\"none\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-curve recharts-line-curve\\" d=\\"M80,146.69375000000002C79.20952380952382,134.33854166666666,78.41904761904762,121.9833333333333,77.62857142857143,109.71875C76.83809523809524,97.45416666666662,76.04761904761905,85.28020833333336,75.25714285714285,73.10624999999999C74.46666666666667,60.93229166666669,73.67619047619047,36.675,72.88571428571429,36.675C72.0952380952381,36.675,71.3047619047619,165,70.51428571428572,165C69.72380952380952,165,68.93333333333334,165,68.14285714285714,165C67.35238095238095,165,66.56190476190476,165,65.77142857142857,165C64.98095238095239,165,64.19047619047619,165,63.400000000000006,165C62.609523809523814,165,61.819047619047616,165,61.028571428571425,165C60.238095238095234,165,59.44761904761905,165,58.65714285714286,165C57.86666666666667,165,57.076190476190476,165,56.285714285714285,165C55.49523809523809,165,54.7047619047619,165,53.91428571428571,165C53.12380952380952,165,52.333333333333336,165,51.542857142857144,165C50.75238095238095,165,49.96190476190476,165,49.17142857142857,165C48.38095238095238,165,47.59047619047619,165,46.8,165C46.009523809523806,165,45.21904761904762,165,44.42857142857143,165C43.63809523809524,165,42.84761904761905,165,42.05714285714286,165C41.266666666666666,165,40.476190476190474,165,39.68571428571428,165C38.89523809523809,165,38.10476190476191,165,37.31428571428572,165C36.523809523809526,165,35.733333333333334,165,34.94285714285714,165C34.15238095238095,165,33.36190476190476,165,32.57142857142857,165C31.78095238095238,165,30.99047619047619,165,30.200000000000003,165C29.40952380952381,165,28.61904761904762,165,27.82857142857143,165C27.038095238095238,165,26.247619047619047,165,25.457142857142856,165C24.666666666666664,165,23.876190476190477,165,23.085714285714285,165C22.295238095238094,165,21.504761904761907,165,20.714285714285715,165C19.923809523809524,165,19.133333333333333,165,18.34285714285714,165C17.55238095238095,165,16.761904761904763,165,15.971428571428572,165C15.180952380952382,165,14.39047619047619,165,13.600000000000001,165C12.80952380952381,165,12.019047619047619,165,11.228571428571428,165C10.438095238095238,165,9.647619047619047,165,8.857142857142858,165C8.066666666666666,165,7.276190476190476,165,6.485714285714286,165C5.695238095238095,165,4.904761904761904,165,4.114285714285714,165C3.3238095238095235,165,2.533333333333333,165,1.7428571428571429,165C0.9523809523809526,165,0.16190476190476222,165,-0.6285714285714281,165C-1.419047619047619,165,-2.2095238095238092,165,-3,165\\"/><g class=\\"recharts-layer recharts-line-dots\\"><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"80\\" cy=\\"146.69375000000002\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"77.62857142857143\\" cy=\\"109.71875\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"75.25714285714285\\" cy=\\"73.10624999999999\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"72.88571428571429\\" cy=\\"36.675\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"70.51428571428572\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"68.14285714285714\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"65.77142857142857\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"63.400000000000006\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"61.028571428571425\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"58.65714285714286\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"56.285714285714285\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"53.91428571428571\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"51.542857142857144\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"49.17142857142857\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"46.8\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"44.42857142857143\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"42.05714285714286\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"39.68571428571428\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"37.31428571428572\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"34.94285714285714\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"32.57142857142857\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"30.200000000000003\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"27.82857142857143\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"25.457142857142856\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"23.085714285714285\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"20.714285714285715\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"18.34285714285714\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"15.971428571428572\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"13.600000000000001\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"11.228571428571428\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"8.857142857142858\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"6.485714285714286\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"4.114285714285714\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"1.7428571428571429\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"-0.6285714285714286\\" cy=\\"165\\"/><circle r=\\"3\\" stroke=\\"#2F06FC\\" stroke-width=\\"1\\" fill=\\"#fff\\" width=\\"-83\\" height=\\"145\\" class=\\"recharts-dot recharts-line-dot\\" cx=\\"-3\\" cy=\\"165\\"/></g></g></svg>"';
            }
        );
        let onloadRef: Function | undefined;
        Object.defineProperty(Image.prototype, "onload", {
            get() {
                return this._onload;
            },
            set(onload: Function) {
                onloadRef = onload;
                this._onload = onload;
            },
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
        // @ts-ignore
        delete window.SVGElement.prototype.getBBox;
    });

    it("should have a id in DOM", function () {
        const idContain = document.querySelector("#imagesave");

        expect(idContain?.nodeName).toContain("DIV");
    });

    it.skip("should return a blobURL", async function() {
        expect.assertions(1);
        await expect(svgExport({
            id: "imagesave",
            titleToExport: "imageTest",
        })).resolves.toBe('"blob:http://localhost:4000/ea9b4b19-5ded-44ff-bc4a-227abdaabe38"')


    });
});
