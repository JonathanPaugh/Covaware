$(document).ready(() => {
    displayBusiness();
});

function displayBusiness() {
    let id = getUrl().get("id");
    if (id == null) { console.log("Business not valid"); return; }
    withBusiness(id, business => {
        $("#business-name").html(business.data().name);
        $("#business-type").html(business.data().type);
        $("#business-description").html(business.data().description);
        $("#business-image").attr("src", `./images/${business.data().image}`);
    });
}