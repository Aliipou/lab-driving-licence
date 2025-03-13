import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const defaultBreakpoints: BreakpointConfig = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
};

const useResponsive = (customBreakpoints?: Partial<BreakpointConfig>) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const getCurrentBreakpoint = (width: number): Breakpoint => {
    if (width < breakpoints.sm) return 'xs';
    if (width < breakpoints.md) return 'sm';
    if (width < breakpoints.lg) return 'md';
    if (width < breakpoints.xl) return 'lg';
    return 'xl';
  };
  
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    getCurrentBreakpoint(window.innerWidth)
  );
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDimensions({ width, height });
      setBreakpoint(getCurrentBreakpoint(width));
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return {
    breakpoint,
    width: dimensions.width,
    height: dimensions.height,
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl',
    isXs: breakpoint === 'xs',
    isSm: breakpoint === 'sm',
    isMd: breakpoint === 'md',
    isLg: breakpoint === 'lg',
    isXl: breakpoint === 'xl'
  };
};

export default useResponsive;
