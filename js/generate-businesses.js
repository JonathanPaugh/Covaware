// doesn't work yet
function generateBusinesses() {
  db.collection("businesses")
    .doc("NqaBf1gpgzFsoC2a8XOM")
    .get()
    .then(function(doc){
      var id = doc.id;
      var name = doc.data().fields.name;
      var address = doc.data().fields.address;
      var city = doc.data().fields.city;
      var province = doc.data().fields.province;
      var stars = doc.data().fields.stars;
      var hand_sanitizer = doc.data().fields.precautions.hand-sanitizer;
      var distancing = doc.data().fields.precautions.distancing;      //probably needs an if loop or smth
      var plexiglass = doc.data().fields.precautions.plexiglass;
      var type = doc.data().fields.type;
      $("#card-goes-here").append("<div class='card mb-4'></div>");
      $(".card mb-4").append("<div class='row g-0'></div>");
      $(".row g-0").append("<div class='col-md-5'></div>");
        $(".col-md-5").append("<img src='./images/pepe.jpg' alt='sad pepe'>");
      $(".row g-0").append("<div class='col-md-7'></div>");
        $(".col-md-7").append("<div class='card-body'></div>");
          $(".card-body").append("<h5 class='card-body'>" + name + "</h5>");
          $(".card-body").append("<h6 class'card-subtitle mb-2 text-muted'>" + type + "</h6>");
          $(".card-body").append("<h6 class='card-subtitle mb-2 text-muted'><small>" + stars + "</small></h6>");
          $(".card-body").append("<p class='precautions'>" + hand_sanitizer + "</p>");
          $(".card-body").append("<p class='card-text'>" + address + "</p>");
          $(".card-body").append("<p class='card-text'>" + city + ", " + province + "</p>");
          $(".card-body").append("<a href='#' class='btn btn-primary'>BUTTON</a>");
    })
}