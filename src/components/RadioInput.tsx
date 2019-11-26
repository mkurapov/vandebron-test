import React from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';


interface RadioInputProps {
  register:any,
  input: FormInput,
  hasError: boolean,
}


const RadioInput = ({ register, input, hasError }:RadioInputProps) => {
  return (
    <React.Fragment>
      <label className="text--bold mb-2 d-block">{ input.label }</label>
      <div className="d-flex align-items-center">
      { input.options && input.options.map((o:any, i:number) => 
      (
        <div key={i} className="mr-3 py-2"> 
          <input id={o} ref={register} name={input.name} className="mr-2" type="radio" value={o} />
          <label htmlFor={o}>{ o }</label>
        </div>
      ))}
      </div>
    </React.Fragment>
  );
}

export default RadioInput;