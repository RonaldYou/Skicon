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
let part3 = "/hourly?units=m&el=bot&c=true";

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
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayBottomb1(data);
	displayBottomb2(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayBottomb1(data){
	const bottom = data.forecast;
	var rawMaxTemp = data.forecast[0].maxTemp;
	var maxTemp = rawMaxTemp.slice(0,-2);
	var maxTempIndex = 0;
	for(let i in bottom){
		var rawTemp = data.forecast[i].maxTemp;
		var temp = rawTemp.slice(0,-2);
		if (parseInt(maxTemp) < parseInt(temp)){
			console.log(temp);
			console.log(maxTemp);
			maxTemp = temp;
			maxTempIndex = i;
		}
	}
	// console.log("final");
	// console.log(minTempIndex);
	// console.log(minTemp);
	console.log(data.forecast[maxTempIndex].maxTemp);
	hideLoading();
	document.getElementById("b1").innerHTML = data.forecast[maxTempIndex].maxTemp;
	// const bottomDiv = document.getElementById("bottom");
	// const highOf =
}

function displayBottomb2(data){
	const bottom = data.forecast;
	var rawMinTemp = data.forecast[0].maxTemp;
	var minTemp = rawMinTemp.slice(0,-2);
	var minTempIndex = 0;
	console.log(minTemp);
	for(let i in bottom){
		var rawTemp = data.forecast[i].maxTemp;
		var temp = rawTemp.slice(0,-2);
		if (parseInt(minTemp) > parseInt(temp)){
			console.log(temp);
			console.log(minTemp);
			minTemp = temp;
			minTempIndex = i;
		}
	}
	// console.log("final");
	// console.log(minTempIndex);
	// console.log(minTemp);
	console.log(data.forecast[minTempIndex].maxTemp);
	hideLoading();
	document.getElementById("b2").innerHTML = data.forecast[minTempIndex].maxTemp;
	// const bottomDiv = document.getElementById("bottom");
	// const highOf =
}

