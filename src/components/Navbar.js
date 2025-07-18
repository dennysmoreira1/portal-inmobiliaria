import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSearch, FaMapMarkerAlt, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Nav = styled.nav`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #ffd700;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #1e3c72;
    padding: 1rem;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
  
  &.active {
    color: #ffd700;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <FaHome />
          Ecuador Inmobiliaria
        </Logo>

        <NavMenu isOpen={isOpen}>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome />
            Inicio
          </NavLink>
          <NavLink to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>
            <FaSearch />
            Propiedades
          </NavLink>
          <NavLink to="/cities" className={location.pathname === '/cities' ? 'active' : ''}>
            <FaMapMarkerAlt />
            Ciudades
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            <FaPhone />
            Contacto
          </NavLink>
        </NavMenu>

        <ContactInfo>
          <a
            href="https://wa.me/593967328523"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#25D366', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
            title="Chatea por WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </ContactInfo>

        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 