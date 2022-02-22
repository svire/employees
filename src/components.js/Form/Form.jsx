import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Formik, Form} from "formik";
import Input from "../UI/Input/Input";
import Button from "..//UI/Input/Button/Button";
import * as Yup from "yup";

import DatePicker from "react-datepicker";
import {Redirect} from "@reach/router";

const SuperForm = (props) => {
  const [startDateEmployment, setStartDateEmployment] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const [viewOnly, setViewOnly] = useState("");

  useEffect(() => {
    if (props.viewOnly) {
      setViewOnly("hide");
    }
  }, []);

  const validate = Yup.object({
    name: Yup.string()
      .min(3)
      .max(20, "Must be 20 characters or les")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: Yup.number()
      .min(9)
      .positive("A phone number can't start with a minus")
      .required("Required"),
    homeAddress: Yup.object({
      city: Yup.string()
        .min(3)
        .max(20, "Must be 20 characters or les")
        .required("Required"),
      ZIPCode: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(5, "Must be exactly 5 digits")
        .max(5, "Must be exactly 5 digits")
        .required("Required"),
      addressLine1: Yup.string()
        .min(3)
        .max(20, "Must be 20 characters or les")
        .required("Required"),
      // addressLine2: Yup.string().min(3).max(20, "Must be 20 characters or les"),
    }),
  });

  //proper date for the your apis
  const createProperDate = (x) => {
    let helper = x.split("/");
    let newdate = helper[2] + "-" + helper[0] + "-" + helper[1];
    return newdate;
  };

  const SendData = (values) => {
    let birthdate = document.getElementById("date-birth").value;
    let empoloyeddate = document.getElementById("date-employed").value;
    values.dateOfBirth = createProperDate(birthdate);
    values.dateOfEmployment = createProperDate(empoloyeddate);
    props.updateUser(values);
  };

  //{props.viewOnly ? <div>ALABAJOOOOOOOO</div> : <div>nakaradno</div>}
  return (
    <Wrapper>
      <Formik
        initialValues={{
          id: new Date(),
          name: props.employee.name,
          email: props.employee.email,
          phoneNumber: props.employee.phoneNumber,
          homeAddress: {
            city: props.employee.homeAddress.city,
            ZIPCode: props.employee.homeAddress.ZIPCode,
            addressLine1: props.employee.homeAddress.addressLine1,
            addressLine2: props.employee.homeAddress.addressLine2,
          },
          dateOfEmployment: props.employee.startDateEmployment,
          dateOfBirth: props.employee.dateOfBirth,
        }}
        validationSchema={validate}
        onSubmit={(initialValues) => SendData(initialValues)}
      >
        {(formik) => (
          <Form>
            <div className='Forms'>
              <div className='Items'>
                <Input label='Name' name='name' type='text' />
              </div>
              <div className='Items'>
                <Input label='Email' name='email' type='text' />
              </div>
              <div className='Items'>
                <Input label='Phone number' name='phoneNumber' type='text' />
              </div>
              <div className='Items'>
                <Input
                  label='Address line'
                  name='homeAddress.addressLine1'
                  type='text'
                />
              </div>
              <div className='ItemsSplit'>
                <div className='Items'>
                  <Input label='City' name='homeAddress.city' type='text' />
                </div>
                <div className='Items'>
                  <Input
                    label='Zip code'
                    name='homeAddress.ZIPCode'
                    type='text'
                  />
                </div>
              </div>
              <div className='Items'>
                <Input
                  label='Address line (Alternative)'
                  name='homeAddress.addressLine2'
                  placeholder='(optional)'
                  type='text'
                />
              </div>
              <div className='ItemsSplit'>
                <div className='helper'>
                  <label htmlFor='since'>Employeed since</label>
                  <DatePicker
                    name='since'
                    id='date-employed'
                    className='picker'
                    selected={startDateEmployment}
                    onChange={(date) => setStartDateEmployment(date)}
                  />
                </div>
                <div className='helper'>
                  <label htmlFor='birth'>Birth date</label>
                  <DatePicker
                    id='date-birth'
                    name='birth'
                    className='picker'
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                  />
                </div>
              </div>
            </div>
            {viewOnly === "hide" ? (
              <div></div>
            ) : (
              <div className='ali-butt'>
                <Button name='Update' type='primary' />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  padding: 20px;

  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  .button {
    background-color: #0088cc;
    font-size: 1em;
    margin: 1em;
    padding: 0.35em 1.1em;
    border: 4px solid #fff;
    color: #fff;
    border-radius: 25px;
    cursor: pointer;
  }

  .helper {
    padding: 0 20px;
  }

  .ItemsSplit {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 760px) {
    padding: 10px 200px;
    .Forms {
      padding: 50px;
      display: grid;
    }
    .Forms {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .picker {
    width: 70%;
  }
  .ali-butt {
    margin-top: 20px;
    text-align: center;
  }
`;

export default SuperForm;
