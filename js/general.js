function createElement(element) {
    return $(`<${element}/>`);
}

function createDiv() {
    return createElement("div");
}

function insertRating(parent, rating) {
    for (var i = 0; i < rating; i++) {
        parent.append(createStar(true));
    }
    
    for (var i = rating; i < 5; i++) {
        parent.append(createStar(false));
    }
}

function createStar(active) {
    return createElement("img")
        .addClass("star")
        .attr("src", active ? "./images/star-on.png" : "./images/star-off.png");
}

function getUrl() {
    return new URLSearchParams(window.location.search);
}

function setUrl(name, value) {
    let url = getUrl();
    url.set(name, value);
    let path = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${url}`;
    window.history.pushState({path: path}, "", path);
}

function redirect(path) {
    window.location.assign(`${path}${window.location.search}`);
}

function requireLogin() {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            redirect("login.html");
        }
    });
}