"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createwhiteBoard = void 0;
function createwhiteBoard(context, width, height, color) {
    context.beginPath();
    context.rect(0, 0, width, height + 50);
    context.fillStyle = color;
    context.fill();
}
exports.createwhiteBoard = createwhiteBoard;
//# sourceMappingURL=createwhiteBoard.js.map