import React from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';

const Input = ( props: InputComponent ) => {
  return (
    <React.Fragment>
      <label className="mb-2 text--bold d-block">{ props.input.label }</label>
      <input onChange={ev => props.onChange(ev, props.input.name)} className="input--text" type="text" value={props.value} />
    </React.Fragment>
  );
}

export default Input;