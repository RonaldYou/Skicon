var resortName = sessionStorage.getItem("resortName");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3cf3ce7bemsh68f6de2ad6f5ffap108c6bjsn1ca8044ab34f',
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
	}
};
let part1 = "https://ski-resort-forecast.p.rapidapi.com/";
let part2 = resortName;
let part3 = "/snowConditions?units=m";

let url = part1 + part2 + part3;

var loaderContainer = document.getElementsByClassName('dot-flashing');

const displayLoading = () => {
	for (var i=0;i<loaderContainer.length;i+=1){
		loaderContainer[i].style.display = 'block';
	}
};

const hideLoading = () => {
    for (var i=0;i<loaderContainer.length;i+=1){
		loaderContainer[i].style.display = 'none';
	}
};
displayLoading();
fetch(url,options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
		hideLoading();
		document.getElementById("sc1").innerHTML = "error";
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displaysc1(data);
    displaysc2(data);
    displaysc3(data);
    displaysc4(data);
    displayLoc(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displaysc1(data){
    hideLoading();
	document.getElementById("sc1").innerHTML = data.botSnowDepth;
}

function displaysc2(data){
    hideLoading();
	document.getElementById("sc2").innerHTML = data.topSnowDepth;
}

function displaysc3(data){
    hideLoading();
	document.getElementById("sc3").innerHTML = data.freshSnowfall;
}

function displaysc4(data){
    hideLoading();
	document.getElementById("sc4").innerHTML = data.lastSnowfallDate;
}

function displayLoc(data){
	var region = data.basicInfo.region;
	var name = data.basicInfo.name;
	var finalMountain = region + ", " + name;
	document.getElementById("loc").innerHTML = finalMountain;
}