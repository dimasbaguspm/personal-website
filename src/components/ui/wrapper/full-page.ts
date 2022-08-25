import styled, { css, CSSProperties, keyframes } from 'styled-components';

interface IFullPage {
  isScrollable?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
  isBlur?: boolean;
}

export const FullPage = styled.div<IFullPage>`
  height: 100vh;
  width: 100vw;
  overflow-y: ${(props) => (props.isScrollable ? 'scroll' : 'auto')};
  background-color: ${(props) => props.backgroundColor};
  ${(props) =>
    props.isBlur &&
    css`
      animation: ${blurBackgroundEffect};
      animation-duration: 0.75s;
      animation-iteration-count: 1;
      filter: blur(2px);
    `}
`;

export const blurBackgroundEffect = keyframes`
0% {filter: blur(0)}
100% {filter: blur(2px)}
`;
