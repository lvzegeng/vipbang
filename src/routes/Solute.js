import React from 'react';

class Solute extends React.Component {

  render() {
    return (
      <div>
        <img src={require('../assets/solute1.jpg')} style={{ width: '100%', minWidth: '800px' }} alt="" />
        <img src={require('../assets/solute2.jpg')} style={{ width: '100%', minWidth: '800px' }} alt="" />
      </div>
    );
  }
}

export default Solute;
