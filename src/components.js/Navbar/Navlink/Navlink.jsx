import React from "react";
import {Link} from "@reach/router";

const NavLink = (props) => (
  <Link
    {...props}
    className='nav-link'
    getProps={({isCurrent}) => ({
      style: {
        backgroundColor: isCurrent ? "var(--nav-link-bg-color)" : "inherit",
      },
    })}
  />
);

export default NavLink;
