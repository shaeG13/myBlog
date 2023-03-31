
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyDWo3ur9249nUSfZQW6s-Lla381ew7Z04g",
  authDomain: "classtest-1ea03.firebaseapp.com",
  databaseURL: "https://classtest-1ea03-default-rtdb.firebaseio.com",
  projectId: "classtest-1ea03",
  storageBucket: "classtest-1ea03.appspot.com",
  messagingSenderId: "487526989046",
  appId: "1:487526989046:web:a3a15e179362ff36a200d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
