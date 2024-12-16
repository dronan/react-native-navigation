import React from 'react';
import TextoCentral from '../components/TextoCentral';
import {Button, View} from 'react-native';

export default props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          title="Abrir"
          onPress={() => {
            props.navigation.openDrawer();
            setTimeout(() => {
              props.navigation.closeDrawer();
              setInterval(() => {
                props.navigation.toggleDrawer();
              }, 1000);
            }, 3000);
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <TextoCentral corFundo="#146" style={{flex: 1}} corTexto="#CCC">
          Tela D
        </TextoCentral>
      </View>
    </View>
  );
};
