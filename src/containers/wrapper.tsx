import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/darkTheme';
import { lightTheme } from '../styles/lightTheme'; 
import { setDarkModeLocalStorage, getThemeMode } from '../typescript/darkMode/darkMode';

export interface WrapperProps {
  children?: React.ReactNode;
  handleTheme?: () => void;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.globalBackground};

  div > div {
    color: ${props => props.theme.globalColor};
  }
`;

export const Wrapper = (props: WrapperProps) => {

  const [theme, setTheme] = useState(getThemeMode)

  const handleTheme = () => {
    if (theme === lightTheme) {
      setDarkModeLocalStorage(theme);
      return setTheme(darkTheme)
    }
    setDarkModeLocalStorage(theme);
    return setTheme(lightTheme);
  }

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleTheme });
    }
    return child;
  });

  return(
    <ThemeProvider theme={theme}>
      <Container> 
        { childrenWithProps }
      </Container>
    </ThemeProvider>
  );
}