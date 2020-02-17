import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


function StartService({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla donde se Inicia el servicio, aqui ya no hay vuelta atras</Text>
        <Button
        title="Finalizar Visita"
          onPress={() => navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
        title="Ver historial y Pedir partes."
          onPress={() => navigation.navigate('John')}
        />
      </View>
    );
}

export default StartService;