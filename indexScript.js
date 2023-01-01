document.getElementById("searchButton").addEventListener("click", getSearchVal);

var searchVal;

function getSearchVal(){
    searchVal = document.getElementById("searchBar").value;
    sessionStorage.setItem("resortName", searchVal);
    window.location.href = "tow.html";
}
