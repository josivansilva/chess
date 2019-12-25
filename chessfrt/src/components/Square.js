import React from 'react';

class Square extends React.Component {
  
  render() {
    return (
      <td
        className="square"
        onClick={() => {this.props.onClick()} }
      >
        {this.props.value}
      </td>
    );
  }  

}

export default Square;