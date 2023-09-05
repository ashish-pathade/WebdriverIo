import loginpage from '../pageobjects/login.page.js'
import homepage from '../pageobjects/home.page.js'
import updtAdd from '../pageobjects/updateAdress.page.js'
import wishlistPage from '../pageobjects/wishlist.page.js'
import {expect} from 'chai'


describe('user module',()=>{


    it('updating the shipping and billing address',async()=>{
/*  --> first priority is for describe block if the word is present in the describe block then it will run the whole describe block
    irrespective of it block is having that word or not
    --> if describe block is not having that word then it will search inside the it block */
     await loginpage.OSAurl
     await homepage.clickOnLogin()
     await loginpage.OSAloginToApp("anuj.lpu1@gmail.com","Test@123")
     await homepage.clickOnMyacc()
     await homepage.clickOnUpdateAdd()
    /*------------------billing address------------------------*/
     await updtAdd.updateBillingAddress("siddapura billing","karnataka billing","bengaluru billing","123456789")
     const billingAdress=await browser.getAlertText()
     await browser.acceptAlert()
     /*-------------- swtiching to shipping address tab ---------------------*/
     await updtAdd.clickOnShippingAdd()
    /*------------------shipping address------------------------*/
     await updtAdd.updateshippingAddress("siddapura","karnataka","bengaluru","123456789")
     const shippingAdress=await browser.getAlertText()
     await browser.acceptAlert()
     expect(billingAdress).to.be.not.equal("Billing Address has been updated")// correction
     expect(shippingAdress).to.be.equal("Shipping Address has been updated")
    })



    it("verifying user is able to add the product in wishlist",async()=>{
     /* --------  no need to login again browser will be stay where we left it in previous test--------*/
    //   await loginpage.OSAurl
    //   await  browser.maximizeWindow()
    //   await homepage.clickOnLogin()
    //   await loginpage.OSAloginToApp("anuj.lpu1@gmail.com","Test@123")
    //  await browser.pause(4000)
     let productName="hp3"
     await homepage.searchProduct(productName)
     await browser.$("//h3[.='shop by']").scrollIntoView({ behavior: 'smooth', block: 'center' })
     await homepage.clickOnAddToCart()
     await browser.scroll(0,100)
     let wishlistProducts = wishlistPage.allProductsFromWishlist 
     for (const key in wishlistProducts) {
    
      expect(key.getText()).to.be.equal(productName)
     }
     
    })

    
})
// describe("svag",()=>{
// it("sads",()=>
// {

// console.log("second describe");

// })
// })