import { Box } from '@material-ui/core';
import producApi from 'api/productApi';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
  const match = useRouteMatch();

  useEffect(() => {
    (async () => {
      const response = await producApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response })
    })();
  }, [])

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;