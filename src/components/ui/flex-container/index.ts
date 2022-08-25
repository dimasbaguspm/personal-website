import styled, { css } from 'styled-components';

export interface IFlexContainer {
  justifyLeft?: boolean;
  justifyRight?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEvenly?: boolean;

  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;

  directionRow?: boolean;
  directionColumn?: boolean;
  directionRowReverse?: boolean;
  directionColumnReverse?: boolean;
}

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  min-height: 0;
  min-width: 0;

  /* will fix this endless condition later */
  ${(props) =>
    props.justifyLeft &&
    css`
      justify-content: left;
    `}

  ${(props) =>
    props.justifyRight &&
    css`
      justify-content: right;
    `}

    ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}

    ${(props) =>
    props.justifyBetween &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.justifyAround &&
    css`
      justify-content: space-around;
    `}

    ${(props) =>
    props.justifyEvenly &&
    css`
      justify-content: space-evenly;
    `}

    ${(props) =>
    props.alignStart &&
    css`
      align-items: flex-start;
    `}

    ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.alignEnd &&
    css`
      align-items: flex-end;
    `}

    ${(props) =>
    props.directionRow &&
    css`
      flex-direction: row;
    `}

    ${(props) =>
    props.directionRowReverse &&
    css`
      flex-direction: row-reverse;
    `}

    ${(props) =>
    props.directionColumn &&
    css`
      flex-direction: column;
    `}

    ${(props) =>
    props.directionColumnReverse &&
    css`
      flex-direction: column-reverse;
    `}
`;
