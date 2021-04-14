$(document).ready(displayBusiness);

function displayBusiness() {
    if (!$("#business").length) {
        return;
    }

    fetchFile("business.html", data => {
        $("#business").append(data);
    });

    let id = getUrl().get("id");
    if (id == null) { console.log("Business not valid"); return; }

    withBusiness(id, business => {
        $("#business-name").html(business.data().name);
        $("#business-rating").html("");
        $("#business-type").html(business.data().type);
        $("#business-description").html(business.data().description);
        $("#business-image").attr("src", `./images/${business.data().image}`);
    });

    withBusinessRating(id, rating => {
        insertRating($("#business-rating"), rating)
    });
}