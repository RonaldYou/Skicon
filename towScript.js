var resortName = sessionStorage.getItem("resortName");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3cf3ce7bemsh68f6de2ad6f5ffap108c6bjsn1ca8044ab34f',
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
	}
};
let part1 = "https://ski-resort-forecast.p.rapidapi.com/";
let part2 = "whistler";
let part3 = "/forecast?units=m&el=bot";

let url = part1 + part2 + part3;
fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));