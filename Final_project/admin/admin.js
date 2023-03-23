
const API_URL = "https://63aa9d20fdc006ba6046fffd.mockapi.io";
function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
}

function btnleft() {
    document.getElementById("wrapper").style.display = "block";

}
function btnhome() {
    document.getElementById("wrapper").style.display = "none";
}
// Thêm dữ liệu left vào mock
fetch('right_top.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (datarightjson) {
        appendData(datarightjson)
    });
async function appendData(_datarightjson) {
    try {
        for (var i = 0; i < _datarightjson.length; i++) {
            console.log(_datarightjson.length, "Bot_data")
            var xet = 0;
            const response = await callAPI("/Bot_data");
            const datamock = response.data;
            console.log(datamock, 'datamock');
            console.log(_datarightjson, 'databotjson');
            var b_timejson = _datarightjson[i].Time;
            var onedata = {
                Tag: _datarightjson[i].Tag,
                Check: _datarightjson[i].Check,
                id: datamock.length + 1,
                Title: _datarightjson[i].Title,
                Title_URL: _datarightjson[i].Title_URL,
                Time: _datarightjson[i].Time,
                Summary: null,
                Image: _datarightjson[i].Image,
                Image1: _datarightjson[i].Image1,
                Title1: _datarightjson[i].Title1,
                Image2: _datarightjson[i].Image2,
                Title2: _datarightjson[i].Title2,
                Title3: _datarightjson[i].Title3,
                Image3: _datarightjson[i].Image3,
            }
            for (var j = 0; j < datamock.length; j++) {
                var b_timemock = datamock[j].Time;
                if (b_timejson == b_timemock) {
                    xet = xet + 1
                    break
                }
            };
            if (xet == 0) {
                callAPI(`Bot_data`, "POST", onedata).then((response) => {
                    show();

                })
            };
        }
    } catch (error) {
        console.error(error);
    }
};
// Thêm dữ liệu top_top vào mock
fetch('top_top.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (datatopjson) {
        appendData(datatopjson)
    });
async function appendData(_datatopjson) {
    try {
        for (var i = 0; i < _datatopjson.length; i++) {
            console.log(_datatopjson.length, "Bot_data")
            var xet = 0;
            const response = await callAPI("/Bot_data");
            const datamock = response.data;
            console.log(datamock, 'datamock');
            console.log(_datatopjson, 'databotjson');
            var b_timejson = _datatopjson[i].Time;
            var onedata = {
                Check: _datatopjson[i].check,
                id: datamock.length + 1,
                Title: _datatopjson[i].Title,
                Title_URL: _datatopjson[i].Title_URL,
                Time: _datatopjson[i].Time,
                Image: _datatopjson[i].Image,
            }
            for (var j = 0; j < datamock.length; j++) {
                var b_timemock = datamock[j].Time;
                if (b_timejson == b_timemock) {
                    xet = xet + 1
                    break
                }
            };
            if (xet == 0) {
                callAPI(`Bot_data`, "POST", onedata).then((response) => {
                    show();
                })
            };
        }
    } catch (error) {
        console.error(error);
    }

};

// // Thêm dữ liệu top_bottom vào mock
fetch('top_bottom.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (databotbottomjson) {
        appendData(databotbottomjson)
    });
async function appendData(_databotbottomjson) {
    try {
        for (var i = 0; i < _databotbottomjson.length; i++) {
            console.log(_databotbottomjson.length, "Bot_data")
            var xet = 0;
            const response = await callAPI("/Bot_data");
            const datamock = response.data;
            console.log(datamock, 'datamock');
            console.log(_databotbottomjson, 'databotjson');
            var b_timejson = _databotbottomjson[i].Time;
            var onedata = {
                Check: _databotbottomjson[i].check,
                id: datamock.length + 1,
                Title: _databotbottomjson[i].Title,
                Title_URL: _databotbottomjson[i].Title_URL,
                Time: _databotbottomjson[i].Time,
                Image: _databotbottomjson[i].Image,
                Tag: null,
                Summary: null,
                Image1: null,
                Title1: null,
                Image2: null,
                Title2: null,
                Title3: null,
                Image3: null,
            }
            for (var j = 0; j < datamock.length; j++) {
                var b_timemock = datamock[j].Time;
                if (b_timejson == b_timemock) {
                    xet = xet + 1
                    break
                }
            };
            if (xet == 0) {
                callAPI(`Bot_data`, "POST", onedata).then((response) => {
                    show();
                })
            };
        }
    } catch (error) {
        console.error(error);
    }

};

// Thêm dữ liệu left data vào mock
fetch('leftdata.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (databotjson) {
        appendData(databotjson)
    });
async function appendData(_databotjson) {
    try {
        for (var i = 0; i < _databotjson.length; i++) {
            console.log(_databotjson.length, "Bot_data")
            var xet = 0;
            const response = await callAPI("/Bot_data");
            const datamock = response.data;
            console.log(datamock, 'datamock');
            console.log(_databotjson, 'databotjson');
            var b_timejson = _databotjson[i].Time;
            var onedata = {
                Check: _databotjson[i].check,
                id: datamock.length + 1,
                Title: _databotjson[i].Title,
                Title_URL: _databotjson[i].Title_URL,
                Time: _databotjson[i].Time,
                Summary: _databotjson[i].Summary,
                Image: _databotjson[i].Image,
                Tag: null,
                Image1: null,
                Title1: null,
                Image2: null,
                Title2: null,
                Title3: null,
                Image3: null,
            }
            for (var j = 0; j < datamock.length; j++) {
                var b_timemock = datamock[j].Time;
                if (b_timejson == b_timemock) {
                    xet = xet + 1
                    break
                }
            };
            if (xet == 0) {
                callAPI(`Bot_data`, "POST", onedata).then((response) => {
                    show();

                })
            };
        }
    } catch (error) {
        console.error(error);
    }
};

// thêm dữ liệu chủ đề nổi bật vào mock
fetch('chudenoibat.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (dataCHUDEtjson) {
        appendData(dataCHUDEtjson)
    });
async function appendData(_dataCHUDEtjson) {
    try {
        for (var i = 0; i < _dataCHUDEtjson.length; i++) {
            console.log(_dataCHUDEtjson.length, "Bot_data")
            var xet = 0;
            const response = await callAPI("/Bot_data");
            const datamock = response.data;
            console.log(datamock, 'datamock');
            console.log(_dataCHUDEtjson, 'databotjson');
            var b_timejson = _dataCHUDEtjson[i].Time;
            var onedata = {
                Check: _dataCHUDEtjson[i].Check,
                id: datamock.length + 1,
                Title: _dataCHUDEtjson[i].Title,
                Title_URL: _dataCHUDEtjson[i].Title_URL,
                Time: _dataCHUDEtjson[i].Time,
                Summary: null,
                Image: null,
                Image1: null,
                Title1: null,
                Image2: null,
                Title2: null,
                Title3: null,
                Image3: null,
            }
            for (var j = 0; j < datamock.length; j++) {
                var b_timemock = datamock[j].Time;
                if (b_timejson == b_timemock) {
                    xet = xet + 1
                    break
                }
            };
            if (xet == 0) {
                callAPI(`Bot_data`, "POST", onedata).then((response) => {
                    show();

                })
            };
        }
    } catch (error) {
        console.error(error);
    }
};


var id;
function save() {
    // document.getElementById("huy").style.display = "none";
    // document.getElementById("themmoi").style.display = "block";
    // document.getElementById("divAddHotel").style.display = "none";
    let datamockid = [];
    callAPI(`Bot_data`, "GET", null).then((res) => {
        datamockid = res.data;
    })
    for (let i = 0; i < datamockid.length; i++) {
        id = i;
    }
    var Title = document.getElementById("bot_title").value;
    var Title_URL = document.getElementById("bot_url").value;
    var Time = document.getElementById("bot_time").value;
    var Image = document.getElementById("bot_img").value;
    var Summary = document.getElementById("bot_summary").value;
    if (bot_title | bot_url | bot_time | bot_summary | (bot_img != "")) {
        var onedata = {
            id,
            Title: Title,
            Title_URL: Title_URL,
            Time: Time,
            Summary: Summary,
            Image: Image,
        };
        callAPI(`Bot_data`, "POST", onedata).then((response) => {
            show();
            alert("Thêm thủ công thành công");
        });
    } else {
        reset();
    }
}
function show() {
    var botdata = [];
    callAPI(`Bot_data`, "GET", null).then((res) => {
        botdata = res.data;

        let row = "";
        for (i in botdata) {
            row += "<tr>";
            row += "<td>" + botdata[i].id + "</td>";
            row += "<td>" + botdata[i].Title + "</td>";
            row += "<td>" + "<img src='" + botdata[i].Title_URL + "style='width: 80px; height: 80px; >" + "</td>";
            row += "<td>" + botdata[i].Time + "</td>";
            row += "<td>" + botdata[i].Image + "</td>";
            row += "<td>" + botdata[i].Summary + "</td>";
            row += "<td>" + `<button type="button" onclick="editsp (${botdata[i].id})" class="btn btn-success">Edit</button></td>`;
            row += "<td>" + `<button type="button" onclick="deletesp (${botdata[i].id})" class="btn btn-danger">Delete</button></td>`;
            row += "</tr>";
        }
        document.getElementById("tab").innerHTML += row;
    })
}

function editsp(id) {
    callAPI(`Bot_data/${id}`, "GET", null).then((res) => {
        let botdataup = [];
        botdataup = res.data;
        console.log(botdataup);
        document.getElementById("bot_title").value = botdataup.Title;
        document.getElementById("bot_url").value = botdataup.Title_URL;
        document.getElementById("bot_time").value = botdataup.Time;
        document.getElementById("bot_img").value = botdataup.Image;
        document.getElementById("bot_summary").value = botdataup.Summary;

    });
    document.getElementById("ok").style.display = "none";
    document.getElementById("edit").style.display = "block";
    document.getElementById("edit").innerHTML = `<button type='button' onclick='editok (${id})' class='btn btn-success'>Update</button>`;
}

function editok(id) {
    var Title = document.getElementById("bot_title").value;
    var Title_URL = document.getElementById("bot_url").value;
    var Time = document.getElementById("bot_time").value;
    var Summary = document.getElementById("bot_summary").value;
    let Image = document.getElementById("bot_img").value;
    var image = Image.split("\\")[2];
    var onedata = {
        id: id,
        Title: Title,
        Title_URL: Title_URL,
        Time: Time,
        Summary: Summary,
        Image: "images/" + image
    }
    callAPI(`Bot_data/${id}`, "PUT", onedata).then((_respense) => {
        alert("Cập nhập thành công!");
        show();
    });
    if (document.getElementById("edit").style.display = "block") {
        document.getElementById("edit").style.display = "none";
        document.getElementById("ok").style.display = "block";
    } else {
        document.getElementById("edit").style.display = "block";
        document.getElementById("ok").style.display = "none";
    }
    reset();
}

function deletesp(id) {
    var r = confirm("Do you want delete this data?")
    if (r == true) {
        callAPI(`Bot_data/${id}`, "DELETE", null).then((_response) => {
            show();
            alert("xoa thanh cong")
        });
    } else {
        window.location.href = "file:///C:/Users/ken%20dang.PNVD188/Desktop/adminbotdata/adminbotdata.html";
    }
}
function reset() {
    document.getElementById("bot_title").value = "";
    document.getElementById("bot_url").value = "";
    document.getElementById("bot_time").value = "";
    document.getElementById("bot_img").value = "";
    document.getElementById("bot_summary").value = "";
}


// function updateData() {
//     // Make an HTTP request to the mock API
//     fetch("https://63dca2ad367aa5a7a4ff24ab.mockapi.io/Bot_data")
//         .then(response => response.json())
//         .then(data => {
//             // Update the text inside the element with id "data"
//             document.getElementById("data").innerHTML = "Data: " + data[0].value;
//         })
//         .catch(error => {
//             console.error("Error while fetching data:", error);
//         });
// }
//     // Call the updateData function every 5000 milliseconds (5 seconds)
//     setInterval(updateData, 5000);


