var searchVal;

document.getElementById("searchBar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("not okay");
        getSearchVal.call();
    }
});
document.getElementById("searchButton").addEventListener("click", getSearchVal);
console.log(" okay");

function getSearchVal(){
    console.log("why am i not here");
    searchVal = document.getElementById("searchBar").value;
    sessionStorage.setItem("resortName", searchVal);
    window.location.href = "tow.html";
    console.log(searchVal);
    console.log("why am i not here!!!!!");
}
