import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useAppContext} from "../store/context";
import Loading from "../components.js/UI/Loading/Loading";
import useApi from "../hooks/useApi";
import image from "../assets/images/update.png";
import materPage from "../assets/images/materPage.png";
import addNew from "../assets/images/addnew.png";
import error from "../assets/images/error.png";
const Home = () => {
  //const {state} = useAppContext();
  //const {fetchDeletedEmployees} = useApi();

  return (
    <Wrapper>
      <h1>Hello Neotech</h1>
      <p>ADD/UPDATE: FORMS FORMIK, YUP </p>
      <p>SHOW EMPLOYEES: FORMIK TABLE </p>
      <h3>ADD NEW EMPLOYEE</h3>

      <div className='img-frame'>
        <img className='img-div' src={addNew} alt='new-add' />
      </div>
      <div className='img-frame'>
        <img className='img-div' src={error} alt='new-add' />
      </div>
      <h3>HOW TO UPDATE EMPLOYEE?</h3>
      <div className='img-frame'>
        <img className='img-div' src={image} alt='updateHow' />
      </div>
      <h3>PAGINATION</h3>

      <div className='img-frame'>
        <img className='img-div' src={materPage} alt='pagination-info' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  background-color: #0088cc;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-frame {
    width: 100%;
    text-align: center;
  }
  .img-div {
    max-width: 100%;
  }
`;

export default Home;

/*
 <p>ADD/UPDATE FORMS ---> FORMIK, YUP </p>
      <p>SHOW EMPLOYEES --->FORMIK TABLE </p>
      <h3>HOW TO UPDATE EMPLOYEE?</h3>
      <div className='img-frame'>
        <img className='img-div' src={image} alt='updateHow' />
      </div>
      <h3>PAGINATION</h3>

      <div className='img-frame'>
        <img className='img-div' src={materPage} alt='pagination-info' />
      </div>s

      const odsviraj = (taj) => {
    //employees: state.regularEmployees.employees.map((employee, id) =>
    //      id === payload.values._id ? {employee: payload.value} : employee
    let nizmodes = nizovi;
    //   ),
    let id = taj.id;
    alert(id);

    //let indexi = nizmodes.findIndex((emp) => emp.id === taj.id);
    //alert(indexi);
    const newArr = nizmodes.map((emp) => {
      if (emp.id === taj.id) {
        return {...emp, ...taj};
      } else {
        return {...emp};
      }
    });

    console.log(newArr);
  };
*/
