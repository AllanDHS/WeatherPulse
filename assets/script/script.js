let city = document.getElementById('city');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');


let search = document.getElementById('search');

search.addEventListener('focusout', function () {
    console.log(search.value);
    let searchValue = search.value;


    let api = {
        key: "746e0549542a6b1f643fb945c9383cf8",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    fetch(`${api.base}forecast?q=${searchValue}&lang=fr&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            city.innerText = data.city.name;
            temp.innerText = data.main.temp;
            desc.innerText = data.weather[0].description;
        })

});