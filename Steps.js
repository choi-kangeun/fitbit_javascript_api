import { access_token } from './token.js';

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
  .then((response) => response.json())
  .then((data) => {
    // 데이터를 DOM에 추가하기
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