function getPosts() {
    let posts = ''
    const urlField = document.getElementById("url");
    let url = document.getElementById("url").value;
    if (url.endsWith("/") == false) {
        url = url + "/"
        urlField.textContent = url;
    };
    document.cookie = url;
    console.log("Set URL cookie to " + url);
    fetch(url + "api/posts", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => printIt(data));
}
let printIt = (data) => {
    console.log(data)
    let keynum = 0;
    let postnum = 1;
    for (const posts of Object.keys(data)) {
        let keys = Object.keys(data);
        let curkey = keys[keynum];
        console.log(curkey);
        let g = document.createElement("p");
        document.body.appendChild(g)
        g.id = "post" + postnum.toString();
        document.getElementById("post" + postnum.toString()).innerText = data[posts]["name"] + ": " + data[posts]["message"];
        keynum = keynum + 1;
        postnum = postnum + 1;
    };
}
function postPost() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    let url = document.getElementById("url").value;
    const urlField = document.getElementById("url");
    let timestamp = Date.now();
    if (url.endsWith("/") == false) {
        url = url + "/";
        urlField.textContent = url;
    };
    document.cookie = url;
    console.log("Set URL cookie to " + url);
    fetch(url + "api/makepost", {
        method: "POST",
        body: JSON.stringify({
            "name": username,
            "message": message,
            "timestamp": timestamp
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("POSTed!");
    getPosts();
}
function gregGreg() {
    let url = document.getElementById("url").value;
    const urlField = document.getElementById("url");
    if (url.endsWith("/") == false) {
        url = url + "/";
        urlField.textContent = url;
    };
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
    getPosts();
}