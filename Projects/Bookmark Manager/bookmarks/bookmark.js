window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    document.getElementById("userFullName").innerHTML = userLogin.FullName;
    displayBookmark();
}

function submitBookmark() {
    let siteName = document.getElementById("siteName").value;
    let siteUrl = document.getElementById("siteUrl").value;

    let bookmark = {
        Name: siteName,
        Url: siteUrl
    }

    if (localStorage.getItem("bookmarks") === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    if (siteName === "" || siteUrl === "") {
        alert("Please fill in the form");
        return false;
    }
    displayBookmark();
}

function displayBookmark() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let html = "";
    if (bookmarks !== null) {
        for (let i = 0; i < bookmarks.length; i++) {
            html += `<div id="page${i + 1}" class="notactive">
                        <h3>${bookmarks[i].Name}</h3>
                        <button id="visitBookmark" onclick="visitBookmark('${bookmarks[i].Url}')">Visit</button>
                        <button id="deleteBookmark" onclick="deleteBookmark('${bookmarks[i].Url}')">Delete</button>
                        <button id="editBookmark" onclick="editBookmark('${bookmarks[i].Url}')">Edit</button>
                        </div>`; 
        }
    }

    document.getElementById("userList").innerHTML = html;

    if(bookmarks.length === 0){
        document.getElementById("userList").innerHTML = "<h1>Your Bookmarks</h1><p>You Have 0 Bookmarks</p>";
        document.getElementById("pagination-box").style.display = "none";
    } 
    else if(bookmarks.length > 0) {
        document.getElementById("pagination-box").style.display = "block";
    }
    $('#pagination-box').twbsPagination(`destroy`);
    // pagination Jquery
    $('#pagination-box').twbsPagination({
        totalPages: bookmarks.length,
        startPage: 1,
        visiblePages: 5,
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last',
        onPageClick: function (event, page) {
            $('.d-block').removeClass('d-block');
            $('#page' + page).addClass('d-block');
        }
      });
    
}

function visitBookmark(url) {
    window.open(url);
}

function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].Url === url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmark();
}

function editBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].Url === url) {
            document.getElementById("siteName").value = bookmarks[i].Name;
            document.getElementById("siteUrl").value = bookmarks[i].Url;
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmark();
}



