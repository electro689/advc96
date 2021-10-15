//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAzJDyXaGussYrh3M1QPSjDw87JpL6lHwY",
      authDomain: "class-tests-b8eb6.firebaseapp.com",
      databaseURL: "https://class-tests-b8eb6-default-rtdb.firebaseio.com",
      projectId: "class-tests-b8eb6",
      storageBucket: "class-tests-b8eb6.appspot.com",
      messagingSenderId: "916927384860",
      appId: "1:916927384860:web:9eed42b0d0f081c74a7ed9"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
