import { access_token } from '../token.js';

// DOM 요소 가져오기
const $topBtn = document.querySelector(".moveTopBtn");
const myList = document.querySelector("ul");

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

// API 요청 보내기
fetch(
    "https://api.fitbit.com/1/user/-/activities/heart/date/2023-03-17/1d.json",
    {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
    }
)
    .then(response => response.json())
    .then((data) => {
        // dateTime 값 출력
        for (let product of data["activities-heart"]) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            let str = "";
            str += "dateTime : " + product.dateTime;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
        }
        for (let product2 of data["activities-heart"]) {
            let brr2 = document.createElement("br");
            for (let i = 0; i < product2.value.heartRateZones.length; i++) {
                let span2 = document.createElement("span");
                let br2 = document.createElement("br");
                let str2 = "";
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
            let str = "";
            str += "restingHeartRate : " + product2.value.restingHeartRate;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr2);
        }
        // dataset 값 출력
        for (const product of data["activities-heart-intraday"].dataset) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            let str = "";
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
        let str = "";
        str += "datasetInterval : " + data["activities-heart-intraday"].datasetInterval;
        str += " datasetType : " + data["activities-heart-intraday"].datasetType;
        span.textContent = str;
        document.body.appendChild(span);
        document.body.appendChild(br);
        document.body.appendChild(brr);
    })
    .catch(console.error);