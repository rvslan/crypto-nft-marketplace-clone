import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Colors, Devices } from '../../lib/Theme';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../styled/Button';

const Wrapper = styled.article`
  margin: 6rem 1rem 5rem 1rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${Devices.Laptop} {
    margin: 3rem 4rem 5rem 4rem;
  }
  @media ${Devices.LaptopL} {
    margin: 3rem 10rem 5rem 10rem;
  }
`;
const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 1.7rem;
  @media ${Devices.Laptop} {
    font-size: 2.7rem;
  }
`;
const Heading = styled.span``;
const SubHeading = styled.span`
  font-size: 1.1rem;
  display: block;
`;
const Slider = styled.div`
  position: relative;
  height: 35vh;
  min-height: 230px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 3rem ${Colors.Primary};
  border-radius: 20px;
  @media ${Devices.Tablet} {
    height: 50vh;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  display: block;
`;

const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & > svg {
    font-size: 2.4rem;
    cursor: pointer;

    @media ${Devices.Tablet} {
      font-size: 3.4rem;
    }
  }
`;
const Date = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;
const SubTitle = styled.h2`
  font-size: 1.3rem;
`;
const Author = styled.span`
  color: ${Colors.Primary};
  font-size: 1.1rem;
  font-weight: 500;
`;
const Arrow = styled.span``;
const LineContainer = styled.span`
  position: relative;
  z-index: 3;
  display: flex;
  gap: 0.5rem;
`;
const Line = styled.span`
  display: inline-block;
  width: 2rem;
  height: 0.25rem;
  border-radius: 30px;
  background-color: ${(p) => (p.active ? Colors.Primary : Colors.White)};
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
`;

const Items = [
  {
    Id: 1,
    Badge: 'Upcoming',
    Date: 'Tue, Feb 01',
    Title: 'UFC 271',
    Author: 'UFC',
    ImageSrc: '/images/slider/2.png',
  },
  {
    Id: 2,
    Badge: 'SOLD OUT',
    Date: 'Tue, Feb 01',
    Title: 'Slide 2',
    Author: 'UFC',
    ImageSrc: '/images/slider/3.jpeg',
  },
  {
    Id: 3,
    Badge: 'OUT NOW',
    Date: 'Tue, Feb 01',
    Title: 'Slide 3',
    Author: 'UFC',
    ImageSrc: '/images/slider/4.jpg',
  },
];

function Hero() {
  const [Index, setIndex] = useState(0);
  const [Slides, setSlides] = useState(Items);
  const [ActiveSlide, setActiveSlide] = useState(Items[0]);

  const slideLeft = () => {
    const index = Index - 1;

    if (index > 0) {
      setIndex(index);
      setActiveSlide(Slides[index]);
      return;
    }

    setIndex(Slides.length - 1);
    setActiveSlide(Slides[Slides.length - 1]);
  };

  const slideRight = () => {
    const index = Index + 1;

    if (Index < Slides.length - 1) {
      setIndex(index);
      setActiveSlide(Slides[index]);
      return;
    }

    setIndex(0);
    setActiveSlide(Slides[0]);
  };

  return (
    <Wrapper>
      <Title>
        <Heading>Buy, sell, and showcase NFTs</Heading>
        <SubTitle>from leading creators and brands</SubTitle>
      </Title>
      <Slider>
        <InfoContainer>
          <Button round>{ActiveSlide.Badge}</Button>
          <Info>
            <BsChevronLeft onClick={() => slideLeft()} />
            <div>
              <Date>{ActiveSlide.Date}</Date>
              <Title>{ActiveSlide.Title}</Title>
              <Link passHref href='#'>
                <a>
                  <Author>{ActiveSlide.Author}</Author>
                </a>
              </Link>
            </div>
            <BsChevronRight onClick={() => slideRight()} />
          </Info>
          <Button>View Drop</Button>
        </InfoContainer>
        <LineContainer>
          {Slides.map((item) => {
            return <Line key={item.Id} active={item.Id === ActiveSlide.Id} />;
          })}
        </LineContainer>
        <ImageContainer>
          <Img>
            <Image src={ActiveSlide.ImageSrc} layout='fill' />
          </Img>
        </ImageContainer>
      </Slider>
    </Wrapper>
  );
}

export default Hero;
