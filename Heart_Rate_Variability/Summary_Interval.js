const $topBtn = document.querySelector(".moveTopBtn");
var myList = document.querySelector("ul");
import { access_token } from '../token.js';

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

var json_data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-02-27/today.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        for (var product of data.hrv) {
            console.log(product);
            var brr = document.createElement("br");
            var span = document.createElement("span");
            var br = document.createElement("br");
            var str = "";
            str += "dateTime : " + product.dateTime
            str += " dailyRmssd : " + product.value.dailyRmssd
            str += " deepRmssd : " + product.value.deepRmssd

            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);



        }
    })
    .catch(console.error);