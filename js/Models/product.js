// Tạo Object của products
function Products(id,nameProducts,prices,blackCamera,frontCamera,img,desc,type){
    this.productsId = id;
    this.nameProducts = nameProducts;
    this.prices = prices;
    this.blackCamera = blackCamera;
    this.frontCamera = frontCamera;
    this.image = img;
    this.desc = desc;
    this.type = type;
}