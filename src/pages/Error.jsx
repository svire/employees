import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useAppContext} from "../store/context";
import useApi from "../hooks/useApi";

const Error = () => {
  const {state} = useAppContext();
  const {clearError} = useApi();

  const closeError = () => {
    clearError();
  };

  return (
    <Wrapper>
      <div className='error' onClick={() => closeError()}>
        <p className={state.errorMessage.length > 0 ? "big" : "small"}>
          Error message:{state.errorMessage}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  cursor: pointer;

  .error {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .big {
  }
  .small {
    display: none;
  }
`;

export default Error;
