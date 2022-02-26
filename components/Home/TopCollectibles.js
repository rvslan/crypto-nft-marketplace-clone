import React from 'react';
import styled from 'styled-components';
import { Colors, Devices } from '../../lib/Theme';
import Link from 'next/link';
import Grid from '../../styled/Grid';
import { NFTs } from '../../lib/Info';
import NFTCard from '../../styled/NFTCard';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  @media ${Devices.Tablet} {
    padding: 1rem 3rem;
  }
  @media ${Devices.Laptop} {
    padding: 1rem 5%;
  }
  @media ${Devices.LaptopL} {
    padding: 1rem 10%;
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const Sort = styled.div`
  border-radius: 30px;
  border: 1px solid ${Colors.Primary};
  padding: 0.4rem 1rem;
  cursor: pointer;
`;
const Date = styled.div`
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  border-radius: 30px;
  padding: 0.4rem 2.5rem;
`;
const Action = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  border: 1px solid ${Colors.Primary};
  padding: 1rem 2rem;
  color: ${Colors.Primary};
  background-color: transparent;
  border-radius: 5px;
  font-size: 1rem;
`;

function TopCollectibles() {
  return (
    <Wrapper>
      <Title>TopCollectibles</Title>
      <TopSection>
        <Sort>Sort Volume</Sort>
        <Date>Today</Date>
      </TopSection>
      <Grid>
        {NFTs.map((nft) => {
          return (
            <Link key={nft.Id} href='/asset' passHref>
              <a>
                <NFTCard item={nft} key={nft.Id} />
              </a>
            </Link>
          );
        })}
      </Grid>
      <Action>show more</Action>
    </Wrapper>
  );
}

export default TopCollectibles;
