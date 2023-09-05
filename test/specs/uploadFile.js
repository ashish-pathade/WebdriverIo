//const robot = require('robotjs');
describe("file oprations",()=>{

it("file upload test",async()=>{


//     await browser.url("https://the-internet.herokuapp.com/upload")
//     await browser.maximizeWindow()
//    // await $("file-upload").click()
//     const upF=await browser.uploadFile("C:/Users/ASHISH/Pictures/Screenshots/sc project class 1.png")
//  await $("#file-upload").setValue(upF)
//  await $("#file-submit").click()
//  await browser.pause(3000)
 await browser.newWindow("https://www.foundit.in/seeker/registration")
 //await $(".uploadResumeContent").setValue(upF)
 await $("//input[@type='file']").addValue("C:/Users/ASHISH/Desktop/Framework explanation.docx")
//await browser.pause(3000)
 //const btn=await $(".bottom-popup-outer")
 //console.log(await btn.isDisplayed())
 // -------*******************    (wait for element displayed 1st way)   ********************-------------//
//  await browser.waitUntil(async()=>{
//     const btn=await $(".bottom-popup-outer")
//    return await btn.isDisplayed();
//     },{
//     timeout : 4000,
//     timeoutMsg : 'element not found'
//     })
// -------*******************    (wait for element displayed 2nd way)   ********************-------------//
 let pr = new Promise((resolve,reject)=>{
    setTimeout(async() => {
        const btn=await $(".bottom-popup-outer")
           if(await btn.isDisplayed()){
            resolve(await btn.$("[class='bottom-popup-outer slide'] div[class='bottom-popup-btn'] div").click())
           }
           else{
            reject("not displayed")
           }
    }, 4000)}
    )

 await pr.then().catch((err)=>console.log(err))
 await browser.pause(5000)
})

})



