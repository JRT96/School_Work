window.onload = function () {
    let userData = JSON.parse(localStorage.getItem("customers"));
    displayData();
}

function displayData() {
    let userData = JSON.parse(localStorage.getItem("customers"));
    let data = "";
    console.log(userData);

    for (let i in userData) {
        data += `<tr>
        <td>${userData[i].firstName}</td>
        <td>${userData[i].lastName}</td>
        <td>${userData[i].phone}</td>
        <td><img src="${userData[i].picture}" alt="user picture" width="48"></td>
        <td><button onclick='openModal(${JSON.stringify(userData[i].weights)})'>Details</button></td>
        <td><button onclick="deleteUser(${i})"><span class="material-symbols-outlined">delete</span></button></td>
        </tr>`;
    }
    
    

    document.getElementById("userList").innerHTML = data;
}

function openModal(weights) {
    let modal = new bootstrap.Modal(document.getElementById("showDetails"));
    let displayWeights = '';
    weights.forEach(w => {
        displayWeights += `
        <li>${w.date}: ${w.weight} lbs</li>`
    });

    document.getElementById("weights").innerHTML = displayWeights;
    modal.show();
}

function deleteUser(i) {
    console.log(i);
    let userData = JSON.parse(localStorage.getItem("customers"));
    delete userData[i];
    localStorage.setItem("customers", JSON.stringify(userData));
    displayData();
}

