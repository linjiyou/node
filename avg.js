let sum=require('./sum');
console.log(sum.sum(12,13))
module.exports={
    avg(...arg){
     return sum.sum(...arg)/arg.length;
    }
}