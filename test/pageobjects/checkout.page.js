class Checkout
{
    get allproductPrices(){
        return $$("//tbody//tr//td[4]/strong")
    }

}
export default new Checkout()