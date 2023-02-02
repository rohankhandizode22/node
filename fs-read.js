const fs= require("fs");
//asynchronous read
fs.readFile('notes.txt', (err,data)=>{
    if (err) console.log(err)
    else{
        console.log("Asynchronous : "+ data.toString())
    }
})
console.log("-----------")

//Synchronous Read
let data= fs.readFileSync('notes.txt');
console.log("Synchronous : " + data.toString())