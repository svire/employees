import React, {useEffect} from "react";
import styled from "styled-components";
import TablePaginated from "../components.js/Tables/TablePaginated";
import Loading from "../components.js/UI/Loading/Loading";
import useApi from "../hooks/useApi";
import {useAppContext} from "../store/context";

const ShowEmployees = () => {
  const {state} = useAppContext();
  const {getEmployees, deleteUser, fetchRegularEmployees} = useApi();

  useEffect(() => {
    let currentPage = state.regularEmployees.currentPage + 1;
    fetchRegularEmployees(currentPage);
    //getEmployees();
  }, []);

  const PaginateNextOne = () => {
    //let currentPage = state.regularEmployees.currentPage + 1;
    //fetchRegularEmployees(currentPage);
  };

  const deleteThisUser = (id) => {
    deleteUser(id);
  };

  return (
    <Wrapper>
      <h1>List of employees</h1>

      {state.employees.length > 0 ? (
        <TablePaginated
          employees={state.regularEmployees.employees}
          delEmp={deleteThisUser}
          paginateNextOne={PaginateNextOne}
        />
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  background-color: #0088cc;
  color: white;
  height: 100%;
  align-items: center;
`;

export default ShowEmployees;
