import React from "react";

import "./styles.scss";
import "materialize-css/sass/materialize.scss";
import logo from "../../img/icon-small-2x.png";
//import CustomLink from "../CustomLink";

export const NavbarTemplate = ({ data }) =>
    <div className="navbar-fixed nav-div">
      <nav className="indigo darken-4">
        <div className="nav-wrapper container">
          <img src={logo} alt="logo"/>
          <a href="/#home" className="brand-logo">Primily</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {data.menuItems.map(menuItem => (
              <li key={menuItem.linkURL}>
                <a href={menuItem.linkURL}>
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>;

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };
