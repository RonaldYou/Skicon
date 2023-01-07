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
  .then(data => {
    console.log(data);
    displayTopt1(data);
	displayTopt2(data);
	displayTopt3(data);
	displayTopt4(data);
	displayTopt5(data);
	displayTopt6(data);
	displayTopt7(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  function displayTopt1(data){
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
	hideLoadingT();
	document.getElementById("t1").innerHTML = maxTemp;
}

function displayTopt2(data){
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
	hideLoadingT();
	document.getElementById("t2").innerHTML = minTemp;
}

function displayTopt3(data){
	var amTemp = parseInt(data.forecast5Day[0].am.windChill);
	var pmTemp = parseInt(data.forecast5Day[0].pm.windChill);
	var nightTemp = parseInt(data.forecast5Day[0].night.windChill);
    var sum = amTemp + pmTemp + nightTemp;
	var avg = Math.round(sum/3);
	var strAvg = avg.toString();
	var finAvg = strAvg + "°C";
	hideLoadingT();
	document.getElementById("t3").innerHTML = finAvg;
}

function displayTopt4(data){
	var amSnow = parseInt(data.forecast5Day[0].am.snow);
	var pmSnow = parseInt(data.forecast5Day[0].pm.snow);
	var nightSnow = parseInt(data.forecast5Day[0].night.snow);
    var snowSum = amSnow + pmSnow + nightSnow;
	var snowSumTrunc = snowSum.toFixed(1);
	var snowSumInter =  snowSumTrunc.toString();
	var finSnowSum = snowSumInter + "cm";
	hideLoadingT();
	document.getElementById("t4").innerHTML = finSnowSum;
}

function displayTopt5(data){
	var amRain = parseInt(data.forecast5Day[0].am.rain);
	var pmRain = parseInt(data.forecast5Day[0].pm.rain);
	var nightRain = parseInt(data.forecast5Day[0].night.rain);
    var rainSum = amRain + pmRain + nightRain;
	var rainSumTrunc = rainSum.toFixed(1);
	var rainSumInter =  rainSumTrunc.toString();
	var finRainSum = rainSumInter + "mm";
	hideLoadingT();
	document.getElementById("t5").innerHTML = finRainSum;
}

function displayTopt6(data){
	var amSpeed = parseInt(data.forecast5Day[0].am.windSpeed);
	var pmSpeed = parseInt(data.forecast5Day[0].pm.windSpeed);
	var nightSpeed = parseInt(data.forecast5Day[0].night.windSpeed);
    var sum = amSpeed + pmSpeed + nightSpeed;
	var avg = Math.round(sum/3);
	var strAvg = avg.toString();
	var finAvg = strAvg + "km/h";
	hideLoadingT();
	document.getElementById("t6").innerHTML = finAvg;
}

function displayTopt7(data){
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
	hideLoadingT();
	document.getElementById("t7").innerHTML = maxSpeed;
}
