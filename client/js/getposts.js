function getPosts() {
    fetch("http://127.0.0.1:5000/api/posts", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}