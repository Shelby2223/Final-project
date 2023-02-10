const API_URL = "https://63b77a7b4d97e82aa3be2b38.mockapi.io";
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
var id;
function signup() {
    let login = [];
    callAPI("Login","GET",null).then((res) => {
        login = res.data;})
    for ( let i = 0; i < login.length; i++){
        id = i;
    }
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( email | password) {
        var oneProduct = {
            id: id,
            email:email,
            password:password
        };
        callAPI("Login","POST",oneProduct).then((response) => {
            show();
            alert("Thanh cong");
        });
    } else {
        reset();
    }
}
const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () =>{
        let pwFields =  eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password =>{
            if(password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link =>{
    link.addEventListener("click", e =>{
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})
const api = "https://63b77a7b4d97e82aa3be2b38.mockapi.io";

function login() {
    var a = "";
    var valid = false;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    axios.get(`${api}`).then(res => {
        var myJson = res.data;
        for (var i = 0; i < myJson.length; i++) {
            if ((email == myJson[i].email) && (password == myJson[i].password)) {
                valid = true;
                a = myJson[i].email
                break;
            }
        }
        if (valid == true) {

            localStorage.setItem("password", username)
            localStorage.setItem("email", a)
            window.location = "http://127.0.0.1:8887/admin/admim.html"
            alert( email + " bạn đăng nhập thành công!")
            valid = false;
        } else {
            alert("Vui lòng kiểm tra tài khoảng của bạn")
            ressetlogin()
        }
    })
}



function signup() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    axios.get(`${api}`).then(res => {
        for (var i = 0; i < res.data.length; i++) {
            if (email == res.data[i].email) {
                alert('Email đã tồn tại')
                return
            }if(name1 == res.data[i].email){
                alert('Tài khoản đã tồn tại')
                return
            }
        }
        // post data
        var data = {
            email: email,
            password: password,

        }
        axios.post(api, data)
            .then(() => {
                alert("Đã đăng ký thành công")
                location.reload()
            })
    })



}
// check taikhoan
function checkacount() {
}
function ressetlogin() {
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
}
function ressetlogin() {
    document.getElementById('userres').value = '';
    document.getElementById('email').value = '';
    document.getElementById('passwordres').value = '';
}
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

}

function login() {
    x.style.left = "50px";
    y.style.left = "400px";
    z.style.left = "0";

}

isBool = true;

function showHidden() {
    if (isBool) {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("passwordres").setAttribute("type", "text");

        isBool = false;
    } else {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("passwordres").setAttribute("type", "password");
        isBool = true
    }
}