import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',

    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();

  const [priceValues, setPriceValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPriceValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(priceValues);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Chọn khoảng giá</Typography>

      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          value={priceValues.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          value={priceValues.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
