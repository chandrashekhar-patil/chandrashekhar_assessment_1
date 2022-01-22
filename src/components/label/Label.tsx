import { FC } from 'react';
import { LABEL } from './style';

interface Props {
  title: string;
  style?: any;
  className?: string;
}

export const Label: FC<Props> = (props: Props) => {
  return (
    <LABEL style={props.style} className={props.className}>
      {props.title}
    </LABEL>
  );
};
