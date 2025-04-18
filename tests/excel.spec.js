import excel from "exceljs"
import {test} from "@playwright/test"
// test("read data",async({page})=>{
//    let book=new excel.Workbook()
//   await book.xlsx.readFile('./TestData/ddt.xlsx.xlsx')
//   let sheet=book.getWorksheet("Sheet1")
//   let data=sheet.getRow(1).getCell(1).toString()
//   console.log(data);
// })
// test("write data",async()=>{
//     let book2= new excel.Workbook()
//     await book2.xlsx.readFile('./TestData/ddt.xlsx.xlsx')
//    let sheett= book2.getWorksheet('Sheet2')
//     sheett.getRow(1).getCell(2).value="sdfghj"
//     await book2.xlsx.writeFile("./TestData/ddt.xlsx.xlsx")
// })
test.only("read multiple data",async({page})=>{
    const book=new excel.Workbook()
    await book.xlsx.readFile('./TestData/aa.xlsx')
    const sheet=book.getWorksheet('Sheet1')
    for (let i = 1; i <= sheet.rowCount; i++) {
        for (let j = 1; j <=sheet.columnCount; j++) {
           let data=sheet.getRow(i).getCell(j).toString()
           console.log(`${data}`);
               
        }
        
    }
})