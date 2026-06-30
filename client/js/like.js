function like(pid) {
    console.log(`Liking ${pid}`);
    let url = document.getElementById("url").value;
    fetch(url + "api/like", {
        method: "POST",
        body: JSON.stringify({
            "pid": pid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("POSTed like!");
    getPosts();
}
function heartAttack(pid) {
    console.log("soon")
}