import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Esta es la pantalla del inicio</Text>
        <Button
        title="Aceptar servicio-"
          onPress={() => navigation.navigate('OrderActive',{
            id:2,
            details:'Orden de servicio para el parqueadero Las sorpresas de la terminal de trasnportes.',
          })}
        />
      </View>
    );
}

export default Home;