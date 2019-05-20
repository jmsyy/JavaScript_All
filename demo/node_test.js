/**
 * 在node中 每个模块就是一个JS文件 且在一个函数中执行
 * 改函数包含了5个实际参数 @exports @require @module @__filename @__dirname
 * 因此在node全局global中无法访问md变量
 */
// console.log(arguments.callee+"");

// console.log(require);
// console.log(module.exports);
// console.log(__filename);
// console.log(__dirname );

//! fs文件系统

const fs = require('fs');

// fs.writeFile('nodeFile.js','let a = "node"',(err,data)=>{
//     console.log(data);
//     console.log(err);
// })

let fileContent = fs.readFile('nodeFile.js',(err,data)=>{
    if (data) {
        console.log(data);
    }
});
console.log(fileContent);

