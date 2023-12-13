const firebaseConfig = {
    apiKey: "AIzaSyBLKAChIxXjfnJv2pF0j7odVf96qVVkqL8",
    authDomain: "cscia225.firebaseapp.com",
    projectId: "cscia225",
    storageBucket: "cscia225.appspot.com",
    messagingSenderId: "122711494384",
    appId: "1:122711494384:web:0a695ba2da3a5b669bbc35"
};
firebase.initializeApp(firebaseConfig);

// on sign in button click - try to sign in
$("#sign-in-button").click(e => {
    e.preventDefault();
    // get the user name and password from inputs
    // firebase doesn't have something for username so we add email
    const email = $("#username").val() + "@something.com";
    const password = $("#password").val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Logged in.");
            // go to main menu
            window.location.href = "MainMenu.html";
        })
        .catch(e => {
            // change all mentions of email to username
            const message = e.message.includes("email")
                ? e.message
                      .replace("email address", "username")
                      .replace("email", "username")
                : e.message;

            // show an appropriate error without too much code jargon
            alert(message.slice(message.indexOf(":") + 1, message.length));
        });
});

// save the data
$("#sign-up-button").click(e => {
    e.preventDefault();
    const displayName = $("#username").val();
    // firebase doesn't have something for username so we add email
    const email = displayName + "@something.com";
    const password = $("#password").val();

    // create a user with username(email) and password
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user
                .updateProfile({
                    // have to update profile
                    // we will use this instead of email for all other purposes
                    displayName: displayName
                })
                .then(() => {
                    alert("You are signed up.");
                    window.location.href = "MainMenu.html";
                });
        })
        .catch(e => {
            // show messages about username if email since they don't know
            const message = e.message.includes("email")
                ? e.message
                      .replace("email address", "username")
                      .replace("email", "username")
                : e.message;

            // show an appropriate error without too much code jargon
            alert(message.slice(message.indexOf(":") + 1, message.length));
        });
});
