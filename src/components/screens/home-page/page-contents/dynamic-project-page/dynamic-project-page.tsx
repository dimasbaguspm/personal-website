import React, { FC } from 'react';

import { IProject } from 'types/global';

import SingleProject from './single-project';

import { IBasePageFooter } from '../../helpers';
import PageFooter from '../../page-footer';
import PageHeader from '../../page-header';

import { FlexContainer } from 'components/ui/flex-container';
import { NormalText } from 'components/ui/typography';
import { HorizontalLine } from 'components/ui/line-breaker';

interface IDynamicProjectPageContainer extends IBasePageFooter {
  datas: IProject[];
}

// each page only can contain 4 projects

/**
 * Project Name (related with .. (optional))
 * role of project
 * <horizontal line/>
 * my tasks:
 * -
 * -
 * -
 *
 * more details -> will open modal
 */

/**
 * modal title: project name
 *
 * Image or video preview (make to carousel)
 * Repo link (optional)
 * Demo link (optional)
 * Tech Stack
 *
 * close modal
 */

const DynamicProjectPageContainer: FC<IDynamicProjectPageContainer> = ({ datas, currentNumber, totalNumber }) => {
  return (
    <>
      <FlexContainer directionColumn justifyBetween style={{ height: '100%' }}>
        <div>
          <div>
            <PageHeader />
          </div>
          <div style={{ marginTop: '3.5%' }}>
            <NormalText fontSize='small' intent='secondary'>
              Chosen Projects:
            </NormalText>
            <FlexContainer directionColumn>
              {datas.map((v, i) => (
                <div key={i} style={{ marginBottom: i !== 3 ? '1%' : '0' }}>
                  <SingleProject data={v} />
                  {i !== 3 && <HorizontalLine style={{ marginTop: '2%' }} />}
                </div>
              ))}
            </FlexContainer>
          </div>
        </div>

        <div>
          <PageFooter {...{ currentNumber, totalNumber }} />
        </div>
      </FlexContainer>
    </>
  );
};

export default DynamicProjectPageContainer;
