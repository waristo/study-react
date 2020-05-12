import React from 'react';
import ProtoTypes from 'prop-types';

const MyComponent = ({name, children, number}) => {
  return( 
    <div>My name is {name} <br />
      My old is {children} <br />
      My favorite number is {number} <br />
    </div>
)};

MyComponent.defaultProps = {
  name: 'gimwonbae'
};

MyComponent.ProtoTypes = {
  name : ProtoTypes.string,
  number : ProtoTypes.number.isRequired
}

export default MyComponent;
