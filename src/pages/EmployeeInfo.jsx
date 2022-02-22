import React, {useState, useEffect} from "react";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import DatePicker from "react-datepicker";
import {Redirect} from "@reach/router";
import useApi from "../hooks/useApi";
import {useAppContext} from "../store/context";
import SuperForm from "../components.js/Form/Form";
import Loading from "../components.js/UI/Loading/Loading";

const EmployeeInfo = () => {
  // const [redirect, setRedirect] = useState(false);
  const {state} = useAppContext();

  const [emps, setEmps] = useState(null);

  useEffect(() => {
    var location = window.location.pathname.replace("/deleted/", "");
    //alert(location);
    let employee = state.deletedEmployees.employees.find(
      (item) => item._id === location
    );
    setEmps(employee);
  }, []);

  return (
    <Wrapper>
      <h1>Deleted user (View only)</h1>
      {emps !== null ? (
        <SuperForm employee={emps} viewOnly={true} />
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
//v background-color: #0088cc;
export default EmployeeInfo;
