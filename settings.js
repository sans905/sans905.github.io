var settingsDefaultTab {
    title: "Settings | sans905"
};

var orgTitle = document.title;

function setTitle(title = "") {
    if (title) {
        document.title = title;
    } else {
        document.title = settingsDefaultTab.title;
    }
}

function saveTitleToLocalStorage() {
    localStorage.setItem("savedTitle", orgTitle)
}