window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("billDataLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    }
}

function registerBtn() {
    let fullName = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let phone = document.getElementById("registerPhone").value;
    let password = document.getElementById("registerPassword").value;

    let user = {
        FullName: fullName,
        Email: email,
        Phone: phone,
        Password: password
    }

    let allUsers = JSON.parse(window.localStorage.getItem("UserInfo"));
    if (allUsers == null) {
        allUsers = [];
    }

    if (!fullName || !email || !phone || !password) {
        alert("Please enter all required fields")
    } else {
        if (allUsers.some(user => user.Email === email)) {
            alert("Email already in use or already exists")
            return;
        }
        alert("Account Created Successfully, You can now login. Welcome!")
        allUsers.push(user);
        window.localStorage.setItem("UserInfo", JSON.stringify(allUsers));
        window.location.href = "/./index.html";
    }

}

function loginBtn() {
    let allUsers = JSON.parse(localStorage.getItem("UserInfo"));
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let userLogin = allUsers.find(user => user.Email === email && user.Password === password);
    if (userLogin) {
        alert("Welcome" + " " + userLogin.FullName);
        localStorage.setItem("userLogin", JSON.stringify(userLogin));
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    } else {
        alert("Invalid Email or Password");
    }
}

function logoutBtn() {
    localStorage.removeItem("userLogin");
    window.location.href = "/./index.html";
}