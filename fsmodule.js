const fs = require('fs');

//fs.readFile('file.txt', 'utf8' ,(err, data)=>{
//    console.log(err, data)
//})

// const a = fs.readFileSync('file.txt')  //fs.read
 //   console.log(a.toString())

// fs.writeFile('file2.txt' , "this is a data " , ()=>{  // fs.write
 //   console.log("written to the file ")
//  });
b = fs.writeFileSync('file2.txt', "This is data2")
console.log(b)



console.log("Finished reading file")