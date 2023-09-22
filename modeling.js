const prompt = require('prompt');
const colors = require('@colors/colors/safe');
const fs = require('fs');
const View = require('./Read.js');

const programmer = new View('enoti.txt');
const ff = new View('./foxes.txt');
const kk = new View('./wolfs.txt');

prompt.message = colors.italic('||||Вопросики!||||');

class ViewInConsole {
constructor() {
this.cash = 0;
this.i = 0;
this.data = programmer.getTxtfile();
this.asd = ff.getTxtfile()
this.qwe = kk.getTxtfile()
}

async getFromConsole() {
prompt.start();

const table = {
properties: {
theme: {
description: colors.green(
`\nВыбери тему:
1.  ${'Енотики'}
2.  ${'Лисики'}
3.  ${'ВолСhata'}
4.  Завершить игру
`,
),
},
},
};

const result = await prompt.get(table);

switch (result.theme) {
case '1':
this.getThem1(this.data);
break;
case '2':
    this.getThem1(this.asd);
break;
case '3':
    this.getThem1(this.qwe)
break;
default:
console.log('что?');
await this.getFromConsole();
}
return '';
}

async getThem1(arr, i) {
if (this.i >= arr.length) {
console.log("\x1b[33m%s\x1b[0m",'bye bye! 👋');
console.log(`
Вы winner
`);
return 'what';
}

const da = {
properties: {
q1: {
description: colors.cyan(`${arr[this.i].q}\n`),
},
},
};

const result = await prompt.get(da);

if (result.q1 === arr[this.i].a) {
console.log('\n🧠genius🧠\n');
this.cash += 1;
console.log(`Вы набрали ${this.cash} / ${arr.length}\n`);
this.i += 1;
await this.getThem1(arr, this.i);
} else {
console.log("\x1b[33m%s\x1b[0m",'\nERROR!!404!!\n');
await this.getThem1(arr, this.i);
}
}
}

const add = new ViewInConsole();
console.log(`
Добро пожаловать в HellGame !
`);
setTimeout(async () => {
await add.getFromConsole();
}, 2000);