// Gets business doc from id
function getBusiness(id) {
    return db.collection("businesses").doc(id);
}

// Gets business then invokes callback with business data when data is obtained
function withBusiness(id, callback) {
    getBusiness(id).get().then(callback);
}

// Gets business then invokes callback with average rating when data is obtained
function withBusinessRating(id, callback) {
    withReviews(id, reviews => {
        let sum = 0;
        reviews.docs.forEach(review => {
            sum += review.data().rating;
        });
        callback(Math.round(sum / reviews.docs.length));
    });
}

// Gets business then invokes callback with all reviews for business when data is obtained
function withReviews(id, callback) {
    getBusiness(id).collection("reviews").orderBy("time", "desc").get().then(callback);
}

// Gets user doc from id
function getUser(id) {
    return db.collection("users").doc(id);
}

// Gets user then invokes callback with user id when data is obtained
function withUserCurrentId(callback) {
    firebase.auth().onAuthStateChanged(user => callback(user.uid));
}

// Gets user then invokes callback with user data when data is obtained
function withUserCurrent(callback) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("users").doc(user.uid).get().then(callback);
        } else {
            console.log("Cannot get user");
        }
    });
}