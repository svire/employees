import React, {useEffect} from "react";
import styled from "styled-components";
import TablePaginated from "../components.js/Tables/TablePaginated";
import Loading from "../components.js/UI/Loading/Loading";
import useApi from "../hooks/useApi";
import {useAppContext} from "../store/context";

const ExEmployees = () => {
  //const [emps, setEmps] = useState([]);
  const {fetchDeletedEmployees} = useApi();
  const {state} = useAppContext();

  //gotyaa
  useEffect(() => {
    let currentPage = state.deletedEmployees.currentPage + 1;
    fetchDeletedEmployees(currentPage);
  }, []);

  const DeleteEmployee = (id) => {
    alert("Already deleted");
  };

  const PaginateNextOne = () => {
    let currentPage = state.deletedEmployees.currentPage + 1;
    fetchDeletedEmployees(currentPage);
  };

  return (
    <Wrapper>
      <h1>Deleted employees</h1>
      {state.deletedEmployees.employees.length > 0 ? (
        <TablePaginated
          employees={state.deletedEmployees.employees}
          delEmp={DeleteEmployee}
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
  margin: 0 auto;
`;

export default ExEmployees;
