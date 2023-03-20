const myList = document.querySelector("ul");
import { access_token } from '../token.js';

const json_data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-03-14/all.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        // dateTime 값 출력
        for (var product of data["activities-heart"]) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += "dateTime : " + product.dateTime;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
        }
        for (var product2 of data["activities-heart"]) {
            const brr2 = document.createElement("br");
            for (var i = 0; i < product2.value.heartRateZones.length; i++) {
                const span2 = document.createElement("span");
                const br2 = document.createElement("br");
                var str2 = "";
                str2 += "caloriesOut : " + product2.value.heartRateZones[i].caloriesOut;
                str2 += " max : " + product2.value.heartRateZones[i].max;
                str2 += " min : " + product2.value.heartRateZones[i].min;
                str2 += " minutes : " + product2.value.heartRateZones[i].minutes;
                str2 += " name : " + product2.value.heartRateZones[i].name;
                span2.textContent = str2;
                document.body.appendChild(span2);
                document.body.appendChild(br2);
                document.body.appendChild(brr2);
            }
            // restingHeartRate 값 출력
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += "restingHeartRate : " + product2.value.restingHeartRate;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr2);
        }
        // dataset 값 출력
        for (var product of data["activities-heart-intraday"].dataset) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += "time : " + product.time;
            str += " value :" + product.value;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
        }
        // datasetInterval, datasetType 값 출력
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