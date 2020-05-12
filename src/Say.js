import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage ] = useState('');
  const onClickEnter = () => setMessage('Hi');
  const onClickLeave = () => setMessage('Bye');

  const [color, SetColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style = {{color}}>{message}</h1>
      <button style = {{color : 'red'}} onClick={()=>SetColor('red')}>
        Red
      </button>
      <button style = {{color : 'green'}} onClick={()=>SetColor('green')}>
        green
      </button>
      <button style = {{color : 'blue'}} onClick={()=>SetColor('blue')}>
        blue
      </button>
    </div>
  );
};

export default Say;