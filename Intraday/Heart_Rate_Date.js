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
        // dataTime 값 출력
        for (var product of data["activities-heart"]) {
            console.log(product);
            const brr = document.createElement("br");
            const dateTxt = document.createElement("p");
            var str2 = "";
            str2 += "dateTime : " + product.dateTime;
            dateTxt.textContent = str2;
            document.body.appendChild(dateTxt);
        }
        // caloriesOut, max, min, minutes, name 값 출력
        for (var product of data["activities-heart"]) {
            const brr = document.createElement("br");
            for (var i = 0; i < product.heartRateZones.length; i++) {
                const span = document.createElement("span");
                const br = document.createElement("br");
                var str = "";
                str += "caloriesOut : " + product.heartRateZones[i].caloriesOut;
                str += " max : " + product.heartRateZones[i].max;
                str += " min : " + product.heartRateZones[i].min;
                str += " minutes : " + product.heartRateZones[i].minutes;
                str += " name : " + product.heartRateZones[i].name;
                span.textContent = str;
                document.body.appendChild(span);
                document.body.appendChild(br);
                document.body.appendChild(brr);
            }
            // value 값 출력
            for (var product of data["activities-heart"]) {
                const brr = document.createElement("br");
                const span = document.createElement("span");
                const br = document.createElement("br");
                var str = "";
                str += "value : " + product.value;
                span.textContent = str;
                document.body.appendChild(span);
                document.body.appendChild(br);
                document.body.appendChild(brr);
            }
        }
        // time, value 값 출력
        for (var product of data["activities-heart-intraday"].dataset) {
            console.log(product);
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += "time : " + product.time;
            str += " value : " + product.value;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
        }

        // datasetIntervl, datasetaType 값 출력
        const brr = document.createElement("br");
        const span = document.createElement("span");
        const br = document.createElement("br");
        var str = "";
        str += "datasetInterval : " + data["activities-heart-intraday"].datasetInterval;
        str += " datasetType : " + data["activities-heart-intraday"].datasetType;
        span.textContent = str;
        document.body.appendChild(span);
        document.body.appendChild(br);
        document.body.appendChild(brr);
    })
    .catch(console.error);