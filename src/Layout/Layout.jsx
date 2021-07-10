import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LayoutsContext from './LayoutsContext';

const StyledMainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  const yScrollBarWidth = window.innerWidth - document.body.clientWidth;
  //Strange bug: Scrollbar width not detected on init when trying to refactor onResize() into useEffect
  //Suspect something to do with document.body not being available (?)
  //Low priority

  const [layoutModeProps, setLayoutModeProps] = useState(
    window.innerWidth > 1024
      ? {
          isMobile: false,
          isTablet: false,
          isDesktop: true,
          yScrollBarWidth,
          windowInnerWidth: window.innerWidth,
        }
      : window.innerWidth > 500 && window.innerWidth < 1025
      ? {
          isMobile: false,
          isTablet: true,
          isDesktop: false,
          yScrollBarWidth,
          windowInnerWidth: window.innerWidth,
        }
      : {
          isMobile: true,
          isTablet: false,
          isDesktop: false,
          yScrollBarWidth,
          windowInnerWidth: window.innerWidth,
        }
  );

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onResize = () => {
    setLayoutModeProps(
      window.innerWidth > 1024
        ? {
            isMobile: false,
            isTablet: false,
            isDesktop: true,
            yScrollBarWidth,
            windowInnerWidth: window.innerWidth,
          }
        : window.innerWidth > 500 && window.innerWidth < 1025
        ? {
            isMobile: false,
            isTablet: true,
            isDesktop: false,
            yScrollBarWidth,
            windowInnerWidth: window.innerWidth,
          }
        : {
            isMobile: true,
            isTablet: false,
            isDesktop: false,
            yScrollBarWidth,
            windowInnerWidth: window.innerWidth,
          }
    );
  };

  return (
    <LayoutsContext.Provider value={layoutModeProps}>
      <StyledMainContentContainer {...layoutModeProps}>
        {children}
      </StyledMainContentContainer>
    </LayoutsContext.Provider>
  );
}
