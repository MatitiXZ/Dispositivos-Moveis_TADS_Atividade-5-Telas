import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar, Input, Button } from "react-native-elements";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={styles.avatar}/>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />
      <Button title="Entrar" buttonStyle={styles.button} onPress={()=>navigation.navigate('ListaContatos')} />
      <Button title="Cadastre-se" buttonStyle={styles.button} onPress={()=>navigation.navigate('Cadastro')} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>esqueceu a senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      
    },
    avatar: {
      marginBottom: 20,
      backgroundColor: "#5824ab",
    },
    button: {
      width: 200,
      marginVertical: 10,
      backgroundColor: "#5824ab",
    },
    forgotPassword: {
      marginTop: 10,
      color: "black",
      fontWeight: "bold",
    },
  });

const firebaseConfig = {
  apiKey: "AIzaSyA887A7swvJkx24ovl0_eBuZ-tHsEtBqjg",
  authDomain: "aula6-cadastrologinfirebase.firebaseapp.com",
  projectId: "aula6-cadastrologinfirebase",
  storageBucket: "aula6-cadastrologinfirebase.firebasestorage.app",
  messagingSenderId: "615609800043",
  appId: "1:615609800043:web:5386d728646643198e682e",
  measurementId: "G-Z0S1XPV716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};

signInWithEmailAndPassword(email, password)
.then((userCredential) => {
// Signed in
const user = userCredential.user;
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
throw new Error(errorMessage);
});