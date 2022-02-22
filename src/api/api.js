import axios from "axios";

//?page=2 i dodavaj page 2 3, 4, 45,
export const fetchEmployees = async (page) => {
  const response = await fetch("http://localhost:3000/employees", {
    method: "GET",
  });

  return response;
};

export const fetchEmployeesDeleted = async (page) => {
  const response = await fetch(
    "http://localhost:3000/employees/deleted?page=" + page,
    {
      method: "GET",
    }
  );

  return response;
};

export const updateUserApi = async (values) => {
  const response = await fetch("http://localhost:3000" + values._id, {
    method: "PATCH",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export const deleteUserRequest = async (id) => {
  const response = await fetch(
    `http://localhost:3000/employees/soft-delete/${id}`,
    {method: "DELETE"}
  );
  return response;
};

export const addNewUserRequest = async (user) => {
  const response = await fetch("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify(user),
  });
  // const content = await response.json();

  return response;
};

export const getDeleted = () => {
  axios
    .get("http://localhost:3000/employees/deleted")
    .then(function (response) {
      console.log(response.data.employees);
      // setEmps(response.data.employees);
    })
    .catch((error) => console.log(error));
};
