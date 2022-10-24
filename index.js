

function getWeather(){
    let search = document.getElementById("city");
    let report = document.getElementById("report")
    let highnlow = document.getElementById("highnlow")
    let gif = document.getElementById("gif")
    let undergif = document.getElementById("undergif")
    if (!search.value) {
    search = "newyork";
    } else {
    search = search.value;
    }

    async function getWeatherData(units = 'imperial'){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=441b38172d5ef02288f3174e22bc9a76&units=${units}`);
        const weather = await response.json();
        
        const high = weather.main.temp_max;
        const low = weather.main.temp_min;
        const description = weather.weather[0].main
        report.innerText = `In ${search}: It is ${weather.main.temp} degrees Fahrenheit, but it allegedly "feels like" ${weather.main.feels_like}`;
        highnlow.innerText = `The high is ${high} and the low is ${low}`;
        undergif.innerText = `oh and by the way its: ${description}y`;

        const gifResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UlTg5bLr1rAYntELKerokQoS8SFpWAyu&s=${description}`, {mode: 'cors'});
        const weatherGif = await gifResponse.json();
        gif.src = weatherGif.data.images.original.url;
        var body = document.getElementsByTagName('body')[0];

        if(weather.main.temp < 90){
        body.style.backgroundImage = 'url(blue.jpg)';
        }
        else{
            body.style.backgroundImage = 'url(red.jpg)';
        }
        console.log(weather)
        console.log(description)
        return weather;
    }
    getWeatherData();
}


//Returns the weather information for a location in the form of a promise, result may be passed as a param as location, but named weather as a result


async function getHighAndLow(location){
    const weather = await location;
    
}




  function displayInfo(){
    let location = document.getElementById("city");
    console.log(location);
  }

 
