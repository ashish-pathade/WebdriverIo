const { assert } = require("chai");

describe('first Script',()=>{
    it('it should run', async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/");
        await browser.maximizeWindow();
       // await expect(browser).toHaveUrlContaining("globalsqa")
        await browser.$("//li[@id='menu-item-2822']").moveTo();
        await $("span=Sample Page Test").waitForExist()
        // await browser.waitUntil(async()=>{
        //    return await $("//span[text()='Sample Page Test']").isDisplayed()
        // })
        await $("//span[text()='Sample Page Test']").click();
       // await expect(browser).toHaveTitle("Sample Page Testing Site Online - Global SQA Testing Sites")
        await browser.pause(3000);
        assert.fail("failing purposly")
        // const filepath="C:/Users/user/Downloads/L-11"
        // const relativepath=await browser.uploadFile(filepath);
        // await browser.$("//input[@name='file-553']").setValue(relativepath);

        await browser.$("//input[@class='name']").addValue("ashish");
        await browser.pause(3000);
        await browser.$("//input[@type='email']").addValue("ashi@gmail.com");
       const dropdown = await browser.$('#g2599-experienceinyears');
       dropdown.selectByAttribute('value','5-7');
       //dropdown.click();
       
       await browser.scroll(0,400);
       
       await browser.$("//input[@value='Automation Testing']").click();
        await browser.$("//input[@value='Graduate']").click();
       
       await browser.$("//button[text()='Alert Box : Click Here']").click();
        await browser.acceptAlert();
        let alert=await browser.getAlertText();
        console.log(alert);
        await browser.acceptAlert();
        await browser.$("//textarea[@class='textarea']").addValue(alert)
        await browser.pause(3000);
        await browser.$("//button[text()='Submit']").click();
        await browser.saveScreenshot("./screenshot/fullWebpage.png")
        const title=await browser.getTitle();
        await expect(title).to.be.equal("Sample Page Testing Site Online - Global SQA Testing Sites");
        await browser.$("#contact-form-2599").saveScreenshot('./screenshot/SS1.png');

 })
})