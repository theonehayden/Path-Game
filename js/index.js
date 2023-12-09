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
    // firebase doesn't have something for username so we add email ending
    const username = $("#username").val() + "@something.com";
    const password = $("#password").val();

    firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(() => {
            // Signed in
            alert("Logged in.");
            // let user = firebase.auth().currentUser;
            // window.location.href = "Surveyresult.html";
        })
        .catch(error => {
            // change all mentions of email to username
            const message = error.message.includes("email")
                ? error.message
                      .replace("email address", "username")
                      .replace("email", "username")
                : error.message;

            alert(message.slice(message.indexOf(":") + 1, message.length));
        });
});

// save the data
$("#sign-up-button").click(e => {
    e.preventDefault();
    const username = $("#username").val() + "@something.com";
    const password = $("#password").val();

    // create a user with username(email) and password
    firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
            // Signed in
            // ...
            // var user = result.user;
            // user.updateProfile({
            //     displayName: username
            // }).then(() =>)

            alert("You are signed up.");
            // window.location.href = "Login.html";
            // console.log(result);
        })
        .catch(error => {
            const message = error.message.includes("email")
                ? error.message
                      .replace("email address", "username")
                      .replace("email", "username")
                : error.message;

            alert(message.slice(message.indexOf(":") + 1, message.length));
        });
});
