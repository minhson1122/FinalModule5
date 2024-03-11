import React, { useState } from 'react';

const SearchComponent = ({ countries }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCountries = countries.filter(
        (country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by country name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredCountries.map((country) => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
