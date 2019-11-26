import React from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';


const RadioInput = ( props: InputComponent ) => {
  return (
    <div className="col-12">
      <label className="text--bold mb-2 d-block">{ props.input.label }</label>
      { props.input.options && props.input.options.map((o,i) => 
      (
        <div key={i} className="mb-2"> 
          <input onChange={ev => props.onChange(ev, props.input)} className="mr-2" type="radio" value={o.value} name={props.input.name}/>
          <label >{ o.label }</label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;