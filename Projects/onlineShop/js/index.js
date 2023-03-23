window.onload = function () {
    let customerLogin = JSON.parse(localStorage.getItem("customerLogin"));
    if (customerLogin) {
        document.getElementById("customerNameArea").innerHTML = "Welcome" + " " + customerLogin.name + " " +
        `<button type="button" class="btn btn-sm" id="logoutBtn" onclick="logoutBtn()">
        <img src="/./icons/logout.svg" alt="Logout Button"</button>`;
        document.getElementById("signupBtn").style.display = 'none' ;
    }
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

function logoutBtn() {
    localStorage.removeItem("customerLogin");
    window.location.href = "/./index.html"
}