import { useCallback, useEffect, useMemo, useState } from 'react';

import { MIN_SCREEN_RESOLUTION } from 'constants/screen-config';

const useGetScreenResolution = () => {
  const [widthResolution, setWidthResolution] = useState<number>(window.innerWidth);
  const [heightResolution, setHeightResolution] = useState<number>(window.innerHeight);

  const conditionDeviceTypeScreen = useMemo(
    () => ({
      mobile: (val: number) => val < MIN_SCREEN_RESOLUTION.tab,
      tab: (val: number) => val >= MIN_SCREEN_RESOLUTION.tab && val < MIN_SCREEN_RESOLUTION.desktop,
      desktop: (val: number) => val >= MIN_SCREEN_RESOLUTION.desktop,
    }),
    []
  );

  const [isMobileScreen, setIsMobileScreen] = useState(conditionDeviceTypeScreen['mobile'](window.innerWidth));
  const [isTabScreen, setIsTabScreen] = useState(conditionDeviceTypeScreen['tab'](window.innerWidth));
  const [isDesktopScreen, setIsDesktopScreen] = useState(conditionDeviceTypeScreen['desktop'](window.innerWidth));

  const detectCurrentResolution = useCallback(() => {
    setWidthResolution(window.innerWidth);
    setHeightResolution(window.innerHeight);

    setIsMobileScreen(conditionDeviceTypeScreen['mobile'](window.innerWidth));
    setIsTabScreen(conditionDeviceTypeScreen['tab'](window.innerWidth));
    setIsDesktopScreen(conditionDeviceTypeScreen['desktop'](window.innerWidth));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('resize', detectCurrentResolution);
    return () => window.removeEventListener('resize', detectCurrentResolution);
  }, [detectCurrentResolution]);

  return {
    widthResolution,
    heightResolution,

    isMobileScreen,
    isTabScreen,
    isDesktopScreen,
  };
};

export default useGetScreenResolution;
