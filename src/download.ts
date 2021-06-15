export const download = (href: string, name: string) => {
    let link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = href;
    link.click();
    link.remove();
};
