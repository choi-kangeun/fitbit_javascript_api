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
            //console.log(product.length);
            //console.log("len : " + product.value);
            //for (var i = 0; i < 2; i++) {
            const span = document.createElement("span");
            const br = document.createElement("br");
            var str = "";
            /*                            console.log(product.minutes[i]);
                                        console.log("min : "+product.minutes[i].minute);
                                        console.log("value : "+product.minutes[i].value);
                                        console.log("rmssd : "+product.minutes[i].value.rmssd);
                                        console.log("coverage : "+product.minutes[i].value.coverage);
                                        console.log("hf : "+product.minutes[i].value.hf);
                                        console.log("lf : "+product.minutes[i].value.lf);*/
            str += "dailyRmssd : " + product.value.dailyRmssd;
            str += " deepRmssed : " + product.value.deepRmssd;
            //str += " hf : " + product.value[i].hf
            //str += " lf : " + product.value[i].lf

            span.textContent = str;
            document.body.appendChild(span);
            document.body.appendChild(br);

            //}
            document.body.appendChild(brr);



        }
    })
    .catch(console.error);