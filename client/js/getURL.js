function getURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let urlPar = urlParams.get('url');
    let url = ''
    const urlField = document.getElementById("url");
    if (urlPar !== "") {
        url = urlPar;
    } else {
        url = document.cookie;
    };
    urlField.textContent = url
}