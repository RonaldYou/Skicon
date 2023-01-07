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
let part3 = "/forecast?units=m&el=bot";

let url = part1 + part2 + part3;
// fetch(url, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


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
		document.getElementById("b1").innerHTML = "error";
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayBottomb1(data);
	displayBottomb2(data);
	displayBottomb3(data);
	displayBottomb4(data);
	displayBottomb5(data);
	displayBottomb6(data);
	displayBottomb7(data);
	displayLoc(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayBottomb1(data){
	var amTemp = parseInt(data.forecast5Day[0].am.maxTemp);
	var pmTemp = parseInt(data.forecast5Day[0].pm.maxTemp);
	var nightTemp = parseInt(data.forecast5Day[0].night.maxTemp);
    var maxTemp;
    if(amTemp >= pmTemp && amTemp >= nightTemp){
        maxTemp = data.forecast5Day[0].am.maxTemp;
    }
    else if(pmTemp >= amTemp && pmTemp >= nightTemp){
        maxTemp = data.forecast5Day[0].pm.maxTemp;
    }
    else if(nightTemp >= amTemp && nightTemp >= pmTemp){
        maxTemp = data.forecast5Day[0].night.maxTemp;
    }
	hideLoading();
	document.getElementById("b1").innerHTML = maxTemp;
}

function displayBottomb2(data){
	var amTemp = parseInt(data.forecast5Day[0].am.minTemp);
	var pmTemp = parseInt(data.forecast5Day[0].pm.minTemp);
	var nightTemp = parseInt(data.forecast5Day[0].night.minTemp);
    var minTemp;
    if(amTemp <= pmTemp && amTemp <= nightTemp){
        minTemp = data.forecast5Day[0].am.minTemp;
    }
    else if(pmTemp <= amTemp && pmTemp <= nightTemp){
        minTemp = data.forecast5Day[0].pm.minTemp;
    }
    else if(nightTemp <= amTemp && nightTemp <= pmTemp){
        minTemp = data.forecast5Day[0].night.minTemp;
    }
	hideLoading();
	document.getElementById("b2").innerHTML = minTemp;
}

function displayBottomb3(data){
	var amTemp = parseInt(data.forecast5Day[0].am.windChill);
	var pmTemp = parseInt(data.forecast5Day[0].pm.windChill);
	var nightTemp = parseInt(data.forecast5Day[0].night.windChill);
    var sum = amTemp + pmTemp + nightTemp;
	var avg = Math.round(sum/3);
	var strAvg = avg.toString();
	var finAvg = strAvg + "°C";
	hideLoading();
	document.getElementById("b3").innerHTML = finAvg;
}

function displayBottomb4(data){
	var amSnow = parseInt(data.forecast5Day[0].am.snow);
	var pmSnow = parseInt(data.forecast5Day[0].pm.snow);
	var nightSnow = parseInt(data.forecast5Day[0].night.snow);
    var snowSum = amSnow + pmSnow + nightSnow;
	var snowSumTrunc = snowSum.toFixed(1);
	var snowSumInter =  snowSumTrunc.toString();
	var finSnowSum = snowSumInter + "cm";
	hideLoading();
	document.getElementById("b4").innerHTML = finSnowSum;
}

function displayBottomb5(data){
	var amRain = parseInt(data.forecast5Day[0].am.rain);
	var pmRain = parseInt(data.forecast5Day[0].pm.rain);
	var nightRain = parseInt(data.forecast5Day[0].night.rain);
    var rainSum = amRain + pmRain + nightRain;
	var rainSumTrunc = rainSum.toFixed(1);
	var rainSumInter =  rainSumTrunc.toString();
	var finRainSum = rainSumInter + "mm";
	hideLoading();
	document.getElementById("b5").innerHTML = finRainSum;
}

function displayBottomb6(data){
	var amSpeed = parseInt(data.forecast5Day[0].am.windSpeed);
	var pmSpeed = parseInt(data.forecast5Day[0].pm.windSpeed);
	var nightSpeed = parseInt(data.forecast5Day[0].night.windSpeed);
    var sum = amSpeed + pmSpeed + nightSpeed;
	var avg = Math.round(sum/3);
	var strAvg = avg.toString();
	var finAvg = strAvg + "km/h";
	hideLoading();
	document.getElementById("b6").innerHTML = finAvg;
}

function displayBottomb7(data){
	var amSpeed = parseInt(data.forecast5Day[0].am.windSpeed);
	var pmSpeed = parseInt(data.forecast5Day[0].pm.windSpeed);
	var nightSpeed = parseInt(data.forecast5Day[0].night.windSpeed);
    var maxSpeed;
    if(amSpeed >= pmSpeed && amSpeed >= nightSpeed){
        maxSpeed = data.forecast5Day[0].am.windSpeed;
    }
    else if(pmSpeed >= amSpeed && pmSpeed >= nightSpeed){
        maxSpeed = data.forecast5Day[0].pm.windSpeed;
    }
    else if(nightSpeed >= amSpeed && nightSpeed >= pmSpeed){
        maxSpeed = data.forecast5Day[0].night.windSpeed;
    }
	hideLoading();
	document.getElementById("b7").innerHTML = maxSpeed;
}

function displayLoc(data){
	var region = data.basicInfo.region;
	var name = data.basicInfo.name;
	var finalMountain = region + ", " + name;
	document.getElementById("loc").innerHTML = finalMountain;
}


