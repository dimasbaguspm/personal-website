import styled, { css } from 'styled-components';
import { themeConfig } from '../../../constants/theme';
import { Button } from '../button';
import { ImageWrapper } from '../image';
import { Items } from '../items';

interface IBasePageWrapperProps {
  isMobile?: boolean;
}

export const PageWrapper = styled.div<IBasePageWrapperProps>`
  background-color: ${themeConfig.colors.low?.subMain};

  height: 1250px;
  width: 700px;
  padding: 3%;

  ${(props) =>
    props.isMobile &&
    css`
      height: 1250px;
      width: 90%;
    `}
`;

export const ThumbnailPageWrapper = styled.div`
  background-color: ${themeConfig.colors.low?.subMain};
  height: 340px;
  width: 210px;
  padding: 3%;
  user-select: none;

  cursor: pointer;

  h1 {
    font-size: 10px;
  }

  h2 {
    font-size: 6px;
  }

  h3 {
    font-size: 4.6px;
  }

  ${Items} {
    padding: 0.75px 1.8px;
    border-radius: 2px;
    margin: 0.75px;
    p {
      font-size: 3.76px;
    }
  }

  ${Button} {
    padding: 0.75px 1.8px;
    border-radius: 2px;
    p {
      font-size: 3.76px;
    }
  }

  ${ImageWrapper} {
    height: 8px;
    width: 8px;
    border-radius: 2.5px;
  }

  h4,
  h5,
  h6,
  p,
  div {
    font-size: 4px;
    line-height: 4px;
  }
`;
