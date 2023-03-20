const myList = document.querySelector("ul");
import { access_token } from '../token.js';

const json_data = fetch('https://api.fitbit.com/1/user/-/hrv/date/2023-03-14/all.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        for (var product of data.hrv) {
            console.log(product);
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

        for (var product of data.hrv) {
            const brr = document.createElement("br");
            for (var i = 0; i < product.minutes.length; i++) {
                const span = document.createElement("span");
                const br = document.createElement("br");
                var str = "";
                str += "minutes : " + product.minutes[i].minute;
                str += " rmssd : " + product.minutes[i].value.rmssd;
                str += " coverage : " + product.minutes[i].value.coverage;
                str += " hf : " + product.minutes[i].value.hf;
                str += " lf : " + product.minutes[i].value.lf;
                span.textContent = str;
                document.body.appendChild(span);
                document.body.appendChild(br);
                document.body.appendChild(brr);
            }
        }
    })
    .catch(console.error);