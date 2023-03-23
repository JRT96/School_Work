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

function submitMessages() {
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let subject = document.getElementById("contactSubject").value;
    let message = document.getElementById("contactMessage").value;

    let userMessage = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    let messageList = JSON.parse(localStorage.getItem("messageList"));
    if (messageList == null) {
        messageList = [];
    }
    
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields");
        return;
    }
    else {
        alert("Thank you for your message! We will get back to you as soon as possible.");
        messageList.push(userMessage);
        window.localStorage.setItem("messageList", JSON.stringify(messageList));
        clearMessagesInputs();
    }
    console.log(messageList);

}

