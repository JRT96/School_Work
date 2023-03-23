window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    document.getElementById("userFullName").innerHTML = userLogin.FullName;
    displayTicket();
}

function saveSupportTicket() {
    let supportTickets = JSON.parse(localStorage.getItem("supportTickets"));
    let severity = document.getElementById("severity").value;
    let randomTicketNumber = Math.floor(Math.random() * 1000000);

    let supportTicket = {
        Id: randomTicketNumber,
        Subject: document.getElementById("subject").value,
        Severity: severity,
        assignedTo: document.getElementById("assignedTo").value,
        ticketStatus: "Open"
    };
    
    if (supportTickets == null) {
        supportTickets = [];
    }

    supportTickets.push(supportTicket);
    localStorage.setItem("supportTickets", JSON.stringify(supportTickets));
    alert("Support Ticket Saved Successfully");
    displayTicket();
}

function displayTicket() {
    let supportTickets = JSON.parse(localStorage.getItem("supportTickets"));
    let html = "";
    if (supportTickets != null) {
        for (let i = 0; i < supportTickets.length; i++) {
            html += `<div>
            <h3 id="ticketId"> Ticket Number: ${supportTickets[i].Id} </h3>
            <div>
            <p id="ticketStatus">${supportTickets[i].ticketStatus} </p>
            <h1> ${supportTickets[i].Subject}</h1>
            <p> <span class="material-symbols-outlined" id="symbol">error</span> ${supportTickets[i].Severity}</p>
            <form class='issueButtons'><button type='button' id='close' onclick="closeTicket(${i})">Close Ticket</button> <button type='button' id='delete' onclick='deleteTicket()'>Delete Ticket</button> </form>
            <hr></hr>
            </div>
            `;
        }
    }
    if (supportTickets == null) {
        document.getElementById("supportTicketList").style.display = "none";
    }
    else {
        document.getElementById("supportTicketList").style.display = "block";
    }
        
    document.getElementById("supportTicketList").innerHTML = html;
}


//function to close ticket and change status to closed
function closeTicket(i) {
    let supportTickets = JSON.parse(localStorage.getItem("supportTickets"));
    supportTickets[i].ticketStatus = "Closed";
    localStorage.setItem("supportTickets", JSON.stringify(supportTickets));
    displayTicket();
    
}
    


function deleteTicket() {
    let ticketId = document.getElementById("ticketId").innerHTML;
    let supportTickets = JSON.parse(localStorage.getItem("supportTickets"));
    let ticket = supportTickets.find(ticket => ticket.Id == ticketId);
    supportTickets.splice(supportTickets.indexOf(ticket), 1);
    localStorage.setItem("supportTickets", JSON.stringify(supportTickets));
    if (supportTickets.length == 0) {
        localStorage.removeItem("supportTickets");
    }
    displayTicket();
}




