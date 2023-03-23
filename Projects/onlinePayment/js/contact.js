window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("billDataLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    }
}

function submitContactMessage() {
    let contactName = document.getElementById("contactName").value;
    let contactEmail = document.getElementById("contactEmail").value;
    let contactMessage = document.getElementById("contactMessage").value;

    let contact = {
        Name: contactName,
        Email: contactEmail,
        Message: contactMessage
    }

    let allContacts = JSON.parse(window.localStorage.getItem("ContactInfo"));
    if (allContacts == null) {
        allContacts = [];
    }

    if (!contactName || !contactEmail || !contactMessage) {
        alert("Please enter all required fields")
    } else {
        alert("Message Sent Successfully, We will get back to you shortly. Thank you!")
        allContacts.push(contact);
        window.localStorage.setItem("ContactMessage", JSON.stringify(allContacts));
        window.location.href = "/./contact.html";
    }
}

function logoutBtn() {
    localStorage.removeItem("userLogin");
    window.location.href = "/./index.html";
}