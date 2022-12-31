let productList = [];

// Create Product

async function createProduct() {
  let name = document.getElementById("name").value;
  let price = +document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let backCamera = document.getElementById("backCamera").value;
  let frontCamera = document.getElementById("frontCamera").value;
  let img = document.getElementById("img").value;
  let desc = document.getElementById("desc").value;
  let type = document.getElementById("type").value;

  let product = new Product(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  //Post Request to Database
  let promise = productService.createProduct(product);
  try {
    let res = await promise;
    alert("Thêm thành công!");
    fetchProductList();
  } catch (err) {
    // alert("Thêm thất bại!");
  }
}

//Fetch data from API
async function fetchProductList() {
  productList = [];
  renderProduct();
  // document.getElementById("loader").style.display = "block";
  let promise = productService.fetchProduct();

  try {
    let res = await promise;
    productList = mapProductList(res.data);
    renderProduct();
  } catch (err) {
    console.log(err);
  } finally {
    // document.getElementById("loader").style.display = "none";
  }
}

window.onload = async function () {
    await fetchProductList(); 
  };

  function mapProductList(local) {
    let result = [];
  
    for (let i = 0; i < local.length; i++) {
      let oldProduct = local[i];
      let newProduct = new Product(
        oldProduct.id,
        oldProduct.name,
        oldProduct.price,
        oldProduct.screen,
        oldProduct.backCamera,
        oldProduct.frontCamera,
        oldProduct.img,
        oldProduct.desc,
        oldProduct.type
      );
      result.push(newProduct);
    }
  
    return result;
  }



//Render product list
function renderProduct(data) {
  console.log(data);
  data = data || productList;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].name}</td>
                  <td>${data[i].price}</td>
                  <td> <img src="${data[i].img}" alt=""> </td>
                  <td>${data[i].desc}</td>
                  <td>
                    <button 
                      onclick="deleteProduct('${data[i].productId}')" 
                      class="btn btn-danger">Xoá</button>
                    <button 
                      onclick="getUpdateProduct('${data[i].productId}')"  
                      class="btn btn-info">Sửa</button>
                  </td>
              </tr>`;
  }
  document.getElementById("displayProductList").innerHTML = html;
}
