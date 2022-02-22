import {
  SOFT_DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SET_ERROR_MESSAGE,
  ADD_EMPLOYEE,
  ADD_NEW_EMPLOYEE,
  SET_EMPLOYEES,
  SET_DELETED_EMPLOYEES,
  SET_REGULAR_EMPLOYEES,
  EXPAND,
} from "./actionTypes";

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: payload.data,
      };

    case ADD_NEW_EMPLOYEE:
      return {
        ...state,
        regularEmployees: {
          ...state,
          employees: [...state.regularEmployees.employees, payload.data],
        },
      };

    case SET_REGULAR_EMPLOYEES:
      let newarray = [];
      if (state.regularEmployees.employees.length > 20) {
        newarray = [...state.regularEmployees.employees, ...payload.employees];
      } else {
        newarray = [...payload.employees];
      }
      return {
        ...state,
        regularEmployees: {
          ...state,

          employees: newarray,
          /*
          employees: [
            ...state.regularEmployees.employees,
            ...payload.employees,
          ],
          */
          currentPage: payload.currentPage,
          loading: !state.regularEmployees.loading,
        },
      };

    case SET_DELETED_EMPLOYEES:
      return {
        ...state,
        deletedEmployees: {
          ...state,
          //employees: [...state.deletedEmployees.employees, ...payload.emps],
          employees: [
            ...state.deletedEmployees.employees,
            ...payload.employees,
          ],
          currentPage: payload.currentPage,
          loading: !state.deletedEmployees.loading,
          // loading: false,
        },
      };

    case EXPAND:
      return {
        ...state,
        // niz: [...state.niz, payload.newarray], ovako on doda samo jednog
        niz: [...state.niz, ...payload.newarray], //A OVAKO SVE
        errorMessage: payload.errorMessage,
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload.errorMessage,
      };

    case SOFT_DELETE_EMPLOYEE:
      let employee = state.regularEmployees.employees.find(
        (emp) => emp._id === payload.id
      );
      let newemployees = state.regularEmployees.employees.filter(
        (emp) => emp !== employee
      );
      return {
        ...state,
        regularEmployees: {
          ...state,
          employees: newemployees,
        },
      };

    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees],
      };

    case UPDATE_EMPLOYEE:
      const newArr = state.regularEmployees.employees.map((emp) => {
        if (emp.id === payload.data.id) {
          return {...emp, ...payload.data};
        } else {
          return {...emp};
        }
      });

      return {
        ...state,
        regularEmployees: {
          ...state,
          employees: newArr,
        },
      };

    default:
      return state;
  }
};

/*
 case SET_EMPLOYEES:
      return {
        employees: [1, 2, 3, 4],
        deletedEmployees: [],
        employee: null,
        errorMessage: "DOBRO",
      };

*/
