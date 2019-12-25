import React from 'react';

class Square extends React.Component {
  
  render() {
    return (
      <td
        className="square"
        onClick={() => {this.props.onClick()} }
        id={this.props.value}
      >
       {this.props.value}
      </td>
    );
  } 

}

export default Square;