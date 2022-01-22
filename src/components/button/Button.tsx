import { FC } from 'react';
import { BUTTON } from './style';
interface Props {
  title: string;
  onClick: any;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  id: string;
  style?: any;
}

export const Button: FC<Props> = (props: Props) => {
  return (
    <BUTTON
      style={props.style}
      color={props.color}
      id={props.id}
      type={props.type || 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
    </BUTTON>
  );
};
