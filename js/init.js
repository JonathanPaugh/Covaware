$(document).ready(() => {

    if ($("#navbar-top-hide").length) {
        $("#navbar-top-hide").remove();
    } else {
        fetchFile("navbar-top.html", data => {
            $("head").append(createElement("link").attr("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css").attr("rel", "stylesheet"))
            $("head").append(createElement("link").attr("href", "./css/navbar-top.css").attr("rel", "stylesheet"))
            $("script").last().after(createElement("script").attr("src", "./js/search.js"));
            $("body").prepend(data);
        });
    }

    if ($("#navbar-bottom-hide").length) {
        $("#navbar-bottom-hide").remove();
    } else {
        fetchFile("navbar-bottom.html", data => {
            $("head").append(createElement("link").attr("href", "./css/navbar-bottom.css").attr("rel", "stylesheet"))
            $("script").first().before(data);
        });
    }
});

function fetchFile(path, callback) {
    fetch(`${window.location.origin}/${path}`)
        .then(response => response.text())
        .then(callback);
}