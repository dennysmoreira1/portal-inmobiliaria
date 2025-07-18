import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaFilter, FaArrowRight } from 'react-icons/fa';

const PropertiesContainer = styled.div`
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

const FiltersSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
`;

const FiltersTitle = styled.h3`
  color: #1e3c72;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const FilterGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1e3c72;
    font-weight: 500;
  }
  
  select, input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
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
  margin-top: 1rem;
  
  &:hover {
    background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
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
  height: 250px;
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
`;

const PropertyBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.type === 'venta' ? '#28a745' : '#ffc107'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const PropertyInfo = styled.div`
  padding: 1.5rem;
`;

const PropertyTitle = styled.h3`
  color: #1e3c72;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
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
  font-size: 1.8rem;
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

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  
  h3 {
    color: #1e3c72;
    margin-bottom: 1rem;
  }
`;

const Properties = () => {
    const [filters, setFilters] = useState({
        city: '',
        type: '',
        operation: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: ''
    });

    const [filteredProperties, setFilteredProperties] = useState([]);

    const allProperties = [
        {
            id: 1,
            title: "Apartamento de Lujo en Quito",
            location: "Quito, Pichincha",
            price: 180000,
            beds: 3,
            baths: 2,
            area: "120m²",
            type: "apartamento",
            operation: "venta"
        },
        {
            id: 2,
            title: "Casa Familiar en Guayaquil",
            location: "Guayaquil, Guayas",
            price: 250000,
            beds: 4,
            baths: 3,
            area: "200m²",
            type: "casa",
            operation: "venta"
        },
        {
            id: 3,
            title: "Villa en Cuenca",
            location: "Cuenca, Azuay",
            price: 320000,
            beds: 5,
            baths: 4,
            area: "350m²",
            type: "villa",
            operation: "venta"
        },
        {
            id: 4,
            title: "Apartamento en Manta",
            location: "Manta, Manabí",
            price: 120000,
            beds: 2,
            baths: 2,
            area: "85m²",
            type: "apartamento",
            operation: "venta"
        },
        {
            id: 5,
            title: "Casa en Ambato",
            location: "Ambato, Tungurahua",
            price: 150000,
            beds: 3,
            baths: 2,
            area: "150m²",
            type: "casa",
            operation: "alquiler"
        },
        {
            id: 6,
            title: "Oficina en Quito",
            location: "Quito, Pichincha",
            price: 200000,
            beds: 0,
            baths: 1,
            area: "100m²",
            type: "oficina",
            operation: "venta"
        }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        let filtered = allProperties;

        if (filters.city) {
            filtered = filtered.filter(prop =>
                prop.location.toLowerCase().includes(filters.city.toLowerCase())
            );
        }

        if (filters.type) {
            filtered = filtered.filter(prop => prop.type === filters.type);
        }

        if (filters.operation) {
            filtered = filtered.filter(prop => prop.operation === filters.operation);
        }

        if (filters.minPrice) {
            filtered = filtered.filter(prop => prop.price >= parseInt(filters.minPrice));
        }

        if (filters.maxPrice) {
            filtered = filtered.filter(prop => prop.price <= parseInt(filters.maxPrice));
        }

        if (filters.bedrooms) {
            filtered = filtered.filter(prop => prop.beds >= parseInt(filters.bedrooms));
        }

        setFilteredProperties(filtered);
    };

    const displayProperties = filteredProperties.length > 0 ? filteredProperties : allProperties;

    return (
        <PropertiesContainer>
            <PageHeader>
                <h1>Propiedades en Ecuador</h1>
                <p>Encuentra tu hogar ideal en las mejores ciudades del Ecuador</p>
            </PageHeader>

            <FiltersSection>
                <FiltersTitle>
                    <FaFilter />
                    Filtros de Búsqueda
                </FiltersTitle>
                <FiltersGrid>
                    <FilterGroup>
                        <label>Ciudad</label>
                        <input
                            type="text"
                            name="city"
                            value={filters.city}
                            onChange={handleFilterChange}
                            placeholder="Ej: Quito, Guayaquil"
                        />
                    </FilterGroup>

                    <FilterGroup>
                        <label>Tipo de Propiedad</label>
                        <select name="type" value={filters.type} onChange={handleFilterChange}>
                            <option value="">Todos los tipos</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="casa">Casa</option>
                            <option value="villa">Villa</option>
                            <option value="oficina">Oficina</option>
                        </select>
                    </FilterGroup>

                    <FilterGroup>
                        <label>Operación</label>
                        <select name="operation" value={filters.operation} onChange={handleFilterChange}>
                            <option value="">Todas</option>
                            <option value="venta">Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </FilterGroup>

                    <FilterGroup>
                        <label>Precio Mínimo</label>
                        <input
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            placeholder="USD"
                        />
                    </FilterGroup>

                    <FilterGroup>
                        <label>Precio Máximo</label>
                        <input
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            placeholder="USD"
                        />
                    </FilterGroup>

                    <FilterGroup>
                        <label>Habitaciones Mínimas</label>
                        <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange}>
                            <option value="">Cualquiera</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                        </select>
                    </FilterGroup>
                </FiltersGrid>

                <SearchButton onClick={handleSearch}>
                    <FaSearch />
                    Buscar Propiedades
                </SearchButton>
            </FiltersSection>

            {displayProperties.length === 0 ? (
                <NoResults>
                    <h3>No se encontraron propiedades</h3>
                    <p>Intenta ajustar los filtros de búsqueda</p>
                </NoResults>
            ) : (
                <PropertiesGrid>
                    {displayProperties.map(property => (
                        <PropertyCard key={property.id}>
                            <PropertyImage>
                                <PropertyBadge type={property.operation}>
                                    {property.operation.toUpperCase()}
                                </PropertyBadge>
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
                                <PropertyPrice>${property.price.toLocaleString()}</PropertyPrice>
                                <ViewButton to={`/property/${property.id}`}>
                                    Ver Detalles
                                    <FaArrowRight />
                                </ViewButton>
                            </PropertyInfo>
                        </PropertyCard>
                    ))}
                </PropertiesGrid>
            )}
        </PropertiesContainer>
    );
};

export default Properties; 