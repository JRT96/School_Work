window.onload = function () {
    let customerLogin = JSON.parse(localStorage.getItem("customerLogin"));
    if (customerLogin) {
        document.getElementById("customerNameArea").innerHTML = "Welcome" + " " + customerLogin.name + " " +
            `<button type="button" class="btn btn-sm" id="logoutBtn" onclick="logoutBtn()">
        <img src="/./icons/logout.svg" alt="Logout Button"</button>`;
        document.getElementById("signupBtn").style.display = 'none';
    }
    displayProduct();
}


function registerBtn() {
    let name = document.getElementById("registerName").value;
    let password = document.getElementById("registerPassword").value;
    let email = document.getElementById("registerEmail").value;
    let phone = document.getElementById("registerNumber").value *1;

    let customer = {
        name,
        password,
        email,
        phone,
    };

    let allCustomers = JSON.parse(window.localStorage.getItem("customerLogin"));
    if (allCustomers == null) {
        allCustomers = [];
    }

    if (!name || !password || !email || !phone) {
        alert("Please Fill in Required fields")
    } else {
        if (allCustomers.some(customer => email === email)) {
            alert("Email already exists")
            return;
        }
    }
    alert("Account created. Welcome to Lego Shop!")
    allCustomers.push(customer);
    window.localStorage.setItem("customer", JSON.stringify(allCustomers));
    window.location.href = "/./index.html";
}

function logoutBtn() {
    localStorage.removeItem("customerLogin");
    window.location.href = "/./index.html"
}

function loginCustomers() {
    let allCustomers = JSON.parse(localStorage.getItem("customer"));
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    let customerLogin = allCustomers.find(customer => customer.email === email && customer.password === password);
    if (customerLogin) {
        alert("Welcome" + " " + customerLogin.name);
        localStorage.setItem("customerLogin", JSON.stringify(customerLogin));
        document.getElementById("customerNameArea").innerHTML = "Welcome" + " " + customerLogin.name + " " +
        `<button type="button" class="btn btn-sm" id="logoutBtn" onclick="logoutBtn()">
        <img src="/./icons/logout.svg" alt="Logout Button"</button>`;
        location.reload();

    } else {
        alert("Invalid Email or Password");
    }
}

let product = {};
const output = document.getElementById("output");
const imageContainer = document.getElementById("imageContainer");

document.getElementById("productPicture").addEventListener("change", (event) => {
    imageContainer.src = "";
    output.textContent = "";
    const file = event.target.files[0];
    if (!file.type) {
        output.textContent = "File not supported";
        return;
    }
    if (!file.type.match("image.*")) {
        output.textContent = "File not supported";
        return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
        imageContainer.src = event.target.result;
        product.picture = event.target.result;
        console.log(product.picture);
    });
    reader.readAsDataURL(file);

});

function saveProduct() {
    product.name = document.getElementById("productName").value;
    product.price = document.getElementById("productPrice").value * 1;
    product.id = Math.floor(Math.random() * 1000000);

    if (product.name == "" || product.price == "" || product.picture == undefined) {
        alert("Please fill out all fields");
        return;
    } else {
        alert("Product Added!");
    }

    let products = JSON.parse(window.localStorage.getItem("products"));
    if (!products) {
        products = [];
    }

    products.push(product);
    window.localStorage.setItem("products", JSON.stringify(products));
    displayProduct();

}

function displayProduct() {
    const products = JSON.parse(window.localStorage.getItem("products"));
    let item = '';
    products.forEach(p => {
        item += `<div class="row row-cols-1 row-cols-md-2 g-4 mb-3" id="legoKits">
            <div class="col">
              <div class="card h-100 w-50 border-0">
                <img src="${p.picture}" class="card-img-top" alt="${p.name}">
                <div class="card-body">
                      <h5 class="card-title">${p.name}</h5>
                      <p class="card-text">Price: $${p.price}</p>
                </div>
                <button class="btn btn-warning" type="button" onclick="addToCart()"><img src="/icons/shopping-cart-plus.svg"></button>
                </div>
            </div>
            </div>`
    });
    document.getElementById("displayItem").innerHTML = item;

    if (products.length == 0) {
        document.getElementById("displayItem").innerHTML = "Sorry, our admin has not entered any items currently. Please be sure to come back soon.";
    }
}

function addToCart() {
    let customerLogin = JSON.parse(window.localStorage.getItem("customerLogin"));
    let products = JSON.parse(localStorage.getItem("products"));

    
    
    if (customerLogin) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (!cart) {
            cart = [];
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == products.id) {
                
                }
            }
        }
        cart.push(products);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    }
    else {
        alert("Please login to add to cart");
    }

    
    

}