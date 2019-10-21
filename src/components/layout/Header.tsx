import React from 'react';
import { Store } from '../../configureStore';

export default function Header() {
  const { state, dispatch } = React.useContext(Store);
  return <div></div>;
}
