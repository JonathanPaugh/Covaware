function generateBusinesses() {
  db.collection("businesses")
    .get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        //var id = doc.id;
        var name = doc.data().name;
        var image = doc.data().image;
        var address = doc.data().address;
        var city = doc.data().city;
        var province = doc.data().province;
        var stars = doc.data().stars;
        var sanitizer;
        if (doc.data().precautions.sanitizer) {
          sanitizer = "hand sanitizer";
        } else {
          sanitizer = null;
        };
        var distancing;
        if (doc.data().precautions.distancing) {
          distancing = "social distancing";
        } else {
          distancing = null;
        };
        var plexiglass;
        if (doc.data().precautions.plexiglass) {
          plexiglass = "plexiglass barriers";
        } else {
          plexiglass = null;
        };
        var precautions = [sanitizer, distancing, plexiglass];
        var precautionsString = "";
        for (i = 0; i < precautions.length; i++) {
          if (precautions[i] != null) {
            precautionsString += precautions[i] + ", ";
          }
        };
        var description = doc.data().description;

        var htmlString = "<div class='card mb-4'>" +
          "<div class='row g-0'>" +
          "<div class='col-md-5'>" +
          "<img src='./images/" + image + "' alt='" + name + "'>" +
          "</div>" +
          "<div class='col-md-7'>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" + name + "</h5>" +
          "<h6 class='card-subtitle mb-2 text-muted'>" + description + "</h6>" +
          "<h6 class='card-subtitle mb-2 text-muted'><small>" + stars + " / 5</small></h6>" +
          "<p class='precautions'>" + precautionsString.charAt(0).toUpperCase() + precautionsString.slice(1, -2) + "</p>" +
          "<p class='card-text'>" + address + "</br>" + city + "</br>" + province + "</p>" +
          "<span class='card-text'><small class='text-muted'>Review posted __hours ago</small></span>" +
          "<a href='#' class='btn btn-primary'>See more</a>" +
          "</div></div></div></div>";

        $("#card-goes-here").append(htmlString);
      })
    })
};

generateBusinesses();
