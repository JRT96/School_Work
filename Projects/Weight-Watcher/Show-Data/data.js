window.onload = function () {
    displayCustomerInfo();
}

function displayCustomerInfo() {
    let customers = JSON.parse(localStorage.getItem("customers"));
    let data = "";
    if (customers != null) {
        for (let i = 0; i < customers.length; i++) {
            data += `<tr>
        <td>${customers[i].firstName}</td>
        <td>${customers[i].lastName}</td>
        <td>${customers[i].phone}</td>
        <td><img src="${customers[i].picture}" alt="Customer Picture"></td>
        <td>${customers[i].weight}</td>
        <td><button type="button" id="trashButton" onclick="deleteButton()"><span id="spanTrashIcon" class="material-symbols-outlined">delete</span></button></td>
        </tr>`;
        }
        
    };

    document.getElementById("userInfo").innerHTML = data;

    if (customers.length === 0) {
        document.getElementById("userInfo").innerHTML = `<tr><td>No Data</td></tr>`;
    }
}