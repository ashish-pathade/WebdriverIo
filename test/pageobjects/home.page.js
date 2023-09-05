class HomePage 
{
    // this locators are for rahul shetty academy

 get homeLink(){
    return $("//a[text()='Home']")
 }

 get iphoneLink(){
    return $("*=iphone")
 }
 get allmobiles(){
    return $$("div[class='card h-100']")
 }

 get eachMobile(){
    return $$("div[class='card h-100'] div h4 a") 
 }

 get cartButton(){
    return $$("//div[@class='card-footer']/button")
 }

 get checkoutBtn(){
    return $("*=Checkout")
 }

 async clickOnCheckout(){
    await this.checkoutBtn.click()
 }

 // this locators are for rmg server online shopping application

 get OSAloginLink(){
    return $('=Login')
 }

 get OSAmyacclink(){
    return $("=My Account")
 }
  
 get OSAupdateAdd(){
    return $("=Shipping / Billing Address")
 }

 get OSAsearchField(){
   return $(".search-field")
 }
  get OSAsearchBtn(){
   return $(".search-button")
  }

  get OSAaddToCartBtn(){
   return $("//a[@class='add-to-cart']/i")
  }

 async searchProduct(prName){
   await this.OSAsearchField.setValue(prName)
   await this.OSAsearchBtn.click()
 }
  async clickOnAddToCart(){
   (await this.OSAaddToCartBtn).click();
  }


async clickOnMyacc(){
    await this.OSAmyacclink.click()
 }

 async clickOnLogin(){
    await this.OSAloginLink.click()
 }

 async clickOnUpdateAdd(){
    await this.OSAupdateAdd.waitForDisplayed();
    await this.OSAupdateAdd.click()
 }

}
export default new HomePage()