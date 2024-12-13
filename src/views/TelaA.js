import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  props.navigation.navigate('TelaB');
  return (
    <TextoCentral corFundo="#E53935" style={{flex: 1}}>
      Tela A
    </TextoCentral>
  );
};
