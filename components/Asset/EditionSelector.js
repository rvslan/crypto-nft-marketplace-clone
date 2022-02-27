import styled from 'styled-components';
import { BsChevronUp, BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { Colors } from '../../lib/Theme';

const Wrapper = styled.article`
  display: flex;
  border: 1px solid ${Colors.Border};
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopButton = styled.span`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-right: 1px solid ${Colors.Border};
  border-bottom: 1px solid ${Colors.Border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;
const BottomButton = styled(TopButton)`
  border-bottom: none;
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  font-weight: 500;
`;
const MintDate = styled.div`
  color: ${Colors.Gray};
  font-size: 0.9rem;
`;
const SelectEdition = styled.a`
  color: ${Colors.Primary};
  font-size: 0.95rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

function EditionSelector() {
  return (
    <Wrapper>
      <ButtonsContainer>
        <TopButton>
          <BsChevronUp />
        </TopButton>
        <BottomButton>
          <BsChevronDown />
        </BottomButton>
      </ButtonsContainer>
      <Info>
        <Label>Edition #53</Label>
        <MintDate>(Minted on 29 Jan, 2022)</MintDate>
      </Info>
      <SelectEdition href='#'>
        Select Edition <BsChevronRight />
      </SelectEdition>
    </Wrapper>
  );
}

export default EditionSelector;
