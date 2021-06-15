export function cleanBoard(
    context: CanvasRenderingContext2D,
    width: number,
    height: number
) {
    context.clearRect(0, 0, width, height + 30);
}
