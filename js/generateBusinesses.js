$(document).ready(() => {
  generateBusinesses();
});

//Dynamically generates businesses based on a snapshot of the businesses collection in Firebase
function generateBusinesses() {
  db.collection("businesses").orderBy("name")
    .get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        let id = doc.id;
        let name = doc.data().name;
        let image = doc.data().image;
        let description = doc.data().description;
        let address;
        if (!doc.data().address) {
          address = "";
        } else {
          address = doc.data().address;
        };

        let city;
        if (!doc.data().city) {
          city = "";
        } else {
          city = doc.data().city;
        };

        let province;
        if (!doc.data().province) {
          province = "";
        } else {
          province = doc.data().province;
        }

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
            "<p class='precautions'>" + precautionsString.charAt(0).toUpperCase() + precautionsString.slice(1, -2) + "</p>" +       //Changes the first letter of the string to uppercase and removes the trailing comma from the end
            "<p class='card-text'>" + address + "</br>" + city + "</br>" + province + "</p>" +
            "<span class='card-text'><small class='text-muted'>Last review " + Math.floor(Math.random() * 10) + " hours ago</small></span>" +
            "<button id='" + id + "' type='button' class='btn btn-warning'>See more</button>" +
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