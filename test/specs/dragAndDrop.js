describe("dragAndDrop",()=>{
 
    it("drag and drop",async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/");
        await browser.maximizeWindow();
        await browser.$("#menu-item-2822").moveTo();
        await browser.$("span=Demo Testing Site").moveTo();
        await $("//span[text()='Drag And Drop']").waitForExist()
        await $("//span[text()='Drag And Drop']").click()
        await $("li=Accepted Elements").waitForExist()
        await browser.$("li=Accepted Elements").click();
        const frame= await browser.$(".resp-tab-content-active iframe");
        await browser.switchToFrame(frame);
        await $("//div[@id='draggable']").waitForExist()
        let drag=await browser.$("//div[@id='draggable']");
        let drop=await browser.$("//div[@id='droppable']");
        await drag.dragAndDrop(drop);
        await browser.pause(3000);
    })

    xit("dropDown handeling",async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
        await browser.maximizeWindow()
        
        // let dropdown=await browser.$("select") // not recomended we have nothing inside the select tag thats why i am using
        // await dropdown.selectByAttribute("value","DZA")
        // console.log(await dropdown.getValue());
        // await dropdown.selectByIndex(6)
        // console.log("--------------aaaaaaaaaaa-----------");
        // console.log(await dropdown.getValue());
        // await dropdown.selectByVisibleText("Belarus")
        // console.log(await dropdown.getValue());
        // await browser.$("//div[@id='menu']//a[.='Tester’s Hub']").moveTo()
        // await browser.pause(3000)
        // await browser.$("//div[@id='menu']//span[.='AngularJS Protractor Practice Site']").moveTo()
        // await browser.$("#s").setValue("abc")
        // await browser.keys("Enter")
        // await browser.pause(3000)
        // //await browser.moveTo({X:100,Y:500}) // not working need to check
        // const src=await browser.$("//div[@id='menu']//a[.='Tester’s Hub']")
        // const trg =await browser.$("#s")
        // await src.dragAndDrop(trg)
        // await browser.newWindow("https://demo.actitime.com/login.do")
        // await browser.switchWindow("demo.actitime.com/login.do")
        // await browser.$("#username").setValue("admin")
        // await browser.$("input[name='pwd']").setValue("manager")
        // await browser.$("#loginButton").click()
        // await browser.pause(3000)
        // await browser.switchWindow("globalsqa.com")
        // await browser.$("//div[@id='menu']//a[.='Home']").click()
        await browser.newWindow("https://demo.automationtesting.in/Frames.html")
        await browser.switchWindow("automationtesting.in")
        await browser.switchToFrame(0)
        const frame1TF= await browser.$("//input[@type='text']")
        await expect(frame1TF).toBeEnabled()
        await browser.$("//input[@type='text']").addValue("ash")
        //await browser.pause(3000)
        await browser.$("//input[@type='text']").addValue("ish")
        await browser.pause(3000)
        await browser.switchToParentFrame()
        await browser.$("=Iframe with in an Iframe").click()
        //await browser.switchToFrame(0)
       // await browser.switchToFrame(1)
      //  const TF= browser.$$("//input[@type='text']")
       // console.log(TF)
       // await expect(TF[1]).toBeClickable()
        //await TF[1].setValue("abcd")
    
      
        await browser.pause(3000)
    
        })
})




