import { useTheme } from '@emotion/react';
import { FC } from 'react';
interface Props {
  children: any;
  colSpan?: number;
  style?: any;
}

export const Td: FC<Props> = (props: Props) => {
  const theme: any = useTheme();

  return (
    <td
      style={{
        paddingLeft: '0.5rem',
        fontFamily: theme.fonts.firasans,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
        height: '32px',
        textAlign: 'left',
        ...props.style,
      }}
      colSpan={props.colSpan || 1}
    >
      {props.children}
    </td>
  );
};
