const { table } = require('console');
const View = require('./Read.js')
const fs = require('fs')
const prompt = require('prompt')
const colors = require('@colors/colors/safe');

const gg = new View('./enoti.txt');
const asd = new View('./foxes.txt')
const arvvv = new View('./wolfs.txt')


class ViewInConsole {
    constructor() {
      this.dataProg = gg.getTxtfile();
      this.abc = asd.getTxtfile();
      this.qwe = arvvv.getTxtfile();
    }


async getFrConsloe() {
    prompt.start();

    const table = {
      properties: {
        theme: {
          description: colors.blue(
            `\nВыбери тему:
          1.  ${'Еноты'}
          2.  ${'Лисы'}
          3.  ${'Волки'}
          4.  Завершить игру
          `,
          ),
        },
      },
    };

    const result = await prompt.get(table);

    switch (result.theme) {
      case '1':
        this.dataProg;
        break;
        case '2':
            this.abc;
            break;
            case '3':
                this.qwe;
                break;   
      default:
        console.log('❌❌❌ Темы под таким номером нет! ❌❌❌');
        await this.getFrConsloe();
    }
    return '';
  }
}


const ll = new ViewInConsole
console.log(ll)


