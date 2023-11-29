var firebaseConfig = {
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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var email = $('input[name="email"]').val();
  var password = "";
  var cpassword = "";
console.log(username, email, password, cpassword);

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      });
      console.log(username, "You are signed up");
      window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });

