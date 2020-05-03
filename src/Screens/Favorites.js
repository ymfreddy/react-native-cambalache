//This is an example code for NavigationDrawer//
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Vibration,
  Platform,
  YellowBox,
} from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import { firebaseApp } from "../Utils/FireBase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default class Favorites extends Component {
  state = {
    expoPushToken: "",
    notification: {},
  };

  construct() {
    YellowBox.ignoreWarnings(["Setting a timer"]);
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );

      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
      // guardar el token
      // POST the token to our backend so we can use it to send pushes from there
      db.collection("tokenDevices")
        .where("token", "==", token)
        .where("userId", "==", firebase.auth().currentUser.uid)
        .get()
        .then((response) => {
          console.log("tamaño: " + response.empty);
          if (response.empty) {
            const device = {
              userId: firebaseApp.auth().currentUser.uid,
              token: token,
              createAt: new Date(),
              createBy: firebaseApp.auth().currentUser.uid,
            };
            db.collection("tokenDevices")
              .add(device)
              .then(() => {
                console.log("token actualizado");
              })
              .catch((Err) => {
                console.log(Err);
              });
          } else {
            console.log("el token ya esta registrado");
          }
        });
      //call the push notification
    } else {
      alert("Must use physical device for Push Notifications");
    }
  };

  componentDidMount() {
    console.disableYellowBox = true;
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: "Envio de prueba",
      body: "And here is the body!",
      data: { data: "goes here" },
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        </View>
        <Button
          title={"Press to Send Notification"}
          onPress={() => this.sendPushNotification()}
        />
      </View>
    );
  }
}

/*  TO GET PUSH RECEIPTS, RUN THE FOLLOWING COMMAND IN TERMINAL, WITH THE RECEIPTID SHOWN IN THE CONSOLE LOGS

    curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/getReceipts" -d '{
      "ids": ["YOUR RECEIPTID STRING HERE"]
      }'
*/
