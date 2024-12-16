import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  const r = props.route;
  const numero = r && r.params && r.params.numero ? r.params.numero : 0;
  return (
    <TextoCentral corFundo="#C93" style={{flex: 1}}>
      Tela C {numero}
    </TextoCentral>
  );
};
