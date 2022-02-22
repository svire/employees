import {useAppContext} from "../store/context";
import {
  fetchEmployees,
  deleteUserRequest,
  fetchEmployeesDeleted,
} from "../api/api";
import {
  SET_ERROR_MESSAGE,
  SOFT_DELETE_EMPLOYEE,
  ADD_NEW_EMPLOYEE,
  SET_REGULAR_EMPLOYEES,
  UPDATE_EMPLOYEE,
  EXPAND,
  SET_DELETED_EMPLOYEES,
} from "../store/actionTypes";

import axios from "axios";
const useApi = () => {
  const {dispatch} = useAppContext();

  const promjeni = async () => {
    dispatch({
      type: SET_ERROR_MESSAGE,
      payload: {
        errorMessage: "ERROR WHILE FATCHING EMPLOYEES",
      },
    });
  };

  const clearError = async () => {
    dispatch({
      type: SET_ERROR_MESSAGE,
      payload: {
        errorMessage: "",
      },
    });
  };

  const fetchRegularEmployees = async (current) => {
    const response = await fetchEmployees();
    try {
      if (response.status === 200) {
        const data = await response.json();
        dispatch({
          type: SET_REGULAR_EMPLOYEES,
          payload: {
            employees: data.employees,
            currentPage: current,
            loading: true,
          },
        });
      } else {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage: "Error while fetching REGULAR employees",
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: {
          errorMessage: "ERROR WHILE FATCHING EMPLOYEES",
        },
      });
    }
  };

  const fetchDeletedEmployees = async (current) => {
    const response = await fetchEmployeesDeleted(current);
    try {
      if (response.status === 200) {
        const data = await response.json();
        dispatch({
          type: SET_DELETED_EMPLOYEES,
          payload: {
            employees: data.employees,
            currentPage: current,
            loading: false,
          },
        });
        return;
      } else {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage: "Error while fetching DELETED employees",
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: {
          errorMessage: "ERROR WHILE FATCHING EMPLOYEES",
        },
      });
    }
  };

  const getEmployees = async (curr) => {
    const response = await fetchEmployees(curr);
    try {
      if (response.status === 200) {
        const data = await response.json();

        dispatch({
          type: SET_REGULAR_EMPLOYEES,
          payload: {
            employees: data.employees,
            currentPage: curr,
            loading: false,
          },
        });
        return;
      } else {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage: "Error while fetching employees",
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: {
          errorMessage: "ERROR WHILE FATCHING EMPLOYEES",
        },
      });
    }
  };

  const expand = async (params) => {
    dispatch({
      type: EXPAND,
      payload: {
        newarray: params,
        errorMessage: "ne radi niz bajo",
      },
    });
  };

  const updateUser = async (values, location) => {
    axios
      .patch(location, values)
      .then(function (response) {
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: {
            data: values,
          },
        });

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage: "Error while updating user",
          },
        });
      });
  };

  const deleteUser = async (id) => {
    const response = await deleteUserRequest(id);
    try {
      if (response.status === 200) {
        dispatch({
          type: SOFT_DELETE_EMPLOYEE,
          payload: {
            data: [],
            id: id,
          },
        });
      } else {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage:
              "Something went wrong while deleting employee(EMAIL already exist or wrong phone)" +
              id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewRegularEmployee = async (newemp) => {
    dispatch({
      type: ADD_NEW_EMPLOYEE,
      payload: {
        data: newemp,
      },
    });
  };

  const addNewEmployee = async (newemp) => {
    axios
      .post("http://localhost:3000/employees", newemp)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: ADD_NEW_EMPLOYEE,
          payload: {
            data: newemp,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage:
              "Something went wrong while adding employee(EMAIL ALREADY EXIST, or WRONG PHONE NUMBER)",
          },
        });
      });
  };

  return {
    addNewRegularEmployee,
    fetchRegularEmployees,
    getEmployees,
    promjeni,
    deleteUser,
    addNewEmployee,
    updateUser,
    expand,
    clearError,
    fetchDeletedEmployees,
  };
};

export default useApi;
