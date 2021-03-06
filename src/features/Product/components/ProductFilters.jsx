import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {

  const handleFiltersChange = (filterValue) => {
    if (!onChange) return;

    onChange(filterValue);
  };


  return (
    <Box>
      <FilterByCategory onChange={handleFiltersChange} />
      <FilterByPrice onChange={handleFiltersChange} />
      <FilterByService filters={filters} onChange={handleFiltersChange} />
    </Box>
  );
}

export default ProductFilters;
