// Import and configure Firebase
// Make sure to include your Firebase SDK script in the HTML file before this script

import { initializeApp } from "firebase/app";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { getDatabase,  ref,onValue} from "firebase/database";

  
  const firebaseConfig = {
    apiKey: "AIzaSyA7ewbKa89A1xXCrASAzqmoXeNptgWj480",
    authDomain: "envi-drone.firebaseapp.com",
    databaseURL: "https://envi-drone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "envi-drone",
    storageBucket: "envi-drone.firebasestorage.app",
    messagingSenderId: "1086250677742",
    appId: "1:1086250677742:web:18787eec846d23bdea8aff",
    measurementId: "G-JHY839YBMC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database =getDatabase(app);
  //const analytics=getAnalytics(app);
// Reference to the Firebase Realtime Database



// References to individual sensor values
const humidityRef = ref(database, 'sensorData/humidity');
const methaneRef = ref(database, 'sensorData/methane');
const temperatureRef = ref(database, 'sensorData/temperature');

onValue(humidityRef, (snapshot) => {
    const humi = snapshot.val();
    document.getElementById('humidity').innerHTML = humi + "%";
});

onValue(methaneRef, (snapshot) => {
    const methane = snapshot.val();
    document.getElementById('methane').innerHTML = methane + " ppm";
});

onValue(temperatureRef, (snapshot) => {
    const temp = snapshot.val();
    document.getElementById('temperature').innerHTML = temp + "&#8451;";
});

  