import React from "react";
import NavLink from "../Navbar/Navlink/Navlink";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/employees'>Employees</NavLink>
      <NavLink to='/deleted'>Ex employees</NavLink>
      <NavLink to='/addnew'>Add employee</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: inherit;
`;

export default Navbar;
