import React from 'react';
import styled from 'styled-components';
import { Colors } from '../lib/Theme';

const Wrapper = styled.article`
  border-radius: 10px;
  background-color: ${Colors.GrayBG};
  border: 1px solid ${Colors.Border};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Gray};
  padding: 50px;
`;

function Tab({ children }) {
  if (children) return <>{children}</>;
  else return <Wrapper>Nothing to show 🤷🏻‍♂️</Wrapper>;
}

export default Tab;
