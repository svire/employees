import React from "react";
import styled from "styled-components";
import {ErrorMessage, useField} from "formik";

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <label htmlFor={field.name}>{label}</label>
      <input
        type='text'
        autoComplete='off'
        {...field}
        {...props}
        className={`searchbox ${meta.touched && meta.error && "invalid"}`}
      />
      <ErrorMessage component='div' className='error' name={field.name} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .invalid {
    background-color: var(--nav-link-bg-hover-color);
  }

  .searchbox {
    width: 90%;
    height: 30px;
    line-height: 30ex;
    font-size: 14px;
    color: #000099;
    border-radius: 10px;
    border: 1px solid #1a1aff;
    padding: 0 10px;
    margin-top: 5px;
    float: left;
  }

   

     
  }

  .searchbox:focus {
    //border: 3px solid #1a1aff;
    background-color: #ddrewe;
  }
`;

export default Input;
