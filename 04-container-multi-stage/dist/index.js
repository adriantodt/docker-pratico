"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
// const rainbow = [chalk.red, chalk.yellow, chalk.green, chalk.blue, chalk.magenta, chalk.cyan, chalk.white];
// with bright colors
var rainbow = [
    chalk.redBright,
    chalk.yellowBright,
    chalk.greenBright,
    chalk.blueBright,
    chalk.magentaBright,
    chalk.cyanBright,
    chalk.whiteBright,
];
// print a rainbow string
function rainbowify(str) {
    return str.split('').map(function (c, i) { return rainbow[i % rainbow.length](c); }).join('');
}
console.log(rainbowify('Hello, World!'));
//# sourceMappingURL=index.js.map