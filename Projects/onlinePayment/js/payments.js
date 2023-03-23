let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("billDataLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    }
}

function mobileInfo() {
    let mobileNumber = document.getElementById("mobileNumber").value;
    let amount = document.getElementById("paymentMobile").value *1;
    let carrier = document.getElementById("carrier").value;
    let date = new Date(document.getElementById("dateMobile").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;

    if (mobileNumber == "" || amount == "" || carrier == "" || date == "") {
        alert("Please fill all the fields");
    } else {
        let mobileData = {
            mobileNumber,
            amount,
            carrier,
            dateString,
            month,
        };

        makePayments("mobile", mobileData);
    }
}


function rentInfo() {
    let accountNumber = document.getElementById("rentAccountNumber").value;
    let amount = document.getElementById("paymentRent").value *1;
    let date = new Date(document.getElementById("dateRent").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;
    if (accountNumber == "" || amount == "" || date == "") {
        alert("Please fill all the fields");
    } else {
        let rentData = {                       
            accountNumber,                       
            amount,                       
            dateString,                       
            month,                       
        };                       
        makePayments("rent", rentData);                       
    }                       
}

function loanInfo() {
    let accountNumber = document.getElementById("loanAccountNumber").value;
    let amount = document.getElementById("paymentLoan").value *1;
    let date = new Date(document.getElementById("dateLoan").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;
    if (accountNumber == "" || amount == "" || date == "") {
        alert("Please fill all the fields");
    } else {
        let loanData = {
            accountNumber,
            amount,
            dateString,
            month,
        };
        makePayments("loan", loanData);
    }

}

function electricityInfo() {
    let accountNumber = document.getElementById("electricityAccountNumber").value;
    let amount = document.getElementById("paymentElectric").value *1;
    let provider = document.getElementById("provider").value;
    let date = new Date(document.getElementById("dateElectric").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;
    if (accountNumber == "" || amount == "" || provider == "" || date == "") {
        alert("Please fill all the fields");
    }
    else {
        let electricityData = {
            accountNumber,
            amount,
            provider,
            dateString,
            month,
        };
        makePayments("electricity", electricityData);
    }

    
}

function insuranceInfo() {
    let accountNumber = document.getElementById("carInsurance").value;
    let amount = document.getElementById("paymentInsurance").value *1;
    let date = new Date(document.getElementById("dateInsurance").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;
    if (accountNumber == "" || amount == "" || date == "") {
        alert("Please fill all the fields");
    }
    else {
        let insuranceData = {
            accountNumber,
            amount,
            dateString,
            month,
        };
        makePayments("insurance", insuranceData);
    }

    
}

function waterInfo() {
    let accountNumber = document.getElementById("waterAccountNumber").value;
    let amount = document.getElementById("paymentWater").value *1;
    let date = new Date(document.getElementById("dateWater").value);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let dateString = day + " " + month + " " + year;
    if (accountNumber == "" || amount == "" || date == "") {
        alert("Please fill all the fields");
    }
    else {
        let waterData = {
            accountNumber,
            amount,
            dateString,
            month,
        };
        makePayments("water", waterData);
    }
}

let makePayments = (type, data) => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let payments = JSON.parse(localStorage.getItem("payments"));
    console.log(data);
    if (payments == null) { payments = {}; }
    let month = months[[data.month]];
    if (payments[userLogin.Email] == undefined) {
        payments[userLogin.Email] = {};
        payments[userLogin.Email][month] = {};
        payments[userLogin.Email][month][type] = data;
        alert("Payment added");
    } else if (payments[userLogin.Email][month] == undefined) {
        payments[userLogin.Email][month] = {};
        payments[userLogin.Email][month][type] = data;
        alert("Payment added");
    } else if (payments[userLogin.Email][month][type] == undefined) {
        payments[userLogin.Email][month][type] = data;
        alert("Payment added");
    } else {
        alert("Payment already added");
    }
    localStorage.setItem("payments", JSON.stringify(payments));

    console.log(month);
}




function logoutBtn() {
    localStorage.removeItem("userLogin");
    window.location.href = "/./index.html";
}