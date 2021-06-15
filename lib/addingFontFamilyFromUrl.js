"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gettingFontFromurl = exports.addingFontFamilyFromUrl = void 0;
var addingStyleTag_1 = require("./addingStyleTag");
function addingFontFamilyFromUrl(svg, url) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            (_a = exports.gettingFontFromurl(url)) === null || _a === void 0 ? void 0 : _a.then(function (fontRule) {
                var STYLETAG = addingStyleTag_1.AddingStyleTag();
                var DEFTAG = document.createElement('def');
                STYLETAG.innerHTML = fontRule.join('\n');
                DEFTAG.appendChild(STYLETAG);
                svg === null || svg === void 0 ? void 0 : svg.insertBefore(DEFTAG, svg.childNodes[0]);
            }).catch(function (e) {
                console.error(e);
                return false;
            }).then(function () { console.log('loading'); });
            return [2 /*return*/];
        });
    });
}
exports.addingFontFamilyFromUrl = addingFontFamilyFromUrl;
var gettingFontFromurl = function (url) {
    if (url) {
        return fetch(url)
            .then(function (resp) { return resp.text(); })
            .then(function (text) {
            var s = addingStyleTag_1.AddingStyleTag();
            s.innerHTML = text;
            document.head.appendChild(s);
            var styleSheet = s.sheet;
            var FontRule = function (rule) {
                var src = rule.style.getPropertyValue("src") ||
                    rule.style.cssText.match(/url\(.*?\)/g)[0];
                if (!src)
                    return null;
                var url = src.split("url(")[1].split(")")[0];
                return {
                    rule: rule,
                    src: src,
                    url: url.replace(/"/g, ""),
                };
            };
            var fontRules = [], fontProms = [];
            if (styleSheet) {
                var _loop_1 = function (i) {
                    var r = styleSheet.cssRules[i];
                    var fR = FontRule(r);
                    if (!fR) {
                        return "continue";
                    }
                    fontRules.push(fR);
                    fontProms.push(fetch(fR.url)
                        .then(function (resp) { return resp.blob(); })
                        .then(function (blob) {
                        return new Promise(function (resolve) {
                            var f = new FileReader();
                            f.onload = function (e) { return resolve(f.result); };
                            f.readAsDataURL(blob);
                        });
                    })
                        .then(function (dataURL) {
                        if (fR)
                            return fR.rule.cssText.replace(fR.url, dataURL);
                    }));
                };
                for (var i = 0; i < styleSheet.cssRules.length; i++) {
                    _loop_1(i);
                }
            }
            document.head.removeChild(s);
            return Promise.all(fontProms);
        });
    }
    else {
        console.error("not url provided");
    }
};
exports.gettingFontFromurl = gettingFontFromurl;
//# sourceMappingURL=addingFontFamilyFromUrl.js.map