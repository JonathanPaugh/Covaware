$(document).ready(() => {
    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "https://use.fontawesome.com/releases/v5.15.3/css/all.css")
        .attr("integrity", "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk")
        .attr("crossorigin","anonymous"));

    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "https://fonts.googleapis.com/css2?family=Cabin&display=swap"));

    $("head").append(createElement("link")
        .attr("rel", "stylesheet")
        .attr("href", "./css/main.css"));

    if ($("#navbar-top-hide").length) {
        $("#navbar-top-hide").remove();
    } else {
        fetchFile("navbar-top.html", data => {
            $("head").append(createElement("link").attr("rel", "stylesheet").attr("href", "./css/navbar-top.css"));
            $("script").last().after(createElement("script").attr("src", "./js/search.js"));
            $("body").prepend(data);
        });
    }

    if ($("#navbar-bottom-hide").length) {
        $("#navbar-bottom-hide").remove();
    } else {
        fetchFile("navbar-bottom.html", data => {
            $("head").append(createElement("link").attr("rel", "stylesheet").attr("href", "./css/navbar-bottom.css"));
            $("script").first().before(data);
        });
    }
});

function fetchFile(path, callback) {
    fetch(`${window.location.origin}/${path}`)
        .then(response => response.text())
        .then(callback);
}