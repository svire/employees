import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton type='submit'>{props.name}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #0088cc;
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1.1em;
  border: 4px solid #fff;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;

  .secondary {
    backround-color: green;
  }
`;
export default Button;
