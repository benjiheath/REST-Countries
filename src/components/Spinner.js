import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/ClipLoader';
import { useGlobalContext } from '../context/AppContext';
import React from 'react';

const styling = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = () => {
  const { theme } = useGlobalContext();
  const color = theme === 'dark' ? '#fff' : 'black';

  return <BeatLoader css={styling} color={color} size={50} />;
};

export default Spinner;
