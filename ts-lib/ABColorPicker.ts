
export default class ABColorPicker {
    constructor(elem: HTMLInputElement) {
        Coloris({
            onChange: (color, elem) => {
                console.log(`The new color is ${color}`);
            }
        });
    }
}