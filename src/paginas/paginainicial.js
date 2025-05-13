import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function paginainicial({ navigation }) {
  const [contatos, setContatos] = useState([]);

  const carregarContatos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contatos");
      setContatos(response.data);
    } catch (error) {
      console.error("Erro ao carregar contatos:", error);
    }
  };

  // Atualiza sempre que a tela for focada
  useFocusEffect(
    useCallback(() => {
      carregarContatos();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("EditarContato", { contato: item })}
    >
      <Avatar
        rounded
        size="medium"
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={styles.avatar}
      />
      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>{item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: "#5824ab",
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
  separator: {
    height: 2,
    backgroundColor: "#ccc",
  },
});