import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

export default function EditarContato({ route, navigation }) {
  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email || '');
  const [telefone, setTelefone] = useState(contato.telefone);

  const handleAlterar = async () => {
    try {
      await axios.put(`http://localhost:8081/contatos/${contato.id}`, {
        nome,
        email,
        telefone,
      });
      Alert.alert('Sucesso', 'Contato alterado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível alterar o contato.');
    }
  };

  const handleExcluir = async () => {
    try {
      await axios.delete(`http://localhost:8081/contatos/${contato.id}`);
      Alert.alert('Excluído', 'Contato excluído com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao excluir o contato.');
    }
  };

  return (
    <View style={styles.container}>
      <Input label="Nome" value={nome} onChangeText={setNome} />
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Telefone" value={telefone} onChangeText={setTelefone} />

      <Button title="Alterar" buttonStyle={styles.Alterar} onPress={handleAlterar} />
      <Button title="Excluir" buttonStyle={styles.Excluir} onPress={handleExcluir} />
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
  Alterar: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "#0000ff",
  },
  Excluir: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "#ff0000",
  },
});