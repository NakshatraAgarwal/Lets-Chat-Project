//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB1bSMq3TdIlcMN3sE4llt-BP3lwnlIN2c",
      authDomain: "lets-chat-5bc94.firebaseapp.com",
      databaseURL: "https://lets-chat-5bc94-default-rtdb.firebaseio.com",
      projectId: "lets-chat-5bc94",
      storageBucket: "lets-chat-5bc94.appspot.com",
      messagingSenderId: "229184247804",
      appId: "1:229184247804:web:1752340b84743801e14479",
      measurementId: "G-72ZBTVBBT9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
