// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhtSCMECYg7kkFv0FlxgprMM5nKmNOLlQ",
  authDomain: "tiggwitter-3abb5.firebaseapp.com",
  databaseURL: "https://tiggwitter-3abb5-default-rtdb.firebaseio.com/",
  projectId: "tiggwitter-3abb5",
  storageBucket: "tiggwitter-3abb5.appspot.com",
  messagingSenderId: "896019505363",
  appId: "1:896019505363:web:07d39458ab3d95fbd5f426"
};
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("Usuario");
  room_name = localStorage.getItem("room_name");
   
  document.getElementById("nu").innerHTML = "¡Hola " + user_name+ " !";
   
  function AddRoom(){
     room_name = document.getElementById("NombreDelServidor").value;
     firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
     });
     localStorage.setItem("room_name",room_name);
   
  }
  
 