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


function OrderActive({ navigation, route }) {
  const { id }  = route.params;
  const { details }  = route.params; 
  const { itemId } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Se acepta el servicio pero aun se puede cancelar</Text>
        <Text>Id: { id } </Text>
        <Text>Detalle: {  details } </Text>
        <Button
        title="Iniciar Servicio"
          onPress={() => navigation.navigate('StartService')}
        />
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        
        {/* Pus crea una nueva ruta de la pantalla actualen pila */}
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('OrderActive', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />

      </View>
    );
}

export default OrderActive;