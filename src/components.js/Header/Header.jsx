import React, {useState, useEffect} from "react";
import WindowSize from "../../hooks/WindowSize";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
const Header = () => {
  const [headerType, setHeaderType] = useState("horizontal");
  const [expanded, setExpanded] = useState(false);
  const size = WindowSize();

  const toggleMenu = () => setExpanded(!expanded);

  useEffect(() => {
    setHeaderType(size.width < 768 ? "vertical" : "horizontal");
  }, [size]);

  return (
    <Wrapper>
      <header className={`header header-${headerType}`}>
        {headerType === "horizontal" || expanded ? <Navbar /> : null}
        <Menu
          showMenu={headerType === "vertical"}
          toggleMenu={toggleMenu}
          expanded={expanded}
        />
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    background-color: var(--secondary-bg-color);
    width: 100%;
  }

  .header-horizontal {
    flex-direction: row;
    height: 50px;
  }

  .header-vertical {
    flex-direction: column-reverse;
  }
`;

export default Header;
