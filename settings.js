function setTitle() {
    var titleinput = document.getElementById("titleinput").value;
    document.title = titleinput;
    localStorage.removeItem("title");
    localStorage.addItem("title", titleinput);
}