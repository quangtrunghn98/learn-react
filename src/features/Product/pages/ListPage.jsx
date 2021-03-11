import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import producApi from 'api/productApi';
import React, { useEffect, useState } from 'react';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await producApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response })
    })();
  }, [])

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>right Column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
