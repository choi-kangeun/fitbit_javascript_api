import { access_token } from '../token.js';

// DOM 요소 가져오기
const $topBtn = document.querySelector(".moveTopBtn");
const myList = document.querySelector("ul");

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// API 요청 보내기
fetch(
    "https://api.fitbit.com/1/user/-/activities/heart/date/2023-02-27/today/1min.json",
    {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
    }
)
    .then(response => response.json())
    .then((data) => {
        for (const product of data["activities-heart"]) {
            console.log(product);
            const brr = document.createElement("br");
            const dateTxt = document.createElement("p");
            let str = "";
            str += "dateTime : " + product.dateTime;
            str += " restingHeartRate : " + product.value.restingHeartRate;
            dateTxt.textContent = str;
            document.body.appendChild(dateTxt);
            for (let i = 0; i < product.value.heartRateZones.length; i++) {
                const span = document.createElement("span");
                const br = document.createElement("br");
                let str2 = "";
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