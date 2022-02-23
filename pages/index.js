import Head from 'next/head';
import styled from 'styled-components';
import { Colors } from '../lib/Theme';

const Wrapper = styled.article`
  color: ${Colors.White};
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Crypto.com NFT Marketplace</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Wrapper>
  );
}