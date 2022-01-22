import styled from '@emotion/styled';
import { Input } from 'reactstrap';

interface Props {
  theme: any;
}

export const INPUT = styled(Input)`
  font-family: ${(props: any) => props.theme.fonts.firasans};
  font-size: 16px;
  background-color: transparent;
  border: 0.5px solid ${(props: Props) => props.theme.colors.border};
  box-sizing: border-box;
  height: 32px;
  width: 100%;
  background-color: transparent;
  &:focus {
    box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.secondary};
  }
`;
