describe('user module',()=>{
    xit('updating the shipping and billing address',async()=>{

     await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/index.php")
     await  browser.maximizeWindow()
     await browser.$('=Login').click()
     await browser.$('#exampleInputEmail1').setValue('anuj.lpu1@gmail.com')
    //await browser.pause(5000);
     await browser.$('#exampleInputPassword1').setValue('Test@123')
     await browser.pause(1000)
     await browser.$("//button[.='Login']").click()
     await browser.$("=My Account").click()
     await browser.$("=Shipping / Billing Address").click()
     await browser.$("textarea[name='billingaddress']").setValue("whitefield")
   // await browser.pause(1000);
     await browser.$("input[name='bilingstate']").setValue("karnataka")
    //await browser.pause(1000);
     await browser.$("input[name='billingcity']").setValue("banglore")
    //await browser.pause(1000);
     await browser.$("input[name='billingpincode']").setValue("123456")
     await browser.$("//label[text()='Billing Address']/../../button").click()
     const billingAdress=await browser.getAlertText()
     await browser.acceptAlert()
     const panel=await browser.$$("//div[@id='accordion']/div")
     await panel[1].click()
    /*------------------shipping address------------------------*/
     await browser.$("textarea[name='shippingaddress']").setValue("whitefield")
    // await browser.pause(1000);
     await browser.$("input[name='shippingstate']").setValue("karnataka")
     //await browser.pause(1000);
     await browser.$("input[name='shippingcity']").setValue("banglore")
     //await browser.pause(1000);
     await browser.$("input[name='shippingpincode']").setValue("123456")
     //await panel[1].$("/button").click() // need to check
     await browser.$("//div[@id='accordion']/div[2]//button").click()
     const shippingAdress=await browser.getAlertText()
     await browser.pause(3000)
     await browser.acceptAlert()
     await browser.pause(5000)
     console.log(billingAdress+"----------"+shippingAdress);
     await expect(billingAdress).toEqual("Billing Address has been updated")
     await expect(shippingAdress).toEqual("Shipping Address has been updated")
    })
    it.only("verifying user is able to add the product in wishlist",async()=>{
     
     await browser.url("http://rmgtestingserver/domain/Online_Shopping_Application/index.php")
     await  browser.maximizeWindow()
     await browser.$('=Login').click()
     await browser.$('#exampleInputEmail1').setValue('anuj.lpu1@gmail.com')
    //await browser.pause(5000);
     await browser.$('#exampleInputPassword1').setValue('Test@123')
     //await browser.pause(1000)
     await browser.$("//button[.='Login']").click()
     let productName="hp3"
     await browser.$(".search-field").setValue(productName)
     await browser.$(".search-button").click()
     //await browser.pause(5000);
     await browser.$("//h3[.='shop by']").scrollIntoView({ behavior: 'smooth', block: 'center' })
     await browser.pause(5000);
    //  await browser.$("//a[@class='add-to-cart']/i").click() 
    //  //await browser.pause(5000);
    //  await browser.scroll(0,100)
    //  let wishlistProducts = browser.$$("//tbody//div[@class='product-name']/a")
    //  for (const key in wishlistProducts) {
    //  await expect(key.getText()).toEqual(productName)
    //  }
     //await browser.pause(5000);
    })

    
})
