import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Nav,
  Navbar as NavBar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { Context } from '../../Context';

interface Props {}

export const Navbar: FC<Props> = (props: Props) => {
  //useState
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //useContext
  const { store }: any = useContext(Context);
  const auth = store?.auth || {};
  const modules = auth?.modules || [];

  const getModules = () => {
    return modules.map((module: any) => {
      return (
        <NavItem>
          <NavLink className={'nav-link'} to={module.href}>
            {module.title}
          </NavLink>
        </NavItem>
      );
    });
  };

  return (
    <NavBar color='dark' dark expand='lg' className='mb-4'>
      <Container fluid={true}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id='navbarResponsive'>
          <Nav className='mx-auto' navbar>
            {getModules()}
          </Nav>
        </Collapse>
      </Container>
    </NavBar>
  );
};
