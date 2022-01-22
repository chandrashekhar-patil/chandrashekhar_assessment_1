import styled from '@emotion/styled';
import { Label } from 'reactstrap';

export const LABEL = styled(Label)`
  color: ${(props: any) => props.theme.colors.text};
  font-family: ${(props: any) => props.theme.fonts.firasans};
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  background-color: transparent;
  display: 'block';
`;
