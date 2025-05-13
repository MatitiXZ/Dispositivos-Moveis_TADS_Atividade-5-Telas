import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./login";


const novoUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [nome, setNome] = useState("");
  // const [cpf, setCpf] = useState("");

  const handleCadastro = async () => {
    const novoUsuario = await novoUser(email,senha);
    console.log(novoUsuario);

    // try {
    //   await axios.post("http://localhost:8081/users", novoUsuario);
    //   Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
    //   setNome("");
    //   setCpf("");
    //   setEmail("");
    //   setSenha("");
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert("Erro", "Falha ao cadastrar usuário");
    // }
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Cadastro
      </Text>

      {/* <Input
        label="Nome"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <TextInputMask
        type={"cpf"}
        label="CPF"
        value={cpf}
        onChangeText={setCpf}
        placeholder="Digite seu CPF"
        style={styles.input}
      /> */}
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={handleCadastro}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "#2ECC71",
  },

  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

