import { access_token } from '../token.js';

// DOM 요소 가져오기
const myList = document.querySelector("ul");

// API 요청 보내기
fetch(
  "https://api.fitbit.com/1/user/-/activities/heart/date/2023-02-27/2023-03-17.json",
  {
    method: "GET",
    headers: { Authorization: "Bearer " + access_token },
  }
)
    .then(response => response.json())
    .then((data) => {
        for (const product of data["activities-heart"]) {
            const brr = document.createElement("br");
            const dateTxt = document.createElement("p");
            let str2 = "";
            str2 += "dateTime : " + product.dateTime;
            str2 += " restingHeartRate : " + product.value.restingHeartRate;
            dateTxt.textContent = str2;
            document.body.appendChild(dateTxt);
            console.log(product);
            for (var i = 0; i < product.value.heartRateZones.length; i++) {
                const span = document.createElement("span");
                const br = document.createElement("br");
                var str = "";
                str += " caloriesOut : " + product.value.heartRateZones[i].caloriesOut;
                str += " max : " + product.value.heartRateZones[i].max;
                str += " min : " + product.value.heartRateZones[i].min;
                str += " minutes : " + product.value.heartRateZones[i].minutes;
                str += " name : " + product.value.heartRateZones[i].name;
                span.textContent = str;
                document.body.appendChild(span);
                document.body.appendChild(br);
            }
        }
    })
    .catch(console.error);