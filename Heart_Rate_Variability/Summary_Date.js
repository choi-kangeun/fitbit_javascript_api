const $topBtn = document.querySelector(".moveTopBtn");
const myList = document.querySelector("ul");
import { access_token } from '../token.js';

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

const json_data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-03-02.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        for (const product of data.hrv) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            let str = "";
            str += " dailyRmssd : " + product.value.dailyRmssd
            str += " deepRmssd : " + product.value.deepRmssd

            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);



        }
    })
    .catch(console.error);