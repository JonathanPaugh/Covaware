function createElement(element) {
    return $(`<${element}/>`);
}

function createDiv() {
    return createElement("div");
}

function redirect(path) {
    window.location.assign(`${path}${window.location.search}`);
}