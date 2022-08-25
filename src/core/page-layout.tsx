import React, { FC, ReactNode, useMemo, useState } from 'react';

import { Nav } from 'components/ui/nav';
import { IThemeContext, ThemeContext } from 'contexts/theme-context';

interface IPageLayout {
  children: ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const themeContextValue = useMemo(
    (): IThemeContext => ({
      isNavOpen,
      setIsNavOpen,
    }),
    [isNavOpen]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div style={{ position: 'relative' }}>
        <Nav />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default PageLayout;
