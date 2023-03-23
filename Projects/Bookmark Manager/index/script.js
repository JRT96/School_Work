function userSignInBtn() {
    let allUsers = JSON.parse(window.localStorage.getItem('Customer'));

    let email = document.getElementById("enterEmail").value;
    let password = document.getElementById("enterPassword").value;

    let userLogin = allUsers.find(user => user.Email === email && user.Password === password);
    if (userLogin) {
        alert("Login Successful");
        window.location.href = "/./bookmarks/bookmark.html";
        localStorage.setItem("userLogin", JSON.stringify(userLogin));
    } else {
        alert("Invalid Email or Password");
    }
    
    
    console.log(userLogin);
}

