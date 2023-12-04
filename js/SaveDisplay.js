// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Gloabal variable
var currentuser = "";
var currentemail = "";

// Check if the user is logged in
firebase.auth()onAuthStateChanged((user) => {
  if (user) {
    currentuser = user.displayName;
    currentemail = user.email;
    console.log(currentuser, currentemail, "Logged in.");
  } else {
    console.log("User is logged out");
    window.location.href = "Login.html";
  }

});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method




});

// update the result in table
