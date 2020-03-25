import React from "react";
import { Provider } from "react-native-paper";
import App from "./src/";
import { theme } from "./src/core/theme";


const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;

// import React, { useState } from "react";
// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
// import Button from '../components/Button';
// import TextInput from '../components/TextInput';
// import BackButton from '../components/BackButton';
// import { theme } from '../core/theme';

// //import firebase from "@react-native-firebase/app";
// import auth, { firebase } from "@react-native-firebase/auth";

// const App = () => {
//   const [emailText, setEmailText] = useState("");
//   const [passwordText, setPasswordText] = useState("");

//   const setEmail = email => {
//     setEmailText(email);
//   };

//   const setPassword = password => {
//     setPasswordText(password);
//   };

//   async function register() {
//     try {
//       await auth().createUserWithEmailAndPassword(emailText, passwordText);
//     } catch (e) {
//       console.error(e.message);
//     }
//   }

//   return (

//   );
// };

// export default App;
