function subscribeEmail() {
    var email = document.getElementById("emailInput").value;

    if (email == "") {
        alert("Please enter your email");
        return;
    }
    else {
        alert("Thank you for subscribing!");
    }
    
}

function contactUsPage() {
    window.location.href = "../Contact/contact.html";
}

