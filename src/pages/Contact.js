import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: #1e3c72;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const FormTitle = styled.h2`
  color: #1e3c72;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1e3c72;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #1e3c72;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const InfoTitle = styled.h3`
  color: #1e3c72;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;
  
  a {
    color: #1e3c72;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #1e3c72;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2a5298;
  }
`;

const OfficeCard = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const OfficeTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const OfficeInfo = styled.div`
  margin-bottom: 1rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const MapSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-top: 2rem;
`;

const MapPlaceholder = styled.div`
  height: 300px;
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        interest: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <ContactContainer>
      <PageHeader>
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a encontrar tu hogar ideal en Ecuador</p>
      </PageHeader>

      <ContactGrid>
        <ContactForm>
          <FormTitle>Envíanos un Mensaje</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label>Nombre Completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+593 99 123-4567"
              />
            </FormGroup>

            <FormGroup>
              <label>Ciudad de Interés</label>
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="">Selecciona una ciudad</option>
                <option value="quito">Quito</option>
                <option value="guayaquil">Guayaquil</option>
                <option value="cuenca">Cuenca</option>
                <option value="manta">Manta</option>
                <option value="ambato">Ambato</option>
                <option value="loja">Loja</option>
                <option value="otra">Otra</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label>Tipo de Interés</label>
              <select name="interest" value={formData.interest} onChange={handleChange}>
                <option value="">Selecciona tu interés</option>
                <option value="compra">Compra de Propiedad</option>
                <option value="venta">Venta de Propiedad</option>
                <option value="alquiler">Alquiler</option>
                <option value="inversion">Inversión</option>
                <option value="asesoria">Asesoría Legal</option>
                <option value="otro">Otro</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label>Mensaje *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Cuéntanos sobre tu proyecto inmobiliario..."
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </SubmitButton>
          </form>
        </ContactForm>

        <ContactInfo>
          <OfficeCard>
            <OfficeTitle>Oficina Principal</OfficeTitle>
            <OfficeInfo>
              <p><strong>Ecuador Inmobiliaria</strong></p>
              <p>socio vivienda_ Guayaquil</p>
              <p>Guayaquil, Ecuador</p>
            </OfficeInfo>
          </OfficeCard>

          <InfoCard>
            <InfoTitle>Información de Contacto</InfoTitle>
            <InfoItem>
              <FaPhone />
              <a href="tel:+593967328523">+593 96 7328-523</a>
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              <a href="mailto:nickyparra0@hotmail.com">nickyparra0@hotmail.com</a>
            </InfoItem>
            <InfoItem>
              <FaWhatsapp />
              <a href="https://wa.me/593967328523" target="_blank" rel="noopener noreferrer">+593 96 7328-523</a>
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              <span>socio vivienda_ Guayaquil</span>
            </InfoItem>
            <InfoItem>
              <FaClock />
              <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
            </InfoItem>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Síguenos</InfoTitle>
            <p>Mantente actualizado con las últimas propiedades y noticias del mercado inmobiliario ecuatoriano.</p>
            <SocialLinks>
              <SocialIcon href="#" target="_blank">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <FaWhatsapp />
              </SocialIcon>
            </SocialLinks>
          </InfoCard>
        </ContactInfo>
      </ContactGrid>

      <MapSection>
        <InfoTitle>Ubicación</InfoTitle>
        <MapPlaceholder>
          Mapa de Ubicación - socio vivienda_ Guayaquil, Ecuador
        </MapPlaceholder>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 