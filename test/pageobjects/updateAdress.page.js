class AddressPage
{
    // billing address locator
    get OSAbillingAdd(){
        return $("textarea[name='billingaddress']")
    }

    get OSAbillingState(){
        return $("input[name='bilingstate']")
    }

    get OSAbillingcity(){
        return $("input[name='billingcity']")
    }

    get OSAbillingPincode(){
        return $("input[name='billingpincode']")
    }

    get OSAbillingupdt(){
        return $("//label[text()='Billing Address']/../../button")
    }

    async updateBillingAddress(address,state,city,pincode){
        (await this.OSAbillingAdd).setValue(address);
        (await this.OSAbillingState).setValue(state);
        (await this.OSAbillingcity).setValue(city);
        (await this.OSAbillingPincode).setValue(pincode);
          
        await browser.waitUntil(async()=>{
               return await (await this.OSAbillingupdt).isEnabled();
                },{
                timeout : 4000,
                timeoutMsg : 'element not found'
                });
        (await this.OSAbillingupdt).click();
    }


    get OSAselectShippingAddTAB(){
       return $("//div[@id='accordion']/div[2]")
    }

    async clickOnShippingAdd(){
        // await browser.waitUntil(()=>{
        //     return this.OSAselectShippingAddTAB[1].isEnabled()
        // })
        await this.OSAselectShippingAddTAB.click()
    }


// shipping address locator
    get OSAshippingAdd(){
        return $("textarea[name='shippingaddress']")
    }

    get OSAbshippingtate(){
        return $("input[name='shippingstate']")
    }

    get OSAshippingcity(){
        return $("input[name='shippingcity']")
    }

    get OSAshippingPincode(){
        return $("input[name='shippingpincode']")
    }

    get OSAshippingUpdt(){
        return $("//div[@id='accordion']/div[2]//button")
    }
    async updateshippingAddress(address,state,city,pincode){
        await this.OSAshippingAdd.setValue(address);
        await this.OSAbshippingtate.setValue(state);
        await this.OSAshippingcity.setValue(city);
        await this.OSAshippingPincode.setValue(pincode);
        await browser.waitUntil(async()=>{
            return await (await this.OSAshippingUpdt).isEnabled();
             },{
             timeout : 4000,
             timeoutMsg : 'element not found'
             });
        (await this.OSAshippingUpdt).click();
    }

}
export default new AddressPage()