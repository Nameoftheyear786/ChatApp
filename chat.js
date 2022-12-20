// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBN0E60dQ-1qJvLqRtebnjPkU_4YoeDVQY",
    authDomain: "kwitter100-9ea6e.firebaseapp.com",
    databaseURL: "https://kwitter100-9ea6e-default-rtdb.firebaseio.com",
    projectId: "kwitter100-9ea6e",
    storageBucket: "kwitter100-9ea6e.appspot.com",
    messagingSenderId: "100976195679",
    appId: "1:100976195679:web:54c7e8fa2e16cffa5c03ea"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "chat_room.html";
  }






