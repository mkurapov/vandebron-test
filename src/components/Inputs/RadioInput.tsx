import React from 'react';
import { FormInput } from '../../types';
import './Inputs.css';

interface RadioInputProps {
  register: any;
  input: FormInput;
  errors: any;
}

const RadioInput = ({ register, input, errors }: RadioInputProps) => {
  return (
    <React.Fragment>
      <label className="text--bold mb-2 d-block">{input.label}</label>
      <div className="d-flex input--radio__options align-items-center">
        {input.options &&
          input.options.map((o: any, i: number) => (
            <div key={i} className=" mr-3 py-2">
              <input id={o} ref={register} name={input.name} className="mr-2" type="radio" value={o} />
              <label htmlFor={o}>{o}</label>
            </div>
          ))}
      </div>
      <div className="form-field__error mt-2 mb-2"> {errors && errors.message} &nbsp; </div>
    </React.Fragment>
  );
};

export default RadioInput;
