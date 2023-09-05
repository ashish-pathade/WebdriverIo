import loginpage from '../pageobjects/login.page.js'
import homepage from '../pageobjects/home.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import {expect as expectchai} from 'chai'

describe("online shopping application RSA",()=>{
    it("verifying the product purchase on RSA",async()=>{
        // login to the application
        await loginpage.open()
        await browser.maximizeWindow()
        await loginpage.login("rahulshettyacademy","learning")
        // validating the url after successfully login
        await homepage.homeLink.waitForExist()
        // const url =await browser.getUrl()
        // console.log(url);
        expectchai( await browser.getUrl()).to.include("shop")
        // adding 3 product into the cart
        const mobilesToAdd=['iphone X','Blackberry','Samsung Note 8']
        expectchai()
        // scrolling to the iphone(partial text present inside //a tag)
        await homepage.iphoneLink.scrollIntoView()
        const mobiles =await homepage.allmobiles
        let cart=await homepage.cartButton
        let mobile=await homepage.eachMobile
         // iterating through each 
        for (let i=0;i<mobiles.length;i++) { 
         if(mobilesToAdd.includes(await (mobile[i].getText()))){
            await (cart[i].click())
         }
        }
        await homepage.clickOnCheckout()

        // validating the cart sum 
        const allProductPrice=await checkoutPage.allproductPrices
        const totalPrice=(await Promise.all(allProductPrice.map(async(eachProduct)=>parseInt((await eachProduct.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0)
        console.log(totalPrice);
        // fetching th cart total amount
        const actualTotalPrice= parseInt((await $("//h3/strong").getText()).split(".")[1].trim())
        // validating the sum of price with cart total
         expectchai(actualTotalPrice).to.be.equal(totalPrice)
    
    })
})