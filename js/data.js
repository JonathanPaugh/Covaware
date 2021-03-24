function getUrl() {
    return new URLSearchParams(window.location.search);
}

function fetchFile(path, callback) {
    fetch(`${window.location.origin}/${path}`)
        .then(response => response.text())
        .then(callback);
}

function getBusiness(id) {
    return db.collection("businesses").doc(id);
}

function withBusiness(id, callback) {
    getBusiness(id).get().then(callback);
}

function withReviews(id, callback) {
    getBusiness(id).collection("reviews").get().then(callback);
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