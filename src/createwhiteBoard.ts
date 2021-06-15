export function createwhiteBoard(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    color: string
) {
    context.beginPath();
    context.rect(0, 0, width, height + 50);
    context.fillStyle = color;
    context.fill();
}
