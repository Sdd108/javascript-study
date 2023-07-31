/**
 * main 函数，程序执行入口
 */
function main() {
    tryArray();
}

main();


/**
 * JavaScript 数组
 */
function tryArray() {
    // 出于简洁、可读性和执行速度的考虑，请使用第一种方法（数组文本方法）。
    let cars = ["Saab", "Volvo", "BMW"];

    let cars2 = new Array("Saab", "Volvo", "BMW", "Tesla");

    for (let car of cars) {
        console.log(car);
    }

    for (let i = 0; i < cars2.length; i++) {
        console.log(cars2[i]);
    }
}