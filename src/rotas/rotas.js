import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../paginas/login';
import cadastro from '../paginas/cadastro';
import paginainicial from '../paginas/paginainicial';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cadastrarcontato from '../paginas/cadastrarcontato';
import editarcontato from '../paginas/editarcontato';
const HeaderRight = () => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
        <Text style={{ color: 'white', fontSize: 24, marginRight: 15 }}>＋</Text>
      </TouchableOpacity>
    );
  };
const Stack = createStackNavigator();

export default function Rotas() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { backgroundColor: "#4169e1" } }}
        >
          <Stack.Screen
            name="Login"
            component={login}
            options={{ title: "Login", headerShown: false }}
          />

          <Stack.Screen
            name="Cadastro"
            component={cadastro}
            options={{ title: "Cadastro" }}
          />
          <Stack.Screen
            name="ListaContatos"
            component={paginainicial}
            options={{
              title: "Lista de Contatos",
              headerRight: () => <HeaderRight />,
            }}
          />
          <Stack.Screen
            name="CadastroContato"
            component={cadastrarcontato}
            options={{ title: "Contato",headerTitleAlign:'center' }}
            />
            <Stack.Screen 
            name="EditarContato"
            component={editarcontato}
            options={{ title: "Editar Contato",headerTitleAlign:'center' }}
            />
    

            
        </Stack.Navigator>
      </NavigationContainer>
    );
}