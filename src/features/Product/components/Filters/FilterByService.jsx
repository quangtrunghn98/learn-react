import {
  Box, Checkbox, FormControlLabel, makeStyles,
  Typography,
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    userSelect: 'none',

    '& > li': {
      transition: 'all 0.25s',

      '&:hover': {
        color: theme.palette.primary.dark,
        cursor: 'pointer',
      },
    },
  },

}));

function FilterByService({ onChange, filters }) {
  const classes = useStyles();


  const handleChange = (e) => {
    if (!onChange) return;

    const {name, checked} = e.target;
    onChange({[name]: checked})
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" style={{ userSelect: 'none' }}>
        Dịch vụ
      </Typography>

      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
