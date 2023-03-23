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
    let payments = JSON.parse(localStorage.getItem("payments"));
    if (userLogin) {
        document.getElementById("paymentBtnLink").classList.remove("invisible");
        document.getElementById("billDataLink").classList.remove("invisible");
        document.getElementById("dropDown").innerHTML = userLogin.FullName + " " + `<button type="button" class="btn btn-light btn-sm" id="logoutBtn" onclick="logoutBtn()"><span class="material-symbols-outlined">logout</span></button>`;
    };
    let table = '';

    

    if(payments == null) {
        table = `<tr><td colspan="3">No payments made yet</td></tr>`;
    } else {
        let currentUser = payments[userLogin.Email];
        for(let i in months) {
            table += `<tr>
                <td>${months[i]}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].mobile !== undefined ) ? currentUser[months[i]].mobile.amount.toFixed(2) : 'pending'}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].rent !== undefined ) ? currentUser[months[i]].rent.amount.toFixed(2) : 'pending'}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].loan !== undefined ) ? currentUser[months[i]].loan.amount.toFixed(2) : 'pending'}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].electricity !== undefined ) ? currentUser[months[i]].electricity.amount.toFixed(2) : 'pending'}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].insurance !== undefined ) ? currentUser[months[i]].insurance.amount.toFixed(2) : 'pending'}</td>
                <td>${(currentUser[months[i]] !== undefined && currentUser[months[i]].water !== undefined ) ? currentUser[months[i]].water.amount.toFixed(2) : 'pending'}</td>
                </tr>`;
        }
    }
    

    document.getElementById("dataBody").innerHTML = table;


//     if (payments) {
//         let mobilePayments = payments.user.Email == userLogin.Email ? payments.mobile : [];
//         let rentPayments = payments.user.Email == userLogin.Email ? payments.rent : [];
//         let loanPayments = payments.user.Email == userLogin.Email ? payments.loan : [];
//         let electricityPayments = payments.user.Email == userLogin.Email ? payments.electricity : [];
//         let insurancePayments = payments.user.Email == userLogin.Email ? payments.insurance : [];
//         let waterPayments = payments.user.Email == userLogin.Email ? payments.water : [];
//         let data = '';
//         mobilePayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.mobileNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.carrier}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//         });
//         rentPayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.rentNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//         });
//         loanPayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.loanNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//         });
//         electricityPayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.electricityNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//                         });
//         insurancePayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.insuranceNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//         });
//         waterPayments.forEach(function (item) {
//             data += `<tr>
//                         <td>${item.waterNumber}</td>
//                         <td>${item.amount}</td>
//                         <td>${item.dateString}</td>
//                     </tr>`;
//         });
//         document.getElementById('dataBody').innerHTML = data;
// }
}





function logoutBtn() {
    localStorage.removeItem("userLogin");
    window.location.href = "/./index.html";
}