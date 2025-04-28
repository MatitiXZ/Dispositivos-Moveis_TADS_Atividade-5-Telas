import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";

export default function CadastroContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSalvarContato = async () => {
    const novoContato = { nome, email, telefone };
    console.log(novoContato);

    try {
      await axios.post("http://localhost:8081/contatos", novoContato);
      Alert.alert("Sucesso", "Contato salvo com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao salvar o contato");
    }
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Novo Contato
      </Text>

      <Input
        label="Nome"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
        keyboardType="email-address"
      />

      <TextInputMask
        type={"cel-phone"}
        options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        placeholder="Digite o telefone"
      />

      <Button
        title="Salvar"
        buttonStyle={styles.button}
        onPress={handleSalvarContato}
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
  title: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "#2ECC71",
  },
});