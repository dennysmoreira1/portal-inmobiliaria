import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaArrowRight } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
`;

const SearchBox = styled.div`
  background: rgba(255,255,255,0.95);
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  
  h3 {
    color: #1e3c72;
    margin-bottom: 1rem;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #1e3c72;
  margin-bottom: 3rem;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const PropertyCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const PropertyImage = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PropertyInfo = styled.div`
  padding: 1.5rem;
`;

const PropertyTitle = styled.h3`
  color: #1e3c72;
  margin-bottom: 0.5rem;
`;

const PropertyLocation = styled.p`
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const PropertyFeatures = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const PropertyPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 1rem;
`;

const ViewButton = styled(Link)`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
  }
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CityCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    color: #1e3c72;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
  }
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: #ffd700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.1rem;
  }
`;

const Home = () => {
    const featuredProperties = [
        {
            id: 1,
            title: "Apartamento de Lujo en Quito",
            location: "Quito, Pichincha",
            price: "$180,000",
            beds: 3,
            baths: 2,
            area: "120m²"
        },
        {
            id: 2,
            title: "Casa Familiar en Guayaquil",
            location: "Guayaquil, Guayas",
            price: "$250,000",
            beds: 4,
            baths: 3,
            area: "200m²"
        },
        {
            id: 3,
            title: "Villa en Cuenca",
            location: "Cuenca, Azuay",
            price: "$320,000",
            beds: 5,
            baths: 4,
            area: "350m²"
        }
    ];

    const cities = [
        {
            name: "Quito",
            description: "Capital del Ecuador, patrimonio cultural de la humanidad",
            properties: "1,250+"
        },
        {
            name: "Guayaquil",
            description: "Puerto principal, centro económico del país",
            properties: "980+"
        },
        {
            name: "Cuenca",
            description: "Ciudad patrimonio, arquitectura colonial",
            properties: "650+"
        },
        {
            name: "Manta",
            description: "Costa del Pacífico, playas paradisíacas",
            properties: "420+"
        }
    ];

    return (
        <HomeContainer>
            <HeroSection>
                <HeroContent>
                    <h1>Encuentra tu Hogar en Ecuador</h1>
                    <p>Descubre las mejores propiedades en las ciudades más hermosas del Ecuador</p>

                    <SearchBox>
                        <h3>Buscar Propiedades</h3>
                        <SearchForm>
                            <SearchInput type="text" placeholder="Ciudad o zona" />
                            <SearchInput type="text" placeholder="Tipo de propiedad" />
                            <SearchButton type="submit">
                                <FaSearch />
                                Buscar
                            </SearchButton>
                        </SearchForm>
                    </SearchBox>
                </HeroContent>
            </HeroSection>

            <Section>
                <SectionTitle>Propiedades Destacadas</SectionTitle>
                <FeaturedGrid>
                    {featuredProperties.map(property => (
                        <PropertyCard key={property.id}>
                            <PropertyImage>
                                {property.title}
                            </PropertyImage>
                            <PropertyInfo>
                                <PropertyTitle>{property.title}</PropertyTitle>
                                <PropertyLocation>
                                    <FaMapMarkerAlt />
                                    {property.location}
                                </PropertyLocation>
                                <PropertyFeatures>
                                    <span><FaBed /> {property.beds} hab</span>
                                    <span><FaBath /> {property.baths} baños</span>
                                    <span><FaRulerCombined /> {property.area}</span>
                                </PropertyFeatures>
                                <PropertyPrice>{property.price}</PropertyPrice>
                                <ViewButton to={`/property/${property.id}`}>
                                    Ver Detalles
                                    <FaArrowRight />
                                </ViewButton>
                            </PropertyInfo>
                        </PropertyCard>
                    ))}
                </FeaturedGrid>
            </Section>

            <StatsSection>
                <SectionTitle style={{ color: 'white' }}>Nuestros Números</SectionTitle>
                <StatsGrid>
                    <StatItem>
                        <h3>15+</h3>
                        <p>Años de Experiencia</p>
                    </StatItem>
                    <StatItem>
                        <h3>3,500+</h3>
                        <p>Propiedades Vendidas</p>
                    </StatItem>
                    <StatItem>
                        <h3>2,000+</h3>
                        <p>Clientes Satisfechos</p>
                    </StatItem>
                    <StatItem>
                        <h3>25+</h3>
                        <p>Ciudades Cubiertas</p>
                    </StatItem>
                </StatsGrid>
            </StatsSection>

            <Section>
                <SectionTitle>Ciudades Principales</SectionTitle>
                <CitiesGrid>
                    {cities.map(city => (
                        <CityCard key={city.name}>
                            <h3>{city.name}</h3>
                            <p>{city.description}</p>
                            <p><strong>{city.properties} propiedades disponibles</strong></p>
                        </CityCard>
                    ))}
                </CitiesGrid>
            </Section>
        </HomeContainer>
    );
};

export default Home; 