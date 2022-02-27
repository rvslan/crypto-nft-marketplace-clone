import Head from 'next/head';
import React from 'react';
import Profile from '../components/Profile';

function profile() {
  const userName = 'newk3d';

  return (
    <>
      <Head>
        <title>Crypto.com NFT Marketplace - {userName}</title>
      </Head>
      <Profile username={userName} />
    </>
  );
}

export default profile;
