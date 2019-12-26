import React from 'react';

function Square(props) {
  return (    
      <td
        className="square"
        onClick={() => {props.onClick()} }
        id={props.value}
      >
        {props.value}
      </td>
    );    
}

export default Square;