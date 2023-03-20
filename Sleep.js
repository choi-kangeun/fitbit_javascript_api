import { access_token } from './token.js';

const myList = document.querySelector("ul");
            const aaa = document.getElementById("aaa");
            const json_data = fetch('https://api.fitbit.com/1.2/user/-/sleep/date/2023-03-05.json', {
                method: "GET",
                headers: { "Authorization": "Bearer " + access_token },
            })
                .then(response => response.json())
                .then((data) => {
                    for (const product of data.sleep) {
                        const brr = document.createElement("br");
                        console.log(product.levels.data);
                        console.log(product.levels.shortData);
                        console.log(product.levels.summary);
                        //console.log("len : " + product.levels.data.length);
                        //for (var i = 0; i < product.levels.data.length; i++) {
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
                        str += "dateOfSleep : " + product.dateOfSleep;
                        str += " duration : " + product.duration;
                        str += " efficiency : " + product.efficiency;
                        str += " endTime : " + product.endTime;
                        str += " infoCode : " + product.infoCode;
                        str += " isMainSleep : " + product.isMainSleep;

                        span.textContent = str;
                        document.body.appendChild(span);
                        document.body.appendChild(br);
                        //}
                        document.body.appendChild(brr);

                        for (var i = 0; i < product.levels.data.length; i++) {
                            const span = document.createElement("span");
                            const br = document.createElement("br");
                            var str = "";
                            str += "dateTime :" + product.levels.data[i].dateTime;
                            str += " level :" + product.levels.data[i].level;
                            str += " seconds :" + product.levels.data[i].seconds;

                            span.textContent = "[" + i + "]" + str;
                            document.body.appendChild(span);
                            document.body.appendChild(br);
                            document.body.appendChild(brr);


                        }

                        //for (var i = 0; i < product.levels.shortData.length; i++) {
                            //const span = document.createElement("span");
                            //const br = document.createElement("br");
                            //var str = "";
                            //str += "dateTime :" + product.levels.shortData[i].dateTime;
                            //str += " level :" + product.levels.shortData[i].level;
                            //str += " seconds :" + product.levels.shortData[i].seconds;

                            //span.textContent = "[" + i + "]" + str;
                            //document.body.appendChild(span);
                            //document.body.appendChild(br);


                        //}
                        
                        //for (const product of data.sleep) {
                        //    var str = "";
                        //    str += "count :" + product.levels.summary.deep.count;
                        //    str += " minutes :" + product.levels.summary.deep.minutes;
                        //    str += " thirtyDayAvgMinutes :" + product.levels.summary.deep.thirtDayAvgMinutes;
                        //    span.textContent = str;
                        //}

                    }
                })
                .catch(console.error);