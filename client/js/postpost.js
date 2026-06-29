function postPost() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    let url = document.getElementById("url").value;
    document.cookie = url;
    console.log("Set URL cookie to " + url);
    fetch(url + "api/makepost", {
        method: "POST",
        body: JSON.stringify({
            "name": username,
            "message": message
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("POSTed!");
}
function gregGreg() {
    let url = document.getElementById("url").value;
    document.cookie = url;
    let username = "greg";
    let message = "GREG ALERT!!";
    fetch(url + "api/makepost", {
        method: "POST",
        body: JSON.stringify({
            "name": username,
            "message": message
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("POSTed!");
}