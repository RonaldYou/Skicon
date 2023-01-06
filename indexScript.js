var searchVal;

document.getElementById("searchBar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getSearchVal.call();
    }
});
document.getElementById("searchButton").addEventListener("click", getSearchVal);

function getSearchVal(){
    searchVal = document.getElementById("searchBar").value;
    sessionStorage.setItem("resortName", searchVal);
    window.location.href = "tow.html";
}
