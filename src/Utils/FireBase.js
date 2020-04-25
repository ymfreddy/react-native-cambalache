import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCPRG5FjZna-ahiUdfyXr_gdJyoUWbXofc",
  authDomain: "tenedores-9cac5.firebaseapp.com",
  databaseURL: "https://tenedores-9cac5.firebaseio.com",
  projectId: "tenedores-9cac5",
  storageBucket: "tenedores-9cac5.appspot.com",
  messagingSenderId: "248987623046",
  appId: "1:248987623046:web:ea386ec5f82ee577d07b07"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
