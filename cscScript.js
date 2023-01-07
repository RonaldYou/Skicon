var resortName = sessionStorage.getItem("resortName");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
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
    var botDepth;
    if(data.botSnowDepth == null){
        botDepth = "N/A";
    }
    else{
        botDepth = data.botSnowDepth;
    }
	document.getElementById("sc1").innerHTML = botDepth;
}

function displaysc2(data){
    hideLoading();
    var topDepth;
    if(data.topSnowDepth == null){
        topDepth = "N/A";
    }
    else{
        topDepth = data.topSnowDepth;
    }
	document.getElementById("sc2").innerHTML = topDepth;
}

function displaysc3(data){
    hideLoading();
    var freshSnow;
    if(data.freshSnowfall == null){
        freshSnow = "N/A";
    }
    else{
        freshSnow = data.freshSnowfall;
    }
	document.getElementById("sc3").innerHTML = freshSnow;
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