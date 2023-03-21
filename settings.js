var settingsDefaultTab {
    title: "Settings | sans905"
};

function setTitle(title = "") {
    if (title) {
        document.title = title;
    } else {
        document.title = settingsDefaultTab.title;
    }
}