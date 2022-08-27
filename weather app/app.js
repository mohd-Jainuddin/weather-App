const item = document.querySelector("#item");
const search = document.querySelector(".btn");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let min_max = document.querySelector(".max-min");
let cloud = document.querySelector("#cloud");
console.log(cloud)



search.addEventListener("click", () => {
    weather(item.value);
})

function weather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fae37a0d30ab91407262428a55b1acaa`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            city.innerText = `City Name: ${data.name}`
            temp.innerHTML = `${Math.floor(data["main"].temp - 273)} °C`
            min_max.innerHTML = `Min.${Math.floor(data["main"].temp_min - 273)}°C / Max.${Math.floor(data["main"].temp_max - 273)}°C`
            cloud.innerText = data["weather"][0].main;
        })
        .catch(error => alert("can not found"))
}
