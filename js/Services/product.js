var productService = {
  createProduct: function (product) {
    return axios({
      url: "https://6395e80290ac47c680774914.mockapi.io/products",
      method: "POST",
      // request body => POST, PUT, PATCH
      data: product,
    });
  },

  fetchProduct: function () {
    return axios({
      url: "https://6395e80290ac47c680774914.mockapi.io/products",
      method: "GET",
    });
  },

  deleteProduct: function (id) {
    return axios({
      url: "https://6395e80290ac47c680774914.mockapi.io/products/" + id,
      method: "DELETE",
    });
  },

  fetchProductDetail: function (id) {
    return axios({
      url: "https://6395e80290ac47c680774914.mockapi.io/products/" + id,
      method: "GET",
    });
  },

  updateProduct: function (product) {
    return axios({
      url:
        "https://6395e80290ac47c680774914.mockapi.io/products/" +
        product.id,
      method: "PUT",
      // request body => POST, PUT, PATCH
      data: product,
    });
  },
};
