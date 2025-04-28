import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar, Input, Button } from "react-native-elements";


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