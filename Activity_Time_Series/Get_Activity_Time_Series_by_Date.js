import { access_token } from '../token.js';

// DOM 요소 가져오기
const $topBtn = document.querySelector(".moveTopBtn");
const myList = document.querySelector("ul");

$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
        // value 값 출력
        for (const product of data["activities-steps"]) {
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            let str = "";
            str += "dateTime : " + product.dateTime;
            str += " value : " + product.value;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
        }
    })
    .catch(console.error);