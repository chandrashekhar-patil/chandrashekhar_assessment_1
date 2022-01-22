import styled from '@emotion/styled';
import { Button } from 'reactstrap';

export const BUTTON = styled(Button)`
  font-family: ${(props: any) => props.theme.fonts.firasans};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  border: 1px solid ${(props: any) => props.theme.colors.border};
  box-sizing: border-box;
  border-radius: 0px;
  height: 36px;
  background-color: ${(props: any) => props.theme.colors.primary};
  color: ${(props: any) => props.theme.colors.white};
  min-width: 100px;
  width: fit-content;
  &:hover {
    color: ${(props: any) => props.theme.colors.primary};
    background-color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
  &:focus {
    color: ${(props: any) => props.theme.colors.primary};
    background-color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
  &:active {
    color: ${(props: any) => props.theme.colors.primary};
    background-color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
  &:disabled {
    color: ${(props: any) => props.theme.colors.primary};
    background-color: ${(props: any) => props.theme.colors.white};
  }
`;

export const LINK = styled(Button)`
  font-family: ${(props: any) => props.theme.fonts.firasans};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  border: none;
  color: ${(props: any) => props.theme.colors.text};
  width: fit-content;
  background: none;
  border: none;
  text-decoration: underline;
  &:hover {
    background: none;
    border: none;
    box-shadow: none;
    color: ${(props: any) => props.theme.colors.primary};
  }
  &:focus {
    background: none;
    border: none;
    box-shadow: none;
    color: ${(props: any) => props.theme.colors.primary};
  }
  &:active {
    background: none;
    border: none;
    box-shadow: none;
    color: ${(props: any) => props.theme.colors.primary};
    &:focus {
      box-shadow: none;
    }
  }
`;
