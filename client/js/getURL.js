function getURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let url = ''
    const urlField = document.getElementById("url");
    if (urlParams.has('url')) {
        let urlPar = urlParams.get('url');
        url = urlPar;
    } else {
        url = document.cookie;
    };
    urlField.textContent = url
}