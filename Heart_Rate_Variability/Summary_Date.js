const myList = document.querySelector("ul");
import { access_token } from '../token.js';

const json_data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-03-14/all.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        for (var product of data.hrv) {
            const brr = document.createElement("br");
            console.log(product.value);
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += " dailyRmssd : " + product.value.dailyRmssd
            str += " deepRmssd : " + product.value.deepRmssd

            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);



        }
    })
    .catch(console.error);