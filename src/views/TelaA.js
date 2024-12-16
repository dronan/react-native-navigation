import React from 'react';
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';

export default props => {
  return (
    <PassoStack {...props} avancar="TelaB">
      <TextoCentral corFundo="#E53935" style={{flex: 1}}>
        Tela A
      </TextoCentral>
    </PassoStack>
  );
};
