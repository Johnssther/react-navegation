
import * as React from 'react';
import { Button, TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// Navigation
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Componentes
//Stack
import Home from './src/screens/home/home'
import OrderActive from './src/screens/home/orderactive'
import StartService from './src/screens/home/startservice'
// Tab
import HistoryMachine from './src/screens/home/historymachine'
import TabA from './src/screens/home/taba'
import TabB from './src/screens/home/tabb'

import Modal from './src/screens/home/modal'


const Tab = createBottomTabNavigator();
function John() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HistoryMachine" component={HistoryMachine} options={{ title: 'Servicio activo' }}/>
      <Tab.Screen name="TabA" component={TabA} options={{ title: 'Iniciar servicio' }}/>
      <Tab.Screen name="TabB" component={TabB} options={{ title: 'Finalizar servicio' }}/>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function Pila({ navigation }) {
  return (
      <Stack.Navigator 
        // mode="modal"
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
          <Button
            style={{ paddingLeft: 20, backgroundColor: 'green' }}
            title="Menu"
            onPress={ ()=>{ navigation.openDrawer() } }
          />
          
          ),

        }}
        >

        <Stack.Screen name="Home" component={ Home } options={{ title: 'Inicio - Servicios'}} />
        <Stack.Screen name="OrderActive" component={ OrderActive } options={{ title: 'Orden Activa' }} />
        <Stack.Screen name="StartService" component={ StartService } options={{ title: 'Servicio Iniciado' }} />
        <Stack.Screen name="John" component={ John } /> 
      </Stack.Navigator>
  );
}

function Pila2() {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="StartService" component={ StartService } options={{ title: 'Servicio Iniciado' }} />
        <Stack.Screen name="John" component={ John } /> 
      </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer
      onStateChange={state => console.log('New state is', state)}
    >
      <Drawer.Navigator
        backBehavior={'none'}
        drawerType={'back'}
        drawerStyle={{
          backgroundColor: '#f7f7f7',
          width: 240,
        }}
      >
        <Drawer.Screen name="Pila" component={Pila} />
        <Drawer.Screen name="Pila2" component={Pila2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;