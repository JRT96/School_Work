let member = {};

const output = document.getElementById("output");
const imageContainer = document.getElementById("imageContainer");

document.getElementById("selfie").addEventListener("change", (event) => {
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
        member.picture = event.target.result;
        console.log(member.picture);
        if(member.picture == undefined) {
            document.getElementById("materialId").style.display = "block";
        } else {
            document.getElementById("materialId").style.display = "none";
            document.getElementById("pictureBox").style.display = "block";
        }
    });
    reader.readAsDataURL(file);
});



function registerData() {
    let customers = JSON.parse(window.localStorage.getItem("customers"));
    if (!customers) {
        customers = {};
    }

   member.firstName = document.getElementById("firstName").value;
   member.lastName = document.getElementById("lastName").value;
   member.phone = document.getElementById("phoneNumber").value *1;

    if (member.weights == null) {
        member.weights = [];
    }
   
   member.weights.push({
    weight:document.getElementById("weight").value,
    date:document.getElementById("date").value
   });

    if (member.firstName == "" || member.lastName == "" || member.phone == "" || member.weight == "" || member.date == "" || member.picture == undefined) {
        alert("Please fill out all fields");
        return;
    } else {
        alert("Thank you for registering. Welcome to Weight Watchers!")
        clearMessagesInputs();
    }

    
    console.log(customers);
    customers[member.phone] = member;
    window.localStorage.setItem("customers", JSON.stringify(customers));

    

}

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

function clearMessagesInputs() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("date").value = "";
    document.getElementById("selfie").value = "";
}

