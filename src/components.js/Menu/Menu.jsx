import React from "react";
import styled from "styled-components";

import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

const Menu = ({showMenu = true, toggleMenu, expanded}) => {
  return (
    <Wrapper>
      <div className='heads'></div>
      {showMenu && (
        <img
          className='menu-icon'
          src={expanded ? close : menu}
          alt={expanded ? "X" : "="}
          onClick={toggleMenu}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  .heads {
    display: flex;
    flex-direction: row;
    min-height: 40px;
  }

  .menu-icon {
    cursor: pointer;
    margin-right: 10px;
  }
`;

export default Menu;
