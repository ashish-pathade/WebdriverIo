class WishlistPage
{
    get allProductsFromWishlist(){
        return $$("//tbody//div[@class='product-name']/a")
    }
}

export default new WishlistPage()