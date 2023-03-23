

function registerUserButton() {
    let fullName = document.getElementById("enterFullName").value;
    let email = document.getElementById("enterEmail").value;
    let password = document.getElementById("enterPassword").value;

    let user = {
        FullName: fullName,
        Email: email,
        Password: password
    }

    let allUsers = JSON.parse(window.localStorage.getItem('Customer'));
    
    if (allUsers == null) {
        allUsers = [];
    }

    if (!fullName || !email || !password) {
        alert("Please Fill Required Fields")
    }
    else {
        if (allUsers.some(user => user.Email === email)) {
            alert("Email Already Exists")
            return;
        }
        alert("Account Created Successfully, Welcome!")
        allUsers.push(user);
        window.localStorage.setItem('Customer', JSON.stringify(allUsers));
        window.location.href = "/./index/index.html";
    }

    console.log(allUsers);

}