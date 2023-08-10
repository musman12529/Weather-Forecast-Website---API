const api = "https://api.openweathermap.org/data/2.5/weather?&appid=4f3211e228da2bd8814a92cae6f88364&units=metric&q="

async function weather(city ='toronto' ){
   
    let weatherIcon = document.querySelector(".weather-icon");

    const fetcher=  await fetch(api+city);
    let data= await fetcher.json();
    console.log(data);
    document.querySelector(".name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+(  "°C");
    document.querySelector(".humid-perct").innerHTML=(data.main.humidity)+" "+"%";
    document.querySelector(".wind-perct").innerHTML=data.wind.speed +" "+"km/h";

    if (data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";

    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";}
    
    
    
}

function weatherUpdater(){
    let gcity=document.querySelector(".entercity");
    let city= gcity.value;
    weather(city);
    gcity.value="";
    
    

}
const search=document.querySelector(".searchbutton")
search.addEventListener('click',weatherUpdater);

const cityInput = document.querySelector('.entercity');
cityInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        weatherUpdater(); // Trigger weather update when Enter key is pressed
    }
});

weather();