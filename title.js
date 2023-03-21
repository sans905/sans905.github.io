if (localStorage.getItem("savedTitle") = null) {
    localStorage.setItem("savedTitle", orgTitle)
}
var thistitle = localStorage.getItem("savedTitle");
document.title = thistitle;