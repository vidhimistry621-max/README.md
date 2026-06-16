const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");


const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

let products =
JSON.parse(localStorage.getItem("products")) || []

let editId = null;

function saveData() {
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}
function updateDashboard() {

    const totalProducts = products.length;

    const totalQuantity = products.reduce(
        (total, product) => total + product.quantity,
        0
    );

    const inventoryValue = products.reduce(
        (total, product) =>
        total + (product.price * product.quantity),
        0
    );

    const lowStock = products.filter(
        product => product.quantity < 10
    ).length;

    document.getElementById("totalProducts").textContent =
    totalProducts;

    document.getElementById("totalQuantity").textContent =
    totalQuantity;

    document.getElementById("inventoryValue").textContent =
    inventoryValue;

    document.getElementById("lowStock").textContent =
    lowStock;
}

function displayProducts(data = products) {

    productList.innerHTML = "";

    data.forEach(product => {
     const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>

            <td>
              ${
                    product.quantity < 5
                    ? "⚠️ Low Stock"
                    : "✅ In Stock"
              }
             </td>

             <td>
             <button onclick="stockIn(${product.id})"> ➕ </button>
             <button onclick="stockOut(${product.id})"> ➖ </button>
             </td>

             <td>
                <button onclick="editProduct(${product.id})">
                Edit
                </button>

                <button onclick="deleteProduct(${product.id})">
                Delete
                </button>
             </td>
        `;

        productList.appendChild(tr);
    });
updateDashboard();
}
addBtn.addEventListener("click", () => {

    if (
        productName.value === "" ||
        category.value === "" ||
        price.value === "" ||
        quantity.value === ""
    ) {
        alert("Fill all fields");
        return;
    }
    if (editId) {

        products = products.map(product => {

            if (product.id === editId) {

                return {
                    ...product,
                    name: productName.value,
                    category: category.value,
                    price: Number(price.value),
                    quantity: Number(quantity.value)
                };
            }

            return product;
        });
        editId = null;
        addBtn.textContent = "Add Product";

    } else {

        const product = {
            id: Date.now(),
            name: productName.value,
            category: category.value,
            price: Number(price.value),
            quantity: Number(quantity.value)
        };

        products.push(product);
    }

    saveData();
    displayProducts();

    productName.value = "";
    category.value = "";
    price.value = "";
    quantity.value = "";
});

function deleteProduct(id) {

    products = products.filter(
        product => product.id !== id
    );

    saveData();
    displayProducts();
}

function editProduct(id) {

    const product = products.find(
        product => product.id === id
    );

    productName.value = product.name;
    category.value = product.category;
    price.value = product.price;
    quantity.value = product.quantity;

    editId = id;

    addBtn.textContent = "Update Product";
}

function stockIn(id) {

    const product = products.find(
        product => product.id === id
    );

    product.quantity++;

    saveData();
    displayProducts();
}
function stockOut(id) {

    const product = products.find(
        product => product.id === id
    );

    if (product.quantity > 0) {
        product.quantity--;
    }
    
    saveData();
    displayProducts();
}

searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

function filterProducts(){
  const searchValue =searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const filtered = products.filter(product => {
 
 
const matchName =product.name.toLowerCase() .includes(searchValue);
const matchCategory =selectedCategory === "All" ||  product.category === selectedCategory

return matchName&& matchCategory;
});

displayProducts(filtered);
}
displayProducts();