import React from 'react';

class Square extends React.Component {
    render() {
      return (
        <td className="square" onClick={function() { alert(this); }}>
          {this.props.value}
        </td>
      );
    }
  }

  export default Square;