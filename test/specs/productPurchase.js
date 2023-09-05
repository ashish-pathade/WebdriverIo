import loginpage from '../pageobjects/login.page'

describe("online shopping application RSA",()=>{
    it("verifying the product purchase on RSA",async()=>{
        // login to the application
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#terms").click()
        await $("#signInBtn").click()
        // validating the url after successfully login
        await $("//a[text()='Home']").waitForExist()
        const homepageURL=await browser.getUrl()
        await expect(browser).toHaveUrlContaining("shop")
        // adding 3 product into the cart
        const mobilesToAdd=['iphone X','Blackberry','Samsung Note 8']
        // scrolling to the iphone(partial text present inside //a tag)
        await $("*=iphone").scrollIntoView()
        // here locating all the mobiles present on web page by usnig findElements (returntype = array)
        // const mobiles = await $$("div[class='card h-100']")
        // // iterating through each 
        // for (let i=0;i<mobiles.length;i++) {
        //  const actualMobile=await mobiles[i].$("div h4 a")    
        //  if(mobilesToAdd.includes(await actualMobile.getText())){
        //     await mobiles[i].$(".card-footer button").click()
        //  }
        // }
        const mobiles = await $$("div[class='card h-100']")
        for (const value of mobiles) {
         const actualMobile=await value.$("div h4 a")    
         if(mobilesToAdd.includes(await actualMobile.getText())){
          await value.$(".card-footer button").click()
         }
        }
        await $("*=Checkout").click() // * is for partial link text foe //a tag only 

        // validating the cart sum 
        const allProductPrice=await $$("//tbody//tr//td[4]/strong")
        const totalPrice=(await Promise.all(await allProductPrice.map(async(eachProduct)=>parseInt((await eachProduct.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0)
        console.log(totalPrice);
        // fetching th cart total amount
        const actualTotalPrice= parseInt((await $("//h3/strong").getText()).split(".")[1].trim())
        // validating the sum of price with cart total
        await expect(actualTotalPrice).toEqual(totalPrice)
        await browser.pause(3000)
    })
})