import { access_token } from '../token.js';

const $topBtn = document.querySelector(".moveTopBtn");

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const myList = document.querySelector("ul");
const aaa = document.getElementById("aaa");
const json_data = fetch('https://api.fitbit.com/1.2/user/-/sleep/date/2023-02-27/2023-03-21.json', {
    method: "GET",
    headers: { "Authorization": "Bearer " + access_token },
})
    .then(response => response.json())
    .then((data) => {
        for (var product of data.sleep) {
            console.log(product);
            const brr = document.createElement("br");
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            str += "dateOfSleep : " + product.dateOfSleep;
            str += " duration : " + product.duration;
            str += " efficiency : " + product.efficiency;
            str += " endTime " + product.endTime;
            str += " infoCode : " + product.infoCode;
            str += " isMainSleep : " + product.isMainSleep;
            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);
            document.body.appendChild(brr);
            for (var i = 0; i < product.levels.data.length; i++) {
                const br3 = document.createElement("br");
                const span2 = document.createElement("span");
                const br2 = document.createElement("br");
                var str2 = "";
                str2 += "dateTime : " + product.levels.data[i].dateTime;
                str2 += " level : " + product.levels.data[i].level;
                str2 += " seconds : " + product.levels.data[i].seconds;
                span2.textContent = str2;
                document.body.appendChild(span2);
                document.body.appendChild(br2);
                document.body.appendChild(br3);
            }
        }
    })
    .catch(console.error);