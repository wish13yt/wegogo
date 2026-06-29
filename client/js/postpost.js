function postPost() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    let url = document.getElementById("url").value;
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
    window.location.reload();
}
function gregGreg() {
    let url = document.getElementById("url").value;
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
    window.location.reload();
}