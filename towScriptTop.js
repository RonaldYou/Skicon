var resortName = sessionStorage.getItem("resortName");
 
const optionsT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
	}
};
let part1T = "https://ski-resort-forecast.p.rapidapi.com/";
let part2T = resortName;
let part3T = "/hourly?units=m&el=top&c=true";

let urlT = part1T + part2T + part3T;
// fetch(url, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


var loaderContainerT = document.getElementsByClassName('dot-flashingt');

const displayLoadingT = () => {
	for (var i=0;i<loaderContainerT.length;i+=1){
		loaderContainerT[i].style.display = 'block';
	}
};

const hideLoadingT = () => {
    for (var i=0;i<loaderContainerT.length;i+=1){
		loaderContainerT[i].style.display = 'none';
	}
};
displayLoadingT();
fetch(urlT,optionsT)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
		hideLoadingT();
		document.getElementById("t1").innerHTML = "error";
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(dataT => {
    console.log(dataT);
    displayTopt1(dataT);
	displayTopt2(dataT);
	displayTopt3(dataT);
	displayTopt4(dataT);
	displayTopt5(dataT);
	displayTopt6(dataT);
	displayTopt7(dataT);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayTopt1(dataT){
	const top = dataT.forecast;
	var rawMaxTempT = dataT.forecast[0].maxTemp;
	var maxTempT = rawMaxTempT.slice(0,-2);
	var maxTempIndexT = 0;
	for(let i in top){
		var rawTempT = dataT.forecast[i].maxTemp;
		var tempT = rawTempT.slice(0,-2);
		if (parseInt(maxTempT) < parseInt(tempT)){
			maxTempT = tempT;
			maxTempIndexT = i;
		}
	}
	console.log(dataT.forecast[maxTempIndexT].maxTemp);
	hideLoadingT();
	document.getElementById("t1").innerHTML = dataT.forecast[maxTempIndexT].maxTemp;
}

function displayTopt2(dataT){
	const top = dataT.forecast;
	var rawMinTempT = dataT.forecast[0].maxTemp;
	var minTempT = rawMinTempT.slice(0,-2);
	var minTempIndexT = 0;
	console.log(minTempT);
	for(let i in top){
		var rawTempT = dataT.forecast[i].maxTemp;
		var tempT = rawTempT.slice(0,-2);
		if (parseInt(minTempT) > parseInt(tempT)){
			minTempT = tempT;
			minTempIndexT = i;
		}
	}
	console.log(dataT.forecast[minTempIndexT].maxTemp);
	hideLoadingT();
	document.getElementById("t2").innerHTML = dataT.forecast[minTempIndexT].maxTemp;
}

function displayTopt3(dataT){
	const top = dataT.forecast;
	var sumT = 0;
	var counterT = 0;
	for(let i in top){
		sumT += parseInt(dataT.forecast[i].windChill);
		counterT++;
	}
	var avgT = Math.round(sumT/counterT);
	var strAvgT = avgT.toString();
	var finAvgT = strAvgT + "°C";
	hideLoadingT();
	document.getElementById("t3").innerHTML = finAvgT;
}

function displayTopt4(dataT){
	const top = dataT.forecast;
	var snowSumT = 0.0;
	for(let i in top){
		snowSumT += parseFloat(dataT.forecast[i].snow);
	}
	var snowSumTruncT = snowSumT.toFixed(1);
	var snowSumInterT =  snowSumTruncT.toString();
	var finSnowSumT = snowSumInterT + "cm";
	hideLoadingT();
	document.getElementById("t4").innerHTML = finSnowSumT;
}

function displayTopt5(dataT){
	const top = dataT.forecast;
	var rainSumT = 0.0;
	for(let i in top){
		rainSumT += parseFloat(dataT.forecast[i].rain);
	}
	var rainSumTruncT = rainSumT.toFixed(1);
	var rainSumInterT =  rainSumTruncT.toString();
	var finRainSumT = rainSumInterT + "mm";
	hideLoadingT();
	document.getElementById("t5").innerHTML = finRainSumT;
}

function displayTopt6(dataT){
	const top = dataT.forecast;
	var sumTT = 0;
	var counterTT = 0;
	for(let i in top){
		sumTT += parseInt(dataT.forecast[i].windSpeed);
		counterTT++;
	}
	var avgTT = Math.round(sumTT/counterTT);
	var strAvgTT = avgTT.toString();
	var finAvgTT = strAvgTT + "km/h";
	hideLoadingT();
	document.getElementById("t6").innerHTML = finAvgTT;
}

function displayTopt7(dataT){
	const top = dataT.forecast;
	var maxWindT = parseInt(dataT.forecast[0].windSpeed);
	var maxWindIndexT = 0;
	for(let i in top){
		var windT = parseInt(dataT.forecast[i].windSpeed);
		if (maxWindT < windT){
			maxWindT = windT;
			maxWindIndexT = i;
		}
	}
	console.log("maxWind" + maxWindT);
	hideLoadingT();
	document.getElementById("t7").innerHTML = dataT.forecast[maxWindIndexT].windSpeed;
}


