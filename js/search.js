$(document).ready(function () {
    createOptions();
    $("#search").click(search);
    $("#searchForm").submit(search);
});

// Seaches for business based on name, gets id from name and goes to reviews page
function search(event) {
    event.preventDefault();
    setUrl("id", $(`#searchOptions option[value="${$("#searchValue").val()}"]`).attr("id"));
    redirect("reviews.html");
}

// Creates search options from businesses in database
function createOptions() {
    db.collection("businesses").get().then(collection => {
        collection.docs.forEach(doc => {
            let option = createElement("option").appendTo("#searchOptions");
            option.attr("value", doc.data().name);
            option.attr("id", doc.id);
        });
    });
}