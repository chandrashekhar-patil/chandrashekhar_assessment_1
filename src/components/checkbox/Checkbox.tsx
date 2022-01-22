import { FC } from 'react';
import { CHECKBOX } from './style';
interface Props {
  isChecked: boolean;
  onClick: any;
}

export const Checkbox: FC<Props> = (props: Props) => {
  return (
    <CHECKBOX
      type='checkbox'
      checked={props.isChecked}
      onChange={props.onClick}
    />
  );
};
