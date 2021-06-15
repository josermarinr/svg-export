export function createImage(
    context: CanvasRenderingContext2D,
    image: HTMLImageElement,
    width: number,
    height: number
) {
    context.drawImage(image, -10, 50, width, height);
}
