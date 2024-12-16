import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  return (
    <TextoCentral corFundo="#C93" style={{flex: 1}}>
      Tela C - {props.route.params.numero}
    </TextoCentral>
  );
};
