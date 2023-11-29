const firebaseConfig = {
  apiKey: "AIzaSyCrMcWgqWW57pQVjelCDkR0Lv7oSzEGwSA",
  authDomain: "database225-311d9.firebaseapp.com",
  projectId: "database225-311d9",
  storageBucket: "database225-311d9.appspot.com",
  messagingSenderId: "255793251648",
  appId: "1:255793251648:web:d5d8ba983e853e576466a5",
  measurementId: "G-E8K1CEKPTX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'dandrel@usca.edu';
  var password = 'Carlos12';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// document.getElementById('googleSignIn').addEventListener('click', GoogleLogin);

// add  a google login choice here
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});