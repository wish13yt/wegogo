function getPosts() {
    let posts = ''
    let url = document.getElementById("url").value;
    document.cookie = url;
    console.log("Set URL cookie to " + url);
    fetch(url + "api/posts", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => printIt(data))
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