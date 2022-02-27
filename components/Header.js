import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import SearchBar from './Header/SearchBar';
import MobileSearchBar from './Header/MobileSearchBar';
import { Colors, Devices } from '../lib/Theme';
import Button from '../styled/Button';

const Wrapper = styled.article`
  color: ${Colors.White};
  z-index: 10;
  display: flex;
  width: 100%;
  align-items: center;
  height: 10%;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  background-color: ${Colors.Background};
  position: sticky;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: #bbbbbb;
`;

const Logo = styled.img`
  width: 45px;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
`;

const Menu = styled.nav`
  margin-left: auto;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
  display: none;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  @media ${Devices.Laptop} {
    display: block;
  }
`;

const MenuItem = styled.a`
  font-size: 1rem;
  font-weight: 400;
`;
const SearchIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Devices.Laptop} {
    display: none;
  }
`;
const MenuIcon = styled(SearchIcon)``;
const AuthItems = styled(MenuItem)`
  font-size: 1rem;
  display: none;

  @media ${Devices.Laptop} {
    display: inherit;
  }
`;

function Header({ mobileMenu }) {
  const [SearchOpen, setSearchOpen] = useState(false);
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;

  const toggleMenu = () => {
    setMobileMenuIsOpen(!MobileMenuIsOpen);
  };

  return (
    <Wrapper>
      <MenuIcon>
        {MobileMenuIsOpen ? (
          <IoClose
            style={{ fontSize: '2.5rem' }}
            color={Colors.Primary}
            onClick={() => toggleMenu()}
          />
        ) : (
          <FiMenu onClick={() => toggleMenu()} />
        )}
      </MenuIcon>
      <Center>
        <Logo src='/images/cryptoLogo.png' />
        <LogoText href='/'>NFT</LogoText>
        <SearchBar />
        <Menu>
          <ul>
            <li>
              <MenuItem href='#'>Marketplace</MenuItem>
            </li>
            <li>
              <MenuItem href='#'>Drops</MenuItem>
            </li>
            <li>
              <MenuItem href='#'>Brands</MenuItem>
            </li>
            <li>
              <Button>Create</Button>
            </li>
          </ul>
        </Menu>
      </Center>
      {SearchOpen ? (
        <MobileSearchBar
          searchOpen={SearchOpen}
          setSearchOpen={setSearchOpen}
        />
      ) : (
        ''
      )}
      <AuthItems href='#'>Sign In</AuthItems>
      <AuthItems href='#'>Sign Up</AuthItems>
      <SearchIcon>
        <CgSearch onClick={() => setSearchOpen(!SearchOpen)} />
      </SearchIcon>
    </Wrapper>
  );
}

export default Header;
