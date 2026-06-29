function postPost() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    fetch("http://127.0.0.1:5000/api/makepost", {
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
    let username = "greg";
    let message = "GREG ALERT!!";
    fetch("http://127.0.0.1:5000/api/makepost", {
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