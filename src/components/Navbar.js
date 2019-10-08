import React from "react";
import AboutMe from "./AboutMe.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavbarMenu = props => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Dropdown Menu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="./components/AboutMe.js">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/MatthewYee92">
                My GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact Me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://www.linkedin.com/in/matthewyee92/">
                      LinkedIn
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Resume</DropdownItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
