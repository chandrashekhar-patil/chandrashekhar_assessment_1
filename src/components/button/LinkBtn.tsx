import { FC } from 'react';
import { LINK } from './style';
interface Props {
  title: string;
  onClick: any;
  id: string;
  style?: any;
}

export const LinkBtn: FC<Props> = (props: Props) => {
  return (
    <LINK onClick={props.onClick} id={props.id} style={props.style}>
      {props.title}
    </LINK>
  );
};
