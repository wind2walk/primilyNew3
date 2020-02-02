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
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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
      {data.menuItems.map(menuItem => (
              <li key={menuItem.linkURL}>
                <a href={menuItem.linkURL}>
                  {menuItem.label}
                </a>
              </li>
            ))}
  </ul>
    </div>

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
//  console.log( '**NavbarTemplate**')
  // console.log( 'data=> '+ JSON.stringify(data) )
  return <NavbarTemplate data={data} />;
};

export { Navbar };
