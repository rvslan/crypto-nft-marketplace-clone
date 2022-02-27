import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Colors, Devices } from '../lib/Theme';
import { BsFillPatchCheckFill, BsInstagram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import NFTCard from '../styled/NFTCard';
import Grid from '../styled/Grid';
import Head from 'next/head';
import { NFTs } from '../lib/Info';
import Tabs from '../styled/Tabs';
import Tab from '../styled/Tab';

const Wrapper = styled.article`
  background-color: ${Colors.White};
  color: ${Colors.Black};
  display: flex;
  flex-direction: column;
`;
const Cover = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 200px;
  @media ${Devices.Laptop} {
    height: 300px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  gap: 2rem;

  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${Devices.Laptop} {
    max-width: 25vw;
    align-items: flex-start;
  }
`;
const Avatar = styled.div`
  transform: translateY(-50%);
  border: 5px solid ${Colors.White};
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;
const Name = styled.h1`
  margin-top: -50px;
  margin-bottom: 0.5rem;
`;
const Username = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  > svg {
    font-size: 1.5rem;
    color: ${Colors.Primary};
    margin-right: 0.5rem;
  }
`;
const UserDescription = styled.p`
  white-space: pre-wrap;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;
const Socials = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media ${Devices.Laptop} {
    justify-content: flex-start;
  }
`;
const StatsContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${Colors.Border};
  border-bottom: 1px solid ${Colors.Border};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
`;
const StatItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;
const StatTitle = styled.span`
  color: ${Colors.Gray};
`;
const StatValue = styled.span`
  font-weight: 500;
`;

const AllTabs = [
  {
    id: 1,
    title: 'Collectibles',
    content: (
      <Grid>
        {NFTs.map((nft) => {
          return <NFTCard key={nft.Id} item={nft} />;
        })}
      </Grid>
    ),
  },
  {
    id: 2,
    title: 'Selling',
    content: <Tab />,
  },
  {
    id: 3,
    title: 'Created',
    content: <Tab />,
  },
  {
    id: 4,
    title: 'Liked',
    content: <Tab />,
  },
];

function Profile({ username = 'newk3d' }) {
  return (
    <Wrapper>
      <Head>
        <title>Crypto.com NFT Marketplace - {username}</title>
      </Head>
      <Cover>
        <Image src='/images/cover/newk3d.png' layout='fill' />
      </Cover>
      <Content>
        <Info>
          <Avatar>
            <Image src='/images/avatar/newk3d.png' layout='fill' />
          </Avatar>
          <Name>{username}</Name>
          <Username>
            <BsFillPatchCheckFill />@{username}
          </Username>
          <UserDescription>
            {username} is a newbie on Crypto.com NFT Marketplace.
          </UserDescription>
          <Socials>
            <a href='https://twitter.com/newk3d' target='_blank'>
              <GrTwitter />
            </a>
            <a href='https://www.instagram.com/newk3d/' target='_blank'>
              <BsInstagram />
            </a>
          </Socials>
          <StatsContainer>
            <StatItem>
              <StatTitle>Likes</StatTitle>
              <StatValue>3.8k</StatValue>
            </StatItem>
            <StatItem>
              <StatTitle>Views</StatTitle>
              <StatValue>44k</StatValue>
            </StatItem>
            <StatItem>
              <StatTitle>Created</StatTitle>
              <StatValue>12</StatValue>
            </StatItem>
            <StatItem>
              <StatTitle>Minted</StatTitle>
              <StatValue>1.2k</StatValue>
            </StatItem>
          </StatsContainer>
        </Info>
        <Tabs data={AllTabs} marginTop='2rem' />
      </Content>
    </Wrapper>
  );
}

export default Profile;
