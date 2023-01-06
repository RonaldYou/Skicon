var resortName = sessionStorage.getItem("resortName");

const optionsT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3cf3ce7bemsh68f6de2ad6f5ffap108c6bjsn1ca8044ab34f',
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


var loaderContainer = document.getElementsByClassName('dot-flashing');

const displayLoadingT = () => {
	for (var i=0;i<loaderContainer.length;i+=1){
		loaderContainer[i].style.display = 'block';
	}
};

const hideLoadingT = () => {
    for (var i=0;i<loaderContainer.length;i+=1){
		loaderContainer[i].style.display = 'none';
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
	const top = data.forecast;
	var rawMaxTemp = data.forecast[0].maxTemp;
	var maxTemp = rawMaxTemp.slice(0,-2);
	var maxTempIndex = 0;
	for(let i in top){
		var rawTemp = data.forecast[i].maxTemp;
		var temp = rawTemp.slice(0,-2);
		if (parseInt(maxTemp) < parseInt(temp)){
			maxTemp = temp;
			maxTempIndex = i;
		}
	}
	console.log(data.forecast[maxTempIndex].maxTemp);
	hideLoadingT();
	document.getElementById("t1").innerHTML = data.forecast[maxTempIndex].maxTemp;
}

function displayTopt2(data){
	const top = data.forecast;
	var rawMinTemp = data.forecast[0].maxTemp;
	var minTemp = rawMinTemp.slice(0,-2);
	var minTempIndex = 0;
	console.log(minTemp);
	for(let i in top){
		var rawTemp = data.forecast[i].maxTemp;
		var temp = rawTemp.slice(0,-2);
		if (parseInt(minTemp) > parseInt(temp)){
			minTemp = temp;
			minTempIndex = i;
		}
	}
	console.log(data.forecast[minTempIndex].maxTemp);
	hideLoadingT();
	document.getElementById("t2").innerHTML = data.forecast[minTempIndex].maxTemp;
}

function displayTopt3(data){
	const top = data.forecast;
	var sum = 0;
	var counter = 0;
	for(let i in top){
		sum += parseInt(data.forecast[i].windChill);
		counter++;
	}
	var avg = Math.round(sum/counter);
	var strAvg = avg.toString();
	var finAvg = strAvg + "°C";
	hideLoadingT();
	document.getElementById("t3").innerHTML = finAvg;
}

function displayTopt4(data){
	const top = data.forecast;
	var snowSum = 0.0;
	for(let i in top){
		snowSum += parseFloat(data.forecast[i].snow);
	}
	var snowSumTrunc = snowSum.toFixed(1);
	var snowSumInter =  snowSumTrunc.toString();
	var finSnowSum = snowSumInter + "cm";
	hideLoadingT();
	document.getElementById("t4").innerHTML = finSnowSum;
}

function displayTopt5(data){
	const top = data.forecast;
	var rainSum = 0.0;
	for(let i in top){
		rainSum += parseFloat(data.forecast[i].rain);
	}
	var rainSumTrunc = rainSum.toFixed(1);
	var rainSumInter =  rainSumTrunc.toString();
	var finRainSum = rainSumInter + "mm";
	hideLoadingT();
	document.getElementById("t5").innerHTML = finRainSum;
}

function displayTopt6(data){
	const top = data.forecast;
	var sum = 0;
	var counter = 0;
	for(let i in top){
		sum += parseInt(data.forecast[i].windSpeed);
		counter++;
	}
	var avg = Math.round(sum/counter);
	var strAvg = avg.toString();
	var finAvg = strAvg + "km/h";
	hideLoadingT();
	document.getElementById("t6").innerHTML = finAvg;
}

function displayTopt7(data){
	const top = data.forecast;
	var maxWind = parseInt(data.forecast[0].windSpeed);
	var maxWindIndex = 0;
	for(let i in top){
		var wind = parseInt(data.forecast[i].windSpeed);
		if (maxWind < wind){
			maxWind = wind;
			maxWindIndex = i;
		}
	}
	console.log("maxWind" + maxWind);
	hideLoadingT();
	document.getElementById("t7").innerHTML = data.forecast[maxWindIndex].windSpeed;
}


