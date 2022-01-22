import styled from '@emotion/styled';
import { Button } from 'reactstrap';

export const BUTTON = styled(Button)`
  font-family: ${(props: any) => props.theme.fonts.firasans};
  color: ${(props: any) => props.theme.colors.text};
  word-break: break-word;
  height: 100%;
  width: 100%;
  font-size: 16px;
  text-align: center;
  background-color: ${(props: any) => props.theme.colors.white};
  border: none;
  background-size: 100% 100%;
  box-shadow: 0px 4px 10px rgba(178, 177, 180, 0.35);
  border-radius: 0px;
  &:hover {
    color: ${(props: any) => props.theme.colors.white};
    background-color: ${(props: any) => props.theme.colors.primary};
    box-shadow: none;
  }
  &:focus {
    color: ${(props: any) => props.theme.colors.white};
    background-color: ${(props: any) => props.theme.colors.primary};
    box-shadow: none;
  }
  &:active {
    color: ${(props: any) => props.theme.colors.white};
    background-color: ${(props: any) => props.theme.colors.primary};
    box-shadow: none;
  }
  &:disabled {
    color: ${(props: any) => props.theme.colors.white};
    background-color: ${(props: any) => props.theme.colors.primary};
  }
`;
