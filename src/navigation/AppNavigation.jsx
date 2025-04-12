import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UsersScreen from '../screens/UsersScreen';
import DatosScreen from '../screens/DatosScreen'; // 👈 Importa la pantalla de detalles

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="DatosScreen" component={DatosScreen} options={{ title: 'Detalles del Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
