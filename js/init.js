$(document).ready(() => {

    // This file is used to sync some things across all pages, so we dont have to worry
    // about updating them on every page every time something changes (navbars etc...)

    // Creates fontawesome link
    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "https://use.fontawesome.com/releases/v5.15.3/css/all.css")
        .attr("integrity", "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk")
        .attr("crossorigin","anonymous"));

    // Creates google fonts link
    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "https://fonts.googleapis.com/css2?family=Cabin&display=swap"));

    // Creates main styling link
    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "./css/main.css"));

    // Injects searchbar with search logic script if not hidden
    if ($("#navbar-top-hide").length) {
        $("#navbar-top-hide").remove();
    } else {
        fetchFile("navbar-top.html", data => {
            $("head").append(createElement("link").attr("rel", "stylesheet").attr("href", "./css/navbar-top.css"));
            $("script").last().after(createElement("script").attr("src", "./js/search.js"));
            $("body").prepend(data);
        });
    }

    // Injects bottom navbar if not hidden
    if ($("#navbar-bottom-hide").length) {
        $("#navbar-bottom-hide").remove();
    } else {
        fetchFile("navbar-bottom.html", data => {
            $("head").append(createElement("link").attr("rel", "stylesheet").attr("href", "./css/navbar-bottom.css"));
            $("script").first().before(data);
        });
    }
});

// Fetches a file and then gives a callback to use the data
function fetchFile(path, callback) {
    fetch(`${window.location.origin}/${path}`)
        .then(response => response.text())
        .then(callback);
}