import * as chalk from 'chalk';

const rainbow = [
  chalk.redBright, chalk.yellowBright, chalk.greenBright, chalk.blueBright,
  chalk.magentaBright, chalk.cyanBright, chalk.whiteBright,
];

function rainbowify(str: string) {
  return str.split('').map((c, i) => rainbow[i % rainbow.length](c)).join('');
}

console.log(rainbowify('Hello, World!'));
