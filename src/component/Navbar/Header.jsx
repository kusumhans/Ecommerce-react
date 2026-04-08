import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { useCookies } from 'react-cookie';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(()=>{
    console.log(token, setToken, removeToken);
  }, [token])
  
  return (
    <div>
      <Navbar {...props} className='navbar'>
        <NavbarBrand className="Header" >
        <Link to='/'>shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>  
            <UncontrolledDropdown nav inNavbar style={{marginRight: '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    {token['jwt-token'] ? <Link onClick={() => {
                      console.log(token);
                        removeToken('jwt-token');
                    }} to='/signin'>LogOut</Link> : <Link to='/signin'>signIn</Link> }
                </DropdownItem>
              </DropdownMenu> 
            </UncontrolledDropdown>
              <NavbarText>Hi User</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;