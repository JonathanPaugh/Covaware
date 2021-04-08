$(document).ready(function () {
    document.getElementById('search').addEventListener('click', function () {
        let searchValue = document.getElementById('searchValue').value;
        window.location.href = 'search.html?id=' + searchValue;
    })
});