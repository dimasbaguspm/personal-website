import React, { FC, HTMLAttributes } from 'react';

import { NormalText } from 'components/ui/typography';

const sampleText: string[] = [
  'React.JS developer with 2 years of professional experience. Have an interest on solving problems of data structures and algorithm that already provided by several services.',
  'I have a good communication and team-working skills while developing a products / resolving an issues. and also have some of experiences to use software tools like TypeScript, React, HTML5, GitHub, Git.',
];

interface IAboutMe extends HTMLAttributes<HTMLDivElement> {}

const AboutMe: FC<IAboutMe> = ({ ...rest }) => {
  return (
    <div {...rest}>
      {sampleText.map((v, i) => (
        <NormalText fontWeight='normal' intent='primary' intentPrimary={false} key={i} style={{ textAlign: 'justify' }}>
          {v}
        </NormalText>
      ))}
    </div>
  );
};

export default AboutMe;
