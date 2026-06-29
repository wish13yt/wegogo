function getURL() {
    let url = document.cookie;
    const urlField = document.getElementById("url");
    if (url == "") {
        return;
    } else {
        urlField.textContent = url
    };
}