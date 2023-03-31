function setTitle() {
    var titleinput = document.getElementById("titleinput").value;
    document.title = titleinput;
    localStorage.addItem("title", titleinput);
}