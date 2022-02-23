import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';
import { Colors, Devices } from '../../lib/Theme';

const Wrapper = styled.article`
  background-color: ${Colors.Background};
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;

  @media ${Devices.Laptop} {
    display: none;
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

const Hide = styled.span`
  color: ${Colors.White};
`;

function MobileSearchBar({ SearchOpen, setSearchOpen }) {
  return (
    <Wrapper>
      <Background>
        <CgSearch />
        <SearchInput placeholder='Search Collectibles and collection' />
      </Background>
      <Hide
        onClick={() => {
          setSearchOpen(!SearchOpen);
        }}
      ></Hide>
    </Wrapper>
  );
}

export default MobileSearchBar;
