function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector("#london-date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonCurrentTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonCurrentTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonCurrentTime.format("HH:mm:ss");
  }
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoCurrentTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoCurrentTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
          </div>
          </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
