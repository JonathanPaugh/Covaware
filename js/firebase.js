var firebaseConfig = {
    apiKey: "AIzaSyBYBGH7QzsurBZ0sKPi-ono9jX-DYoZjSs",
    authDomain: "covid-b9f8f.firebaseapp.com",
    projectId: "covid-b9f8f",
    storageBucket: "covid-b9f8f.appspot.com",
    messagingSenderId: "567753856141",
    appId: "1:567753856141:web:c8c4905ec7297edeac3ec4"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();