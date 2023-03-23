window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("billDataLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    }
}

function logoutBtn() {
    localStorage.removeItem("userLogin");
    window.location.href = "/./index.html";
}