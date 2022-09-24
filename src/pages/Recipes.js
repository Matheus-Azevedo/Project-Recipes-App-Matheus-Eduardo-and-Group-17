import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { fetchApiDrinks, fetchApiMeals } from '../redux/actions/actionRecipeApi';

function Recipes(props) {
  useEffect(() => {
    const { match, dispatch } = props;
    const { path } = match;
    if (path === '/drinks') {
      dispatch(fetchApiDrinks());
    } else {
      dispatch(fetchApiMeals());
    }
  }, [props]);

  return (
    <div>
      <Card />
    </div>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Recipes);
