import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaBuilding, FaHome, FaMountain, FaWater, FaLeaf } from 'react-icons/fa';

const CitiesContainer = styled.div`
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

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CityCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CityImage = styled.div`
  height: 200px;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
`;

const CityInfo = styled.div`
  padding: 2rem;
`;

const CityTitle = styled.h2`
  color: #1e3c72;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const CityDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CityFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const CityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const Stat = styled.div`
  text-align: center;
  
  .number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e3c72;
  }
  
  .label {
    font-size: 0.9rem;
    color: #666;
  }
`;

const ExploreButton = styled(Link)`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
    transform: translateY(-2px);
  }
`;

const Cities = () => {
    const cities = [
        {
            id: 1,
            name: "Quito",
            description: "Capital del Ecuador y Patrimonio Cultural de la Humanidad. Ubicada en los Andes a 2,850 metros sobre el nivel del mar, Quito ofrece una mezcla perfecta de historia colonial y modernidad.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: <FaMountain />,
            properties: "1,250+",
            avgPrice: "$180,000",
            population: "2.7M",
            highlights: ["Centro Histórico", "Teleférico", "Mitad del Mundo"]
        },
        {
            id: 2,
            name: "Guayaquil",
            description: "Puerto principal y centro económico del Ecuador. Conocida como la 'Perla del Pacífico', Guayaquil es una ciudad vibrante con un clima tropical y una economía dinámica.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: <FaWater />,
            properties: "980+",
            avgPrice: "$220,000",
            population: "2.7M",
            highlights: ["Malecón 2000", "Las Peñas", "Parque Histórico"]
        },
        {
            id: 3,
            name: "Cuenca",
            description: "Ciudad Patrimonio Cultural de la Humanidad, famosa por su arquitectura colonial, artesanías y calidad de vida. Ubicada en el sur del Ecuador.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: <FaBuilding />,
            properties: "650+",
            avgPrice: "$160,000",
            population: "580K",
            highlights: ["Centro Histórico", "Sombreros de Paja", "Catedral Nueva"]
        },
        {
            id: 4,
            name: "Manta",
            description: "Puerto pesquero y turístico en la costa del Pacífico. Conocida por sus hermosas playas, pesca deportiva y como centro de comercio marítimo.",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            icon: <FaWater />,
            properties: "420+",
            avgPrice: "$140,000",
            population: "250K",
            highlights: ["Playa Murciélago", "Pesca Deportiva", "Puerto Pesquero"]
        },
        {
            id: 5,
            name: "Ambato",
            description: "Conocida como la 'Tierra de las Flores y las Frutas'. Ciudad importante en el centro del Ecuador, famosa por su Festival de las Flores y Frutas.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            icon: <FaLeaf />,
            properties: "380+",
            avgPrice: "$130,000",
            population: "180K",
            highlights: ["Festival de Flores", "Quinta de Juan León Mera", "Parque Montalvo"]
        },
        {
            id: 6,
            name: "Loja",
            description: "Ciudad universitaria y cultural en el sur del Ecuador. Conocida por su música, artesanías y como centro de educación superior.",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            icon: <FaHome />,
            properties: "320+",
            avgPrice: "$120,000",
            population: "200K",
            highlights: ["Universidad Nacional", "Música Lojana", "Parque Podocarpus"]
        }
    ];

    return (
        <CitiesContainer>
            <PageHeader>
                <h1>Ciudades de Ecuador</h1>
                <p>Descubre las ciudades más hermosas y vibrantes del Ecuador, cada una con su propio carácter y encanto único</p>
            </PageHeader>

            <CitiesGrid>
                {cities.map(city => (
                    <CityCard key={city.id}>
                        <CityImage gradient={city.gradient}>
                            {city.icon}
                            {city.name}
                        </CityImage>
                        <CityInfo>
                            <CityTitle>{city.name}</CityTitle>
                            <CityDescription>{city.description}</CityDescription>

                            <CityFeatures>
                                {city.highlights.map((highlight, index) => (
                                    <Feature key={index}>
                                        <FaMapMarkerAlt />
                                        {highlight}
                                    </Feature>
                                ))}
                            </CityFeatures>

                            <CityStats>
                                <Stat>
                                    <div className="number">{city.properties}</div>
                                    <div className="label">Propiedades</div>
                                </Stat>
                                <Stat>
                                    <div className="number">{city.avgPrice}</div>
                                    <div className="label">Precio Promedio</div>
                                </Stat>
                                <Stat>
                                    <div className="number">{city.population}</div>
                                    <div className="label">Población</div>
                                </Stat>
                            </CityStats>

                            <ExploreButton to={`/properties?city=${city.name.toLowerCase()}`}>
                                Explorar Propiedades
                                <FaMapMarkerAlt />
                            </ExploreButton>
                        </CityInfo>
                    </CityCard>
                ))}
            </CitiesGrid>
        </CitiesContainer>
    );
};

export default Cities; 