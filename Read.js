const fs = require('fs')
const path = require('path');
const { question } = require('readline-sync');

// test
class View{
    constructor(txt){
        this.txt = txt
        this.questions = []
    }
    
getTxtfile(){
const file = this.txt
const telegraf = fs.readFileSync(path.join(__dirname, `./topics/${file}`), 'utf-8')
const arr = telegraf.split('\n');
const filtr = arr.filter((el)=> el !== '')
for(let i = 0; i<filtr.length; i+=2) {
this.questions.push({
   q : filtr[i] ,
   a : filtr[i+1]
})
}
return this.questions
}
}
// test
module.exports = View
