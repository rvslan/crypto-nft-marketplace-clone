import { useState } from 'react';
import styled from 'styled-components';
import { Colors, Devices } from '../lib/Theme';
import Grid from './Grid';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(p) => (p.mt ? p.mt : '')};
`;
const HeadersContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  padding-bottom: 2rem;
`;
const Header = styled.span`
  font-weight: 500;
  cursor: pointer;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    bottom: 0;
    width: ${(p) => (p.active ? '100%' : '0')};
    height: 0.2rem;
    background: linear-gradient(
      to right,
      ${Colors.Gradients.PrimaryToSec[0]},
      ${Colors.Gradients.PrimaryToSec[1]}
    );
    border-radius: 20px;
    transform: translateY(500%);
  }
`;
const Content = styled.div`
  padding: 1rem;
`;

function Tabs({ data, marginTop }) {
  const [activeTab, setActiveTab] = useState(data[0]);

  const changeTab = (tab) => {
    if (activeTab.id !== tab.id) {
      setActiveTab(tab);
    }
  };

  return (
    <Wrapper mt={marginTop}>
      <HeadersContainer>
        {data.map((item) => {
          return (
            <Header
              onClick={() => changeTab(item)}
              key={item.id}
              active={activeTab.id === item.id}
            >
              {item.title}
            </Header>
          );
        })}
      </HeadersContainer>
      <Content>{activeTab.content}</Content>
    </Wrapper>
  );
}

export default Tabs;
