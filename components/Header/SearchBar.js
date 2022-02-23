import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';
import { Colors, Devices } from '../../lib/Theme';

const Wrapper = styled.article`
  background-color: ${Colors.Background};
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  height: 100%;
  max-width: 480px;
  // display: none;
  flex: 1;
  align-items: center;

  @media ${Devices.Laptop} {
    display: flex;
  }
`;

const Background = styled.div`
  background-color: ${Colors.White};
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  border-radius: 20px;
  padding: 0.5rem 0.7rem;

  svg {
    font-size: 1.5rem;
    color: ${Colors.Primary};
  }
`;
const SearchInput = styled.input`
  border: none;
  font-size: 1.15rem;
  flex: 1;
  
  :focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <Wrapper>
      <Background>
        <CgSearch />
        <SearchInput placeholder='Search Collectibles and collection' />
      </Background>
    </Wrapper>
  );
}

export default SearchBar;
