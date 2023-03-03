import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAP6ys4q_Wv0kahW43694BY2jtQPPSpBuo",
  authDomain: "msci-342-71b66.firebaseapp.com",
  databaseURL: "https://msci-342-71b66-default-rtdb.firebaseio.com",
  projectId: "msci-342-71b66",
  storageBucket: "msci-342-71b66.appspot.com",
  messagingSenderId: "479436831782",
  appId: "1:479436831782:web:f2b60bab45bc16aa83ae7",
  measurementId: "G-WZT1ND3EM6"
};

const fire = firebase.initilizeApp(firebaseConfig)

export default fire;