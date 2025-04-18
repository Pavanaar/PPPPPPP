// import data from "../TestData/data.json" assert {type:'json'}
let data=require("../TestData/data.json") 
import {test} from "@playwright/test"
// test("single data",async()=>{
//     console.log(data.usn);
//     console.log(data.url); 
//     console.log(data.pwd);
     
// })
data.forEach((obj ,i)=> {
    test(`multiple obj ${i}`,async()=>{
        console.log(obj.pwd);
        console.log(obj.usn);
        console.log(obj.url);
        
    })
});