let city = document.getElementById('city');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let containerHeures = document.getElementById('container-heures');



let search = document.getElementById('search');

search.addEventListener('focusout', function () {
    console.log(search.value);
    let searchValue = search.value;


    // let api = {
    //     key: "746e0549542a6b1f643fb945c9383cf8",
    //     base: "https://api.openweathermap.org/hours/2.5/"
    // }
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=746e0549542a6b1f643fb945c9383cf8&units=metric&lang=fr`;
    fetch(url)
    // fetch(`api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=746e0549542a6b1f643fb945c9383cf8&units=metric&lang=fr`)
    
        .then(response => response.json())
        .then(data => {
            console.log(data);
            city.innerText = data.city.name;
            temp.innerText = data.list[0].main.temp + "°C";
            desc.innerText = data.list[0].weather[0].description;
            humidity.innerText = data.list[0].main.humidity + "%";
            wind.innerText = data.list[0].wind.speed + "km/h";

            let count = 0;

            data.list.slice(1,7).forEach(hours => {
                console.log(hours);
                count++;

                containerHeures.innerHTML +=

                    `<div id="heure${count}" class="heure">
                        <p>${hours.dt_txt.slice(11,16)}</p>
                        <img src="http://openweathermap.org/img/w/${hours.weather[0].icon}.png" alt="Logo meteo" width="48px">
                        <p>${hours.main.temp}°C</p>
                        <p>${hours.weather[0].description}</p>
                        
                    </div>`
                    console.log()
            });

        });
})

