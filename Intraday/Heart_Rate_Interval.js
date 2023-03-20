import { access_token } from '../token.js';

// DOM 요소 가져오기
const myList = document.querySelector("ul");

// API 요청 보내기
fetch(
  "https://api.fitbit.com/1/user/-/activities/steps/date/2023-03-05/7d.json",
  {
    method: "GET",
    headers: { Authorization: "Bearer " + access_token },
  }
)
    .then(response => response.json())
    .then((data) => {
        for (var product of data["activities-heart"]) {
            console.log(product);
            const brr = document.createElement("br");
            const dateTxt = document.createElement("p");
            var str = "";
            str += "dateTime : " + product.dateTime;
            str += " restingHeartRate : " + product.value.restingHeartRate;
            dateTxt.textContent = str;
            document.body.appendChild(dateTxt);
            for (var i = 0; i < product.value.heartRateZones.length; i++) {
                const span = document.createElement("span");
                const br = document.createElement("br");
                var str2 = "";
                str2 += "caloriesOut : " + product.value.heartRateZones[i].caloriesOut;
                str2 += " max : " + product.value.heartRateZones[i].max;
                str2 += " min : " + product.value.heartRateZones[i].min;
                str2 += " minutes : " + product.value.heartRateZones[i].minutes;
                str2 += " name : " + product.value.heartRateZones[i].name;
                span.textContent = str2;
                document.body.appendChild(span);
                document.body.appendChild(br);

            }
        }
    })
    .catch(console.error);