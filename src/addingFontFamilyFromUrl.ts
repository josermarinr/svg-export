import { AddingStyleTag } from "./addingStyleTag";

export async function addingFontFamilyFromUrl(
    svg: HTMLElement | SVGSVGElement,
    url: string | undefined,
   ) {

    gettingFontFromurl(url)?.then( fontRule => {
        let STYLETAG = AddingStyleTag()
        let DEFTAG = document.createElement('def')
        STYLETAG.innerHTML = fontRule.join('\n')
        DEFTAG.appendChild(STYLETAG)
        svg?.insertBefore(DEFTAG, svg.childNodes[0])

    }).catch((e) => {
        console.error(e)
        return false
    }).then(()=>{console.log('loading')})
}

export const gettingFontFromurl = (url: string | undefined) =>{
    if (url) {
        return fetch(url)
            .then((resp) => resp.text())
            .then((text) => {
                let s = AddingStyleTag();
                s.innerHTML = text;
                document.head.appendChild(s);
                let styleSheet = s.sheet;

                let FontRule = (rule: any) => {
                    let src =
                        rule.style.getPropertyValue("src") ||
                        rule.style.cssText.match(/url\(.*?\)/g)[0];
                    if (!src) return null;
                    let url = src.split("url(")[1].split(")")[0];
                    return {
                        rule: rule,
                        src: src,
                        url: url.replace(/"/g, ""),
                    };
                };

                let fontRules = [],
                    fontProms = [];

                if (styleSheet)
                    for (let i = 0; i < styleSheet.cssRules.length; i++) {
                        let r = styleSheet.cssRules[i];
                        let fR = FontRule(r);
                        if (!fR) {
                            continue;
                        }
                        fontRules.push(fR);
                        fontProms.push(
                            fetch(fR.url)
                                .then((resp) => resp.blob())
                                .then((blob) => {
                                    return new Promise((resolve) => {
                                        let f = new FileReader();
                                        f.onload = (e) => resolve(f.result);
                                        f.readAsDataURL(blob);
                                    });
                                })
                                .then((dataURL) => {
                                    if (fR)
                                        return fR.rule.cssText.replace(
                                            fR.url,
                                            dataURL
                                        );
                                })
                        );
                    }
                document.head.removeChild(s);
                return Promise.all(fontProms);
            });
    } else {
        console.error("not url provided");
    }
}
