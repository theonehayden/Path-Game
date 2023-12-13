const firebaseConfig = {
    apiKey: "AIzaSyBLKAChIxXjfnJv2pF0j7odVf96qVVkqL8",
    authDomain: "cscia225.firebaseapp.com",
    projectId: "cscia225",
    storageBucket: "cscia225.appspot.com",
    messagingSenderId: "122711494384",
    appId: "1:122711494384:web:0a695ba2da3a5b669bbc35"
};
firebase.initializeApp(firebaseConfig);
// get the database
const db = firebase.firestore();

// async because we need to wait on database call
firebase.auth().onAuthStateChanged(async currentUser => {
    // do this to make sure user is logged in else send them to login screen
    if (currentUser) {
        // display their username
        $("#user-welcome").text(`Welcome ${currentUser.displayName}`);

        // get the user's database reference
        const ref = await db
            .collection("rpg")
            .doc(currentUser.displayName)
            .get();

        // try to get their tracker value
        // if they don't have one - set continue game button to disabled and make it look like it
        ref.data()?.tracker
            ? $("#continue-game-button")
                  .prop("disabled", false)
                  .css("opacity", 1)
            : $("#continue-game-button")
                  .prop("disabled", true)
                  .css("opacity", 0.5);
    } else {
        window.location.href = "index.html";
    }
});

// standard log out
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
