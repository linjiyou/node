let fs=require('fs');
// fs.mkdir('./es6/less',err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('ok')
// });
// console.log(1)
//   let result=fs.readdirSync('./')
fs.readdir('./',(err,result)=>{
    if(err){
        console,log(err);
        return;
    }
    console.log(result);
})