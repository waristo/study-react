import React , { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowman'},
    { id: 2, text: 'Ice'},
    { id: 3, text: 'snow'},
    { id: 4, text: 'wind'}
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({id : nextId, text : inputText});
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  }
  const onRemove = (id) => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  ))

  return (
    <div>
      <input value = {inputText} onChange = {onChange} />
      <button onClick = {onClick}> add </button>
      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default IterationSample;