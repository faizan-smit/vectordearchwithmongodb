









// // Function to handle the form submission and create a new product
// function submitProduct() {

  
//   let productname = document.getElementById("product");
//   let price = document.getElementById("price");

//   axios.post(`/api/v1/product`, {
//     product: productname.value,
//     price: price.value,
//   })
//     .then(function (response) {
//       // alert("Product added");
//       renderproduct();
//     })
//     .catch(function (error) {
//       alert("Problem in product submission please fill the input field");
//     });

//   productname.value = "";
//   price.value = "";
// }

// // Function to render all products
// function renderproduct() {
//   axios.get(`/api/v1/products`)
//     .then(function (response) {
//       let products = response.data;
//       let productcontainer = document.querySelector(".container");
//       productcontainer.innerHTML = "";

      

//       products.forEach(function (product) {
//         let maindiv = document.createElement("div");
//         maindiv.className = "maindiv";


        

//         let productx = document.createElement("h2");
//         productx.className = "productx";
//         productx.textContent = product.product ;
//         maindiv.appendChild(productx);

//         let nam = document.createElement("h5")
// nam.className = "nam"
// nam.innerText = "In Just rupees 🤑"
// maindiv.appendChild(nam)

//         let pricex = document.createElement("h1");
//         pricex.className = "pricex";
//         pricex.textContent = product.price + "💵";
//         maindiv.appendChild(pricex);

// let row = document.createElement("row")
// row.className = "row"
// maindiv.appendChild(row)


//         const editButton = document.createElement("button");
//         editButton.className = "btn btn-warning btn-sm button";
//        editButton.id = "button"
//         editButton.innerHTML = "<i class='bi bi-pencil'></i>";
//         row.appendChild(editButton);
//         editButton.addEventListener("click", function (event) {
//           let productId = product.id; // Assuming the product object has an 'id' property
//           editproduct(productId);
//         });

//         const deleteButton = document.createElement("button");
//         deleteButton.className = "btn btn-danger btn-sm button";
//         deleteButton.id = "button"
//         deleteButton.innerHTML = "<i class='bi bi-trash-fill'></i>";
//         row.appendChild(deleteButton);
//         deleteButton.addEventListener("click", function (event) {
//           let productId = product.id; // Assuming the product object has an 'id' property
//           deleteproduct(productId);
//         });

//         productcontainer.appendChild(maindiv);
//       });
//     });
// }

// // Function to handle the edit product operation
// function editproduct(productId) {
//   axios.get(`/api/v1/product/${productId}`)
//     .then(function (response) {
//       let product = response.data;

//       // Use prompt dialogs to get the updated product details from the user
//       let editedProduct = prompt("Enter the updated product name:", product.product);
//       let editedPrice = prompt("Enter the updated price:", product.price);

//       // If the user cancels any of the prompts or provides empty inputs, do not proceed with the update
//       if (editedProduct === null || editedProduct.trim() === "" || editedPrice === null || editedPrice.trim() === "") {
//         return;
//       }

//       // Perform the update using axios PUT request
//       axios.put(`/api/v1/product/${productId}`, {
//         product: editedProduct,
//         price: editedPrice,
//       })
//         .then(function (response) {
//           // alert("Product updated");
//           renderproduct();
//         })
//         .catch(function (error) {
//           alert("Error updating product");
//         });
//     })
//     .catch(function (error) {
//       alert("Error fetching product details");
//     });
// }

// // Function to handle the delete product operation
// function deleteproduct(productId) {
//   axios.delete(`/api/v1/product/${productId}`)
//     .then(function (response) {
//       // alert("Product deleted");
//       renderproduct();
//     })
//     .catch(function (error) {
//       alert("Error deleting product");
//     });
// }

// // Call renderproduct() initially to load the existing products when the page loads
// document.addEventListener("DOMContentLoaded", function () {
//   renderproduct();
// });