import React from 'react';

import Card from './Card';

const CardList = props => {
  return props.profiles.map(profile => <Card {...profile} />);
};

export default CardList;
