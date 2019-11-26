import React from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';

const Input = ( props: InputComponent ) => {
  return (
    <div className="col-12">
      <label className="mb-2 text--bold d-block">{ props.input.label }</label>
      <input onChange={ev => props.onChange(ev, props.input.name)} className="input--text" type="text" value={props.value} />
    </div>
  );
}

export default Input;