function createElement(element) {
    return $(`<${element}/>`);
}

function createDiv() {
    return createElement("div");
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