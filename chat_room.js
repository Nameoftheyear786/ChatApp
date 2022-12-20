var firebaseConfig = {
  apiKey: "AIzaSyBN0E60dQ-1qJvLqRtebnjPkU_4YoeDVQY",
  authDomain: "kwitter100-9ea6e.firebaseapp.com",
  databaseURL: "https://kwitter100-9ea6e-default-rtdb.firebaseio.com",
  projectId: "kwitter100-9ea6e",
  storageBucket: "kwitter100-9ea6e.appspot.com",
  messagingSenderId: "100976195679",
  appId: "1:100976195679:web:54c7e8fa2e16cffa5c03ea"
  };
    
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}