//Store variable
const form = document.getElementById('searchForm');

let searchInput = document.getElementById('searchInput');
let errorSearch = document.getElementById('errorSearch');

// Functions

function validate () {
    let validation = true;

    if(searchInput.value == '') {
        searchInput.style.border = "1px solid red";
        errorSearch.textContent = "This field cannot be empty";
        searchInput.focus();
        validation = false;
    }else if(searchInput.value.length <= 3) {
        searchInput.style.border = "1px solid red";
        errorSearch.textContent = "More than 3 characters";
        searchInput.focus();
        validation = false;
    }else {
        searchInput.style.border = "1px solid green";
        errorSearch.textContent = "Found it!"
    }

    return validation;

}

// To prevent the form to refresh if it works correctly
/*document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
});*/