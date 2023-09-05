import ExcelUtility from '../utility/ExcelUtility.js'
import excel from 'exceljs'
describe("excel file",()=>{
    xit("read data",async()=>{
        const book= new excel.Workbook()
        await book.xlsx.readFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
        const sheet = book.getWorksheet("Sheet1")
        for (let i = 1; i < 6; i++) {
            let data=sheet.getRow(i).getCell(1).toString()
            let data1=sheet.getRow(i).getCell(2).toString()
            console.log(`${data} ----- ${data1}`);  
        }
        
    })

    xit("write excel data",async()=>{
        const workbook= new excel.Workbook()
        await workbook.xlsx.readFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
        //const sheet= book.addWorksheet("Sheet2")
       // sheet.addRow(1).getCell(1).value="ashish"
       const worksheet = workbook.getWorksheet("Sheet3");
        console.log(worksheet);
        workbook.removeWorksheet(8);
        //book.removeWorksheet("Sheet3")
        await workbook.xlsx.writeFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")

    })
    it("getiing multiple data from excel",async()=>{
       
       console.log(await (ExcelUtility.readMultipleDataFromExcel("VerifyingSignUp")))
    })
})