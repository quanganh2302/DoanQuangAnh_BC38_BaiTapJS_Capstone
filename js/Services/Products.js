var productServices = {
    createProducts: function(products){
        return axios({
            url:"https://6395e80290ac47c680774914.mockapi.io/products/",
            method:"POST",
            data: products,
        });
    },
    fetchProductsList: function(){
        return axios({
            url: "https://6395e80290ac47c680774914.mockapi.io/products/",
            method :"GET",
        });
    },
    deleteProducts: function(id){
        return axios({
            url: "https://6395e80290ac47c680774914.mockapi.io/products/" + id,
            method: "DELETE",
        });
    },
    fetchProductsDetail: function(id){
        return axios({
            url: "https://6395e80290ac47c680774914.mockapi.io/products/" + id,
            method: "GET",
        });
    },

    updateProducts: function(id, products){
        return axios({
            url: "https://6395e80290ac47c680774914.mockapi.io/products/" + id,
            method: "PUT",
            data: products,
        });
    },
};