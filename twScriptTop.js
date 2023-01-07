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
let part3T = "/forecast?units=m&el=top";

let urlT = part1T + part2T + part3T;


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
  .then(dataT=> {
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
	var amTempT = parseInt(dataT.forecast5Day[0].am.maxTemp);
	var pmTempT = parseInt(dataT.forecast5Day[0].pm.maxTemp);
	var nightTempT = parseInt(dataT.forecast5Day[0].night.maxTemp);
    var maxTempT;
    if(amTempT >= pmTempT && amTempT >= nightTempT){
        maxTempT = dataT.forecast5Day[0].am.maxTemp;
    }
    else if(pmTempT >= amTempT && pmTempT >= nightTempT){
        maxTempT = dataT.forecast5Day[0].pm.maxTemp;
    }
    else if(nightTempT >= amTempT && nightTempT >= pmTempT){
        maxTempT = dataT.forecast5Day[0].night.maxTemp;
    }
	hideLoadingT();
	document.getElementById("t1").innerHTML = maxTempT;
}

function displayTopt2(dataT){
	var amTempT = parseInt(dataT.forecast5Day[0].am.minTemp);
	var pmTempT = parseInt(dataT.forecast5Day[0].pm.minTemp);
	var nightTempT = parseInt(dataT.forecast5Day[0].night.minTemp);
    var minTempT;
    if(amTempT <= pmTempT && amTempT <= nightTempT){
        minTempT = dataT.forecast5Day[0].am.minTemp;
    }
    else if(pmTempT <= amTempT && pmTempT <= nightTempT){
        minTempT = dataT.forecast5Day[0].pm.minTemp;
    }
    else if(nightTempT <= amTempT && nightTempT <= pmTempT){
        minTempT = dataT.forecast5Day[0].night.minTemp;
    }
	hideLoadingT();
	document.getElementById("t2").innerHTML = minTempT;
}

function displayTopt3(dataT){
	var amTempT = parseInt(dataT.forecast5Day[0].am.windChill);
	var pmTempT = parseInt(dataT.forecast5Day[0].pm.windChill);
	var nightTempT = parseInt(dataT.forecast5Day[0].night.windChill);
    var sumT = amTempT + pmTempT + nightTempT;
	var avgT = Math.round(sumT/3);
	var strAvgT = avgT.toString();
	var finAvgT = strAvgT + "°C";
	hideLoadingT();
	document.getElementById("t3").innerHTML = finAvgT;
}

function displayTopt4(dataT){
	var amSnowT = parseInt(dataT.forecast5Day[0].am.snow);
	var pmSnowT = parseInt(dataT.forecast5Day[0].pm.snow);
	var nightSnowT = parseInt(dataT.forecast5Day[0].night.snow);
    var snowSumT = amSnowT + pmSnowT + nightSnowT;
	var snowSumTruncT = snowSumT.toFixed(1);
	var snowSumInterT =  snowSumTruncT.toString();
	var finSnowSumT = snowSumInterT + "cm";
	hideLoadingT();
	document.getElementById("t4").innerHTML = finSnowSumT;
}

function displayTopt5(dataT){
	var amRainT = parseInt(dataT.forecast5Day[0].am.rain);
	var pmRainT = parseInt(dataT.forecast5Day[0].pm.rain);
	var nightRainT = parseInt(dataT.forecast5Day[0].night.rain);
    var rainSumT = amRainT + pmRainT + nightRainT;
	var rainSumTruncT = rainSumT.toFixed(1);
	var rainSumInterT =  rainSumTruncT.toString();
	var finRainSumT = rainSumInterT + "mm";
	hideLoadingT();
	document.getElementById("t5").innerHTML = finRainSumT;
}

function displayTopt6(dataT){
	var amSpeedT = parseInt(dataT.forecast5Day[0].am.windSpeed);
	var pmSpeedT = parseInt(dataT.forecast5Day[0].pm.windSpeed);
	var nightSpeedT = parseInt(dataT.forecast5Day[0].night.windSpeed);
    var sumT = amSpeedT + pmSpeedT + nightSpeedT;
	var avgT = Math.round(sumT/3);
	var strAvgT = avgT.toString();
	var finAvgT = strAvgT + "km/h";
	hideLoadingT();
	document.getElementById("t6").innerHTML = finAvgT;
}

function displayTopt7(dataT){
	var amSpeedT = parseInt(dataT.forecast5Day[0].am.windSpeed);
	var pmSpeedT = parseInt(dataT.forecast5Day[0].pm.windSpeed);
	var nightSpeedT = parseInt(dataT.forecast5Day[0].night.windSpeed);
    var maxSpeedT;
    if(amSpeedT >= pmSpeedT && amSpeedT >= nightSpeedT){
        maxSpeedT = dataT.forecast5Day[0].am.windSpeed;
    }
    else if(pmSpeedT >= amSpeedT && pmSpeedT >= nightSpeedT){
        maxSpeedT = dataT.forecast5Day[0].pm.windSpeed;
    }
    else if(nightSpeedT >= amSpeedT && nightSpeedT >= pmSpeedT){
        maxSpeedT = dataT.forecast5Day[0].night.windSpeed;
    }
	hideLoadingT();
	document.getElementById("t7").innerHTML = maxSpeedT;
}
