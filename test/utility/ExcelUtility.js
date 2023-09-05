import excel from 'exceljs'

class ExcelUtility
{
    async readMultipleDataFromExcel (sheetName){
    const book = new excel.Workbook()
    await book.xlsx.readFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
    const sheet =book.getWorksheet(sheetName)
    const lastRowNum=sheet.rowCount
    let arr=[]
    
    let j=0
    for (let i = 2; i <=lastRowNum; i++) {
        let arrinner=[]
        let lastCell=sheet.getRow(i).cellCount
        for(let k=1;k<=lastCell;k++){
        //console.log(lastCell);
        let data=sheet.getRow(i).getCell(k).toString()
        arrinner.push(data)
        //console.log(arrinner);
        }
        arr=arr.concat(arrinner)
    }
    console.log("data-------***************");
    return arr;
    }
    async writeDataToExcel(sheetName,data){
    const book = new excel.Workbook()
    await book.xlsx.readFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
    const sheet= book.addWorksheet(sheetName)
    sheet.addRow(1).getCell(1).value=data
    await book.xlsx.writeFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
    }

    async readDataFromExcel(sheetName){
    const book = new excel.Workbook()
    await book.xlsx.readFile("C:/Users/ASHISH/Desktop/tyJavascript/webdriverIo/demoCommon.xlsx")
    const sheet = book.getWorksheet(sheetName)   
     return sheet.getRow(rowNum).getCell(celNum).toString()      
    }
}

export default new ExcelUtility()