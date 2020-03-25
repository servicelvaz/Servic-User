




import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

import auth, { firebase } from "@react-native-firebase/auth";

const Profile = ({ navigation }) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User =" + user.displayName + user.email);
        setName(user.displayName);
        setCurrentEmail(user.email);
        console.log("Name =" + name);
      } else {
        console.log("Dashboard user: null");
      }
    });

    return () => {unsubscribe()};
  });

  

  const user = firebase.auth().currentUser.user;
  console.log(user);
  const logoutHandler = async () => {
    await firebase.auth().signOut();
    navigation.navigate("HomeScreen");
  };

  

  return (
    <Background>
      <Logo />
      <Header>Welcome {name === null ? currentEmail : name}</Header>
      {/* <Header>Welcome {currentEmail}</Header> */}


      <Button mode="outlined" onPress={logoutHandler}>
        Logout
      </Button>
    </Background>
  );
};

export default Profile;

