// Khai báo Array chứa các class của Products 
var productsList = [];





async function fetchProductsList(){
    var promise = productServices.fetchProductsList();
    try{
        var res = await promise;

        console.log(res.data);
        // studentList = mapProductsList(res.data);
        // renderProducts();
      } catch(err){
        console.log(err);
      };
};


// let data = productServices.fetchProductsList();
// console.log(data);