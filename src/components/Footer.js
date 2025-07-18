import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #ffd700;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p, a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: #ffd700;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 1rem;
  text-align: center;
  color: rgba(255,255,255,0.8);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Ecuador Inmobiliaria</h3>
          <p>Tu socio de confianza para encontrar la propiedad perfecta en Ecuador. Más de 15 años de experiencia en el mercado inmobiliario ecuatoriano.</p>
          <SocialLinks>
            <SocialIcon href="#" target="_blank">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaWhatsapp />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaTwitter />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contacto</h3>
          <p>
            <FaPhone />
            +593 96 7328-523
          </p>
          <p>
            <FaEnvelope />
            nickyparra0@hotmail.com
          </p>
          <p>
            <FaMapMarkerAlt />
            socio vivienda_ Guayaquil
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Ciudades Principales</h3>
          <p>Quito - Capital</p>
          <p>Guayaquil - Puerto Principal</p>
          <p>Cuenca - Patrimonio Cultural</p>
          <p>Manta - Costa del Pacífico</p>
          <p>Ambato - Tierra de las Flores</p>
        </FooterSection>

        <FooterSection>
          <h3>Servicios</h3>
          <p>Compra y Venta</p>
          <p>Alquiler Residencial</p>
          <p>Alquiler Comercial</p>
          <p>Asesoría Legal</p>
          <p>Financiamiento</p>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 Dennys Moreira. Todos los derechos reservados. | Desarrollado con ❤️ para Ecuador</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 