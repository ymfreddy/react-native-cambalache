import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default function Modal(props) {
  const { isVisible, setIsVisible, children } = props;

  const closeModal = () => setIsVisible(false);

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overLay}
      onBackdropPress={closeModal}
    >
      {children}
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overLay: {
    height: "auto",
    width: "100%",
    backgroundColor: "#fff",
  },
});
