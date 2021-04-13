function getBusiness(id) {
    return db.collection("businesses").doc(id);
}

function withBusiness(id, callback) {
    getBusiness(id).get().then(callback);
}

function withBusinessRating(id, callback) {
    withReviews(id, reviews => {
        let sum = 0;
        reviews.docs.forEach(review => {
            sum += review.data().rating;
        });
        callback(Math.round(sum / reviews.docs.length));
    });
}

function withReviews(id, callback) {
    getBusiness(id).collection("reviews").get().then(callback);
}

function getUser(id) {
    return db.collection("users").doc(id);
}

function withUserCurrentId(callback) {
    firebase.auth().onAuthStateChanged(user => callback(user.uid));
}

function withUserCurrent(callback) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("users").doc(user.uid).get().then(callback);
        } else {
            console.log("Cannot get user");
        }
    });
}