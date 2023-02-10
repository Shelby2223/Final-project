
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

function limitData(data, limit) {
    return data.slice(0, limit);
}
// show Top data tieeu bieu
function listDataTop() {
    callAPI(`Bot_data`, "GET", null).then((res) => {
        let datatop = res.data;
        let topDataObjects = [];
        datatop.forEach(data => {
            if (data.Check == "Top_data") {
                topDataObjects.push(data);
            }
        });
        console.log("Top_data: ", topDataObjects);
        var limitdatabot = 1;
        var limitedDatabot = limitData(topDataObjects, limitdatabot);
        limitedDatabot.forEach(data => {
            var demo = '';
            demo += '<a href="' + data.Title_URL + '"style="text-decoration:none">';
            demo += '<div class="img" style="position:relative;">';
            demo += '<img src=" ' + data.Image + '" alt="" style="width:100%">';
            demo += '<div class="title-left" style="position: absolute;bottom:0;padding:12px 20px">';
            demo += '<p style="font-size: 30px;font-weight: 600;color: #007bff";>' + data.Title + '</p>';
            demo += '</div>'
            demo += '</div>';
            demo += '</a>'
            document.getElementById('img-title').innerHTML += demo;
        });
    });
};

// show duoi phan tieu bieu gom 4 o
function listDataMid() {
    callAPI(`Bot_data`, "GET", null).then((res) => {
        let datatopbottom = res.data;
        let topbottomDataObjects = [];
        datatopbottom.forEach(data => {
            if (data.Check == "Top_bottom") {
                topbottomDataObjects.push(data);
            }
        });
        console.log("Top_bottom: ", topbottomDataObjects);
        var limitdatabot = 4;
        var limitedDatabot = limitData(topbottomDataObjects, limitdatabot);
        limitedDatabot.forEach(data => {
            var demo = '<div class="col-6">';
            demo += '<a href="' + data.Title_URL + '"style="text-decoration:none">';
            demo += '<img class="card-img-top" src="' + data.Image + '"alt="Card image cap">';
            demo += '<h2 class="card-title">' + data.Title + '</h2>';
            demo += '</a>'
            demo += '</div>';
            document.getElementById('data-mid').innerHTML += demo;
        });
    });
};

// show phần dữ liệu bot_data
function listDataBot1() {
    callAPI(`Bot_data`, "GET", null).then((res) => {
        let datamockid = res.data;
        let leftDataObjects = [];
        datamockid.forEach(data => {
            if (data.Check === "Bot_data") {
                leftDataObjects.push(data);
            }
        });
        console.log("Left data: ", leftDataObjects);
        var limitdatabot = 4;
        var limitedDatabot = limitData(leftDataObjects, limitdatabot);
        console.log("limitdabot", limitedDatabot)
        limitedDatabot.forEach(data => {
            var demo = '';
            demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
            demo += '<div class="data-bot-left">';
            demo += '<div class="bot-title">';
            demo += ' <h1 style="color:black;font-weight: 600;font-size:25px">' + data.Title + '</h1 >';
            demo += '</div>';
            demo += '<div class="dayUpdate">';
            demo += '<p>' + data.Time + '</p>';
            demo += '</div>';
            demo += '<div class="row">';
            demo += '<div class="col-md-3">';
            demo += '<img style="width: 100%;"src="' + data.Image + '"alt="">';
            demo += '</div>';
            demo += '<div class="col-9">'
            demo += '<p>' + data.Summary + '</p>';
            demo += '</div>';
            demo += ' </div>';
            demo += '</div>';
            demo += '</a>';
            demo += '<hr>';
            document.getElementById('data-bot1').innerHTML += demo;
        });
    });
};

// in ra thêm dữ liệu tự động vào phần tiếp theo của leftdata
// function updateData() {
//     // Make an HTTP request to the mock API
//     var botdata = [];
//     callAPI(`leftdata`, "GET", null).then((res) => {
//         botdata = res.data;
//         let leftDataObjects = [];

//         botdata.forEach(data => {
//             if (data.Check == "Bot_data") {
//                 leftDataObjects.push(data);
//             }
//         });
//         leftDataObjects.forEach(data => {
//             var demo = '';
//             demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
//             demo += '<div class="data-bot-left">';
//             demo += '<div class="bot-title">';
//             demo += ' <h1 style="color:black;font-weight: 600;font-size:25px">' + data.Title + '</h1 >';
//             demo += '</div>';
//             demo += '<div class="dayUpdate">';
//             demo += '<p>' + data.Time + '</p>';
//             demo += '</div>';
//             demo += '<div class="row">';
//             demo += '<div class="col-md-3">';
//             demo += '<img style="width: 100%;"src="' + data.Image + '"alt="">';
//             demo += '</div>';
//             demo += '<div class="col-9">'
//             demo += '<p>' + data.Summary + '</p>';
//             demo += '</div>';
//             demo += ' </div>';
//             demo += '</div>';
//             demo += '</a>';
//             demo += '<hr>';
//             document.getElementById('data-bot1').innerHTML += demo;
//         });
//     })
//         .catch(error => {
//             console.error("Error while fetching data:", error);
//         });
// }
// // Call the updateData function every 5000 milliseconds (5 seconds)
// setInterval(updateData, 5000);

// show data in TIN HIỆP HỘI
async function listDataTopRight() {
    var tinhiephoi = [];
    await callAPI(`Bot_data`, "GET", null).then((res) => {
        let datamockid = res.data;
        datamockid.forEach(data => {
            if (data.Tag === "TIN HIỆP HỘI") {
                tinhiephoi.push(data);
            }
        })
    });
    console.log("Tin hiệp hội: ",tinhiephoi)
    tinhiephoi.forEach(data => {
        var demo = '';
        demo += '<div style="position: absolute; padding: 10px 10px; margin-top: -40px;">' + data.Tag + '</div>'
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image1 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title1 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image2 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title2 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image3 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title3 + '</h2>';
        demo += '</a>';
        document.getElementById('a').innerHTML += demo;
    });
};

// show data in GIÁO DỤC PHỔ THÔNG MỚI
async function listDataTopRight1() {
    var giaoducphothongmoi = [];
    await callAPI(`Bot_data`, "GET", null).then((res) => {
        let datamockid = res.data;
        datamockid.forEach(data => {
            if (data.Tag === "GIÁO DỤC PHỔ THÔNG MỚI") {
                giaoducphothongmoi.push(data);
            };
        })
    });
    console.log("Giáo dục phổ thông mới: ", giaoducphothongmoi)
    giaoducphothongmoi.forEach(data => {
        var demo = '';
        demo += '<div style="position: absolute; padding: 10px 10px; margin-top: -40px;">' + data.Tag + '</div>'
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image1 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title1 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image2 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title2 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image3 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title3 + '</h2>';
        demo += '</a>';
        document.getElementById('b').innerHTML += demo;
    });
};

// Show data in ĐỔI MỚI GIÁO DỤC ĐẠI HỌC 
async function listDataTopRight2() {
    var doimoigiaoducdh = [];
    await callAPI(`Bot_data`, "GET", null).then((res) => {
        let datamockid = res.data;
        datamockid.forEach(data => {
            if (data.Tag === "ĐỔI MỚI GIÁO DỤC ĐẠI HỌC") {
                doimoigiaoducdh.push(data);
            }
        })
    });
    console.log("Đổi mới giáo dục đại học: ", doimoigiaoducdh);
    doimoigiaoducdh.forEach(data => {
        console.log("ủlll",data.Title_URL)
        var demo = '';
        demo += '<div style="position: absolute; padding: 10px 10px; margin-top: -40px;">' + data.Tag + '</div>'
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image1 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title1 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image2 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title2 + '</h2>';
        demo += '</a>';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<img class="card-img-top" src="' + data.Image3 + '" alt="Card image cap">';
        demo += '<h2 class="card-title">' + data.Title3 + '</h2>';
        demo += '</a>';
        document.getElementById('c').innerHTML += demo;
    });
};
// show data chủ đề nổi bật
async function listChuDe() {
    let chudenoibat = [];
    await callAPI(`Bot_data`, "GET", null).then((res) => {
        let datamockid = res.data;
        
        datamockid.forEach(data => {
            if (data.Check === "chude") {
                chudenoibat.push(data)
            }
        })
    });
    var limitchude = 6;
    var limitedCHUDE = limitData(chudenoibat, limitchude);
    console.log("Chủ đề nổi bật: ", chudenoibat);
    limitedCHUDE.forEach(data => {
        var demo = '';
        demo += '<a href="' + data.Title_URL + '" style="text-decoration:none">';
        demo += '<div class="menu-mid-right">';
        demo += '<ul class="main-menu-mid-right">';
        demo += '<li class="menu-item-right" >' + data.Title + '</li>';
        demo += '</ul>';
        demo += '</div>';
        demo += '</a>';
        document.getElementById('chude').innerHTML += demo;
    });
};