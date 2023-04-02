function setTitle() {
    var titleinputperson = document.getElementById("titleinput").value;
    document.title = titleinputperson;
    if (titleinputperson == "") {
        window.localStorage.addItem("titled", titleinputperson);
    } else {
        window.localStorage.setItem("titled", titleinputperson);
    }
}
var titlecheck = window.localStorage.getItem("titled");
function test() {
    alert(titlecheck);
}
document.title = titlecheck;