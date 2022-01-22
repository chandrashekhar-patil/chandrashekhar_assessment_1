import { useTheme } from '@emotion/react';
import { FC } from 'react';
interface Props {
  children: any;
  style?: any;
}

export const Th: FC<Props> = (props: Props) => {
  const theme: any = useTheme();

  return (
    <th
      style={{
        fontFamily: theme.fonts.firasans,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
        height: '32px',
        textAlign: 'left',
        ...props.style,
      }}
    >
      {props.children}
    </th>
  );
};
