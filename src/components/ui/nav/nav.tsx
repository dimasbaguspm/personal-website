import React, { FC } from 'react';

import styled, { keyframes } from 'styled-components';

import { useThemeContext } from 'contexts/theme-context';

import { getIntentColor } from 'utils/theming';
import { FlexContainer } from '../flex-container';
import { BodyText, NormalText, SubTitle } from '../typography';
import { Button } from '../button';

interface INav {}

const Nav: FC = () => {
  const { isNavOpen, setIsNavOpen } = useThemeContext();

  return (
    <>
      <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 20 }}>
        <Bubble onClick={() => setIsNavOpen((prev) => !prev)}>&lt;</Bubble>
      </div>

      {isNavOpen && (
        <NavContainer>
          <FlexContainer style={{ width: '100%' }} justifyRight>
            <NavSpaceWrapper onClick={() => setIsNavOpen(false)} />
            <NavWrapper>
              <FlexContainer style={{ padding: '1rem' }} directionColumn justifyCenter>
                <SubTitle fontSize='big' fontWeight='bold' intent='secondary'>
                  Menu
                </SubTitle>
                <NormalText>Print CV</NormalText>
                <NormalText>Collaboration</NormalText>
                <NormalText>Theme</NormalText>
                <div>
                  <Button onClick={() => setIsNavOpen(false)} intent='secondary' intentPrimary={false}>
                    <BodyText>Close</BodyText>
                  </Button>
                </div>
              </FlexContainer>
            </NavWrapper>
          </FlexContainer>
        </NavContainer>
      )}
    </>
  );
};

export default Nav;

const Bubble = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${getIntentColor('primary')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getIntentColor('low')};
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
`;

const scrollToLeft = keyframes`
  0% {width: 0px}
  100%  {width: 500px}
`;

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 21;
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const NavSpaceWrapper = styled.div`
  width: -webkit-fill-available;
`;

const NavWrapper = styled.div`
  animation: ${scrollToLeft};
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  width: 500px;
  height: 100%;
  background-color: white;
  user-select: none;
  box-shadow: 20px 0 50px ${getIntentColor('primary')};
`;
