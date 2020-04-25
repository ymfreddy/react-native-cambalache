import * as firebase from "firebase";
export const reauthenticate = password => {
  const user = firebase.auth().currentUser;
  const credentials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  );
  console.log("email:", user.email);
  console.log("password:", password);
  return user.reauthenticateWithCredential(credentials);
};
