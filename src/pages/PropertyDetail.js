import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar, FaPhone, FaEnvelope, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const PropertyDetailContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1e3c72;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    color: #2a5298;
  }
`;

const PropertyHeader = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const PropertyTitle = styled.h1`
  color: #1e3c72;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PropertyLocation = styled.p`
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const PropertyPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 1rem;
`;

const PropertyBadge = styled.span`
  background: ${props => props.type === 'venta' ? '#28a745' : '#ffc107'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #1e3c72;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const PropertyImage = styled.div`
  height: 400px;
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1e3c72;
  font-weight: 500;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
`;

const Amenity = styled.li`
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "✓";
    color: #28a745;
    font-weight: bold;
  }
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  position: sticky;
  top: 2rem;
`;

const ContactTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactButton = styled.button`
  background: white;
  color: #1e3c72;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }
`;

const PropertyDetail = () => {
    const { id } = useParams();

    // Mock property data - in a real app this would come from an API
    const property = {
        id: parseInt(id),
        title: "Apartamento de Lujo en Quito",
        location: "Quito, Pichincha - Sector La Carolina",
        price: 180000,
        operation: "venta",
        beds: 3,
        baths: 2,
        area: "120m²",
        parking: 1,
        description: "Hermoso apartamento ubicado en el exclusivo sector de La Carolina, Quito. Esta propiedad cuenta con acabados de lujo, vista panorámica a la ciudad y acceso a todas las comodidades del sector. El apartamento incluye cocina equipada, sala de estar amplia, 3 habitaciones con closets empotrados, 2 baños completos y un espacio de estacionamiento privado.",
        amenities: [
            "Cocina equipada",
            "Closets empotrados",
            "Vista panorámica",
            "Estacionamiento privado",
            "Seguridad 24/7",
            "Área de lavandería",
            "Balcón privado",
            "Calefacción central",
            "Internet incluido",
            "Mantenimiento incluido"
        ],
        agent: {
            name: "María González",
            phone: "+593 2 234-5678",
            email: "maria.gonzalez@ecuadorinmobiliaria.com",
            whatsapp: "+593 99 123-4567"
        }
    };

    return (
        <PropertyDetailContainer>
            <BackButton to="/properties">
                <FaArrowLeft />
                Volver a Propiedades
            </BackButton>

            <PropertyHeader>
                <PropertyBadge type={property.operation}>
                    {property.operation.toUpperCase()}
                </PropertyBadge>
                <PropertyTitle>{property.title}</PropertyTitle>
                <PropertyLocation>
                    <FaMapMarkerAlt />
                    {property.location}
                </PropertyLocation>
                <PropertyPrice>${property.price.toLocaleString()}</PropertyPrice>
            </PropertyHeader>

            <PropertyGrid>
                <MainContent>
                    <Section>
                        <PropertyImage>
                            {property.title}
                        </PropertyImage>

                        <FeaturesGrid>
                            <Feature>
                                <FaBed />
                                {property.beds} Habitaciones
                            </Feature>
                            <Feature>
                                <FaBath />
                                {property.baths} Baños
                            </Feature>
                            <Feature>
                                <FaRulerCombined />
                                {property.area}
                            </Feature>
                            <Feature>
                                <FaCar />
                                {property.parking} Estacionamiento
                            </Feature>
                        </FeaturesGrid>
                    </Section>

                    <Section>
                        <SectionTitle>Descripción</SectionTitle>
                        <Description>{property.description}</Description>
                    </Section>

                    <Section>
                        <SectionTitle>Amenidades</SectionTitle>
                        <AmenitiesList>
                            {property.amenities.map((amenity, index) => (
                                <Amenity key={index}>{amenity}</Amenity>
                            ))}
                        </AmenitiesList>
                    </Section>
                </MainContent>

                <ContactCard>
                    <ContactTitle>Contactar Agente</ContactTitle>

                    <ContactInfo>
                        <ContactItem>
                            <strong>{property.agent.name}</strong>
                        </ContactItem>
                        <ContactItem>
                            <FaPhone />
                            <a href={`tel:${property.agent.phone}`}>{property.agent.phone}</a>
                        </ContactItem>
                        <ContactItem>
                            <FaEnvelope />
                            <a href={`mailto:${property.agent.email}`}>{property.agent.email}</a>
                        </ContactItem>
                    </ContactInfo>

                    <ContactButton onClick={() => window.open(`https://wa.me/${property.agent.whatsapp.replace(/\s/g, '')}`, '_blank')}>
                        <FaWhatsapp />
                        Contactar por WhatsApp
                    </ContactButton>

                    <ContactButton onClick={() => window.open(`tel:${property.agent.phone}`, '_blank')}>
                        <FaPhone />
                        Llamar Ahora
                    </ContactButton>
                </ContactCard>
            </PropertyGrid>
        </PropertyDetailContainer>
    );
};

export default PropertyDetail; 