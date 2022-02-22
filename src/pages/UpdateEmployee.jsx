import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {Redirect} from "@reach/router";
import useApi from "../hooks/useApi";
import {useAppContext} from "../store/context";
import SuperForm from "../components.js/Form/Form";
import Loading from "../components.js/UI/Loading/Loading";
//https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
const UpdateEmployee = () => {
  const [redirect, setRedirect] = useState(false);
  const {state} = useAppContext();
  const {updateUser} = useApi();
  const [emps, setEmps] = useState(null);

  useEffect(() => {
    var location = window.location.pathname.replace("/employees/", "");
    let employee = state.regularEmployees.employees.find(
      (item) => item._id === location
    );
    setEmps(employee);
  }, []);

  const updateThisUser = async (values) => {
    let newlocation = "http://localhost:3000" + window.location.pathname;
    updateUser(values, newlocation);
    alert("User " + values.email + "is updated");
    setRedirect(true);
    //setRedirect(true);
  };

  return (
    <Wrapper>
      {redirect ? <Redirect noThrow to='/employees' /> : null}
      <h1>Update employee </h1>
      {emps !== null ? (
        <SuperForm updateUser={updateThisUser} employee={emps} />
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  padding: 20px;
  background-color: #0088cc;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default UpdateEmployee;
