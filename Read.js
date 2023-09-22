const fs = require('fs')
const path = require('path');
const { question } = require('readline-sync');


class View{
    constructor(txt){
        this.txt = txt
        this.questions = []
    }


//getTxtfile(){
//const file = this.txt
//const telegraf = fs.readFileSync(path.join(__dirname, `./topics/${file}`), 'utf-8')
//const arr = telegraf.split('\n');
//const filtr = arr.filter((el)=> el !== '')
//for(let i = 0; i<filtr.length; i+=2) {
//this.questions.push({
//    q : filtr[i] ,
//    a : filtr[i+1]
//})
//return this.questions
//}
//}
//}
//
//module.exports = View




 function getTxtfile(){
     const question = []
     // const file = this.txt
     const telegraf = fs.readFileSync(path.join(__dirname, './topics/nighthawk_flashcard_data.txt'), 'utf-8')
     const arr = telegraf.split('\n');
     const filtr = arr.filter((el)=> el !== '')
     for(let i = 0; i<filtr.length; i+=2) {
     question.push({
         q : filtr[i] ,
         a : filtr[i+1]
     })
     return question
     }
       console.log(getTxtfile())
    }
}