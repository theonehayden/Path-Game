const firebaseConfig = {
    apiKey: "AIzaSyBLKAChIxXjfnJv2pF0j7odVf96qVVkqL8",
    authDomain: "cscia225.firebaseapp.com",
    projectId: "cscia225",
    storageBucket: "cscia225.appspot.com",
    messagingSenderId: "122711494384",
    appId: "1:122711494384:web:0a695ba2da3a5b669bbc35"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
        $("#user-welcome").text(`Welcome ${currentUser.displayName}`);
    } else {
        window.location.href = "index.html";
    }
});

$("#logout-button").click(() => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            alert("Successfully logged out.");
        })
        .catch(e => {
            alert(e.message);
        });
});
