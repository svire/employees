import React from "react";
import "./App.css";
import Header from "./components.js/Header/Header";
import {Router} from "@reach/router";
import Home from "./pages/Home";
import {StateProvider} from "./store/context";
import ShowEmployees from "./pages/ShowEmployees";
import AddNew from "./pages/AddNew";
import ExEmployees from "./pages/ExEmployess";
import UpdateEmployee from "./pages/UpdateEmployee";
import EmployeeInfo from "./pages/EmployeeInfo";
import Error from "./pages/Error";

function App() {
  return (
    <div className='App'>
      <StateProvider>
        <Header />
        <Error />
        <Router>
          <ShowEmployees path='/employees' />
          <ExEmployees path='/deleted' />
          <UpdateEmployee path='/employees/:id' />
          <EmployeeInfo path='/deleted/:id' />
          <AddNew path='/addnew' />
          <Home default path='/' />
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
