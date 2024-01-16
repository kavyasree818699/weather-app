const input_box = document.querySelector('.input-box')
const search = document.getElementById('search')
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const error = document.querySelector('.error')
const weather_body = document.querySelector('.weather-body')

async function checkWeather(city){
    const api_key = `abd587ac6ad560e18f300c9371a267b6`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(result=>result.json()); 
    console.log(weather_data);

    if(weather_data.cod === '404'){
      error.style.display = "flex";
      weather_body.style.display = "none"
        console.log('error');
        return;
    }
     
    error.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 270.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;
    humidity.innerHTML = `${weather_data.main.humidity}%`

  
switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = 'cloud.png';
        break;
        case 'Clear':
            weather_img.src = 'clear.png';
            break;
            case 'Mist':
                weather_img.src = 'mist.png';
                break;
                case 'Rain':
                    weather_img.src = 'rain.png';
                    break;
                    case 'Snow':
                        weather_img.src = 'snow.png';
                        break;

}

}
search.addEventListener("click", function(){
    checkWeather(input_box.value)

    
})
