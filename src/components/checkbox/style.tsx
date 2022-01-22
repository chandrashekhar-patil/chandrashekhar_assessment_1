import styled from '@emotion/styled';
import { Input } from 'reactstrap';

export const CHECKBOX = styled(Input)`
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fonts.firasans};
  cursor: pointer;
  &:checked {
    background-color: ${(props: any) => props.theme.colors.primary};
    box-shadow: none;
  }
  &:hover {
    color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
  &:focus {
    color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
  &:active {
    color: ${(props: any) => props.theme.colors.white};
    box-shadow: none;
  }
`;
