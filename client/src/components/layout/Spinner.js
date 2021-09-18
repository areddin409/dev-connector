import React, { Fragment } from 'react';
import spinner from './spinner.svg';

export default function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  );
}
