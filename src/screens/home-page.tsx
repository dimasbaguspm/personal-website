import React, { FC } from 'react';

import { CHOSEN_PROJECTS } from 'constants/chosen-projects';
import { themeConfig } from '../constants/theme';

import { regroupArray } from 'utils/grouping';

import useGetScreenResolution from 'hooks/use-get-screen-resolution';
import { DynamicProjectPageContainer } from 'components/screens/home-page/page-contents/dynamic-project-page';
import { StaticWorkExperiencePage } from '../components/screens/home-page/page-contents';
import { FlexContainer } from '../components/ui/flex-container';
import { FullPageWrapper, PageWrapper } from '../components/ui/wrapper';
import { ThumbnailPageWrapper } from '../components/ui/wrapper/page-wrapper';
import { useThemeContext } from 'contexts/theme-context';

const Pages = [
  {
    type: 'static-work-experience',
    data: null,
  },
  {
    type: 'dynamic-chosen-projects',
    data: regroupArray([...CHOSEN_PROJECTS], 4),
  },
] as const;

const HomePage: FC = () => {
  const totalPages = Math.floor(Pages.length - 1 + Pages[1].data.length); // will refactor this later

  const { isDesktopScreen } = useGetScreenResolution();
  const { isNavOpen } = useThemeContext();

  return (
    <FullPageWrapper backgroundColor={themeConfig.colors.low?.main} isBlur={isNavOpen}>
      <FlexContainer>
        {isDesktopScreen && (
          <div style={{ width: '350px', maxHeight: '100vh', overflow: 'auto' }}>
            <FlexContainer directionColumn alignCenter style={{ padding: '1rem 0' }}>
              {Pages.map((v, index) => {
                if (v.type === 'static-work-experience') {
                  return (
                    <ThumbnailPageWrapper key={index} style={{ marginTop: index === 0 ? '0' : '20px' }}>
                      <StaticWorkExperiencePage currentNumber={index + 1} totalNumber={totalPages} />
                    </ThumbnailPageWrapper>
                  );
                } else {
                  return v.data.map((_j, jIndex) => (
                    <ThumbnailPageWrapper key={jIndex} style={{ marginTop: index === 0 ? '0' : '20px' }}>
                      <DynamicProjectPageContainer
                        currentNumber={index + 1}
                        totalNumber={totalPages}
                        datas={v.data?.[jIndex] ?? []}
                      />
                    </ThumbnailPageWrapper>
                  ));
                }
              })}
            </FlexContainer>
          </div>
        )}
        <FullPageWrapper isScrollable>
          <FlexContainer style={{ width: '-webkit-fill-available', padding: '2rem 0' }} alignCenter directionColumn>
            {Pages.map((v, index) => {
              if (v.type === 'static-work-experience') {
                return (
                  <PageWrapper key={index} style={{ marginTop: index === 0 ? '0' : '20px' }}>
                    <StaticWorkExperiencePage currentNumber={index + 1} totalNumber={totalPages} />
                  </PageWrapper>
                );
              } else {
                return v.data.map((_j, jIndex) => (
                  <PageWrapper key={jIndex} style={{ marginTop: index === 0 ? '0' : '20px' }}>
                    <DynamicProjectPageContainer
                      currentNumber={index + jIndex + 1}
                      totalNumber={totalPages}
                      datas={v.data?.[jIndex] ?? []}
                    />
                  </PageWrapper>
                ));
              }
            })}
          </FlexContainer>
        </FullPageWrapper>
      </FlexContainer>
    </FullPageWrapper>
  );
};

export default HomePage;
