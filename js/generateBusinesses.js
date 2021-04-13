$(document).ready(() => {
  generateBusinesses();
});

function generateBusinesses() {
  db.collection("businesses")
    .get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        let id = doc.id;
        let name = doc.data().name;
        let image = doc.data().image;
        let address = doc.data().address;
        let city = doc.data().city;
        let province = doc.data().province;
        let description = doc.data().description;

        let precautionsString = "";
        let sanitizer;
        let distancing;
        let plexiglass;
        let precautions

        if (doc.data().precautions) {
          
          if (doc.data().precautions.sanitizer) {
            sanitizer = "hand sanitizer";
          } else {
            sanitizer = null;
          };
          
          if (doc.data().precautions.distancing) {
            distancing = "social distancing";
          } else {
            distancing = null;
          };
          
          if (doc.data().precautions.plexiglass) {
            plexiglass = "plexiglass barriers";
          } else {
            plexiglass = null;
          };

          precautions = [sanitizer, distancing, plexiglass];
          
          for (i = 0; i < precautions.length; i++) {
            if (precautions[i] != null) {
              precautionsString += precautions[i] + ", ";
            }
          };
        }

        withBusinessRating(id, rating => {
          let htmlString = "<div class='card mb-4'>" +
            "<div class='row g-0'>" +
            "<div class='col-md-5'>" +
            "<img src='./images/" + image + "' alt='" + name + "'>" +
            "</div>" +
            "<div class='col-md-7'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + name + "</h5>" +
            "<h6 class='card-subtitle mb-2 text-muted'>" + description + "</h6>" +
            "<h6 class='card-rating card-subtitle mb-2 text-muted'><small></small></h6>" +
            "<p class='precautions'>" + precautionsString.charAt(0).toUpperCase() + precautionsString.slice(1, -2) + "</p>" +
            "<p class='card-text'>" + address + "</br>" + city + "</br>" + province + "</p>" +
            "<span class='card-text'><small class='text-muted'>Review posted __hours ago</small></span>" +
            "<button id='" + id + "' type='button' class='btn btn-primary'>See more</button>" +
            "</div></div></div></div>";

            let element = $(htmlString).appendTo("#card-goes-here");

            insertRating(element.find(".card-rating"), rating);

            $(element.find("button")).click(() => {
              setUrl("id", id);
              redirect("reviews.html");
            });
        });
      });
    });
};