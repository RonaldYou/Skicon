document.getElementById("searchButton").addEventListener("click", getSearchVal);

function getSearchVal(){
    var searchVal = document.getElementById("searchBar").value;
    document.getElementById("test").innerHTML = searchVal;
    window.location.href = "tow.html";
    localStorage.setItem("resortName",searchVal);
}