import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import producApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row nowrap',

    marginTop: '20px',
    paddingBottom: '10px',
  }
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: "salePrice:ASC",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await producApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to fetch product list', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((preFilters) => ({
      ...preFilters,
      ...newFilters,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              {loading ? (
                <ProductSkeletonList length={9} />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
