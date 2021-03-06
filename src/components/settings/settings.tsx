import { useState } from 'react';
import styled from 'styled-components';
import { Toggle } from '../buttons/toggle/toggle';
import  { buttonController } from '../../typescript/buttonController';
import { dialogConttroller } from '../../typescript/dialogContoroller';

const Container = styled.div`
  width: 25em;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
`;

const SettingsButtonContainer = styled.div`
  margin: 2em;
  transition: height 0.3s ease;
`;

const SettingsOptionsContainer = styled.div`
  width: 25em;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: height 0.3s ease;
`;

const SettingsButtonlabel = styled.label`

  -webkit-user-select:none;

  width: 12em; 
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SettingsButtonSpan = styled.span`
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Arial, sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  border-style: solid;
  border-width: 0.2em;
  border-radius: 4em;
  border-color: ${props => props.theme.settingsButtonColor};
  color: ${props => props.theme.settingsButtonColor};
  background-color: ${props => props.theme.settingsButtonBackground};
  transition: all 0.5s ease;
`;

const SettingsButtonInput = styled.input`
  position: absolute;
  display: none;

  &:checked + ${SettingsButtonSpan} {
    color: ${props => props.theme.settingsButtonColorActive};
    background-color: ${props => props.theme.settingsButtonBackgroundActive};
    transition: all 0.5s ease;
  }
`;

interface SettingsProps {
  handleTheme?: () => void;
  disableButton?: () => void;
  changeAction?: () => void;
}

export const SettingsMenu = (props: SettingsProps) => {

  const [extended, setExtended] = useState(false);
  
  if (extended) {
    return (
      <Container>
        <SettingsButtonContainer>
          <SettingsButtonlabel>
            <SettingsButtonInput type="checkbox" onChange={() => setExtended(!extended)} />
            <SettingsButtonSpan>SETTINGS</SettingsButtonSpan>
          </SettingsButtonlabel> 
        </SettingsButtonContainer>
        <SettingsOptionsContainer>
          <Toggle 
            toggleText={"Dark mode"} 
            toggleId={1} 
            onChange={() => {props.handleTheme?.()}}/>
          <Toggle 
            toggleText={"Disable button"} 
            toggleId={2} 
            onChange={() => {buttonController.updateState()}}/>
          <Toggle 
            toggleText={"Enable pop-up"}
            toggleId={3} 
            onChange={() => {dialogConttroller.updateSate()}}/>
        </SettingsOptionsContainer>
      </Container>
    );
  }
  else return (
    <Container>
      <SettingsButtonContainer>
          <SettingsButtonlabel>
            <SettingsButtonInput type="checkbox" onChange={() => setExtended(!extended)} />
            <SettingsButtonSpan>SETTINGS</SettingsButtonSpan>
          </SettingsButtonlabel> 
      </SettingsButtonContainer>
    </Container>
  );
};
