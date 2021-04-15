// Creates a JQuery element from the given tag name
function createElement(element) {
    return $(`<${element}/>`);
}

// Creates a div, because why not
function createDiv() {
    return createElement("div");
}

// Inserts rating stars into parent element for rating value
function insertRating(parent, rating) {
    for (var i = 0; i < rating; i++) {
        parent.append(createStar(true));
    }
    
    for (var i = rating; i < 5; i++) {
        parent.append(createStar(false));
    }
}

// Creates a rating star that is either active or inactive
function createStar(active) {
    return createElement("img")
        .addClass("star")
        .attr("src", active ? "./images/star-on.png" : "./images/star-off.png");
}

// Gets URL parmeters
function getUrl() {
    return new URLSearchParams(window.location.search);
}

// Sets URL parmeters without changing page location
function setUrl(name, value) {
    let url = getUrl();
    url.set(name, value);
    let path = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${url}`;
    window.history.pushState({path: path}, "", path);
}

// Redirects the page, while keeping URL parameters
function redirect(path) {
    window.location.assign(`${path}${window.location.search}`);
}

// Redirects to login page if not logged in
function requireLogin() {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            redirect("login.html");
        }
    });
}