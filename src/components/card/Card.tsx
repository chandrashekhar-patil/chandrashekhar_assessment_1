import { FC } from 'react';
import { Col } from 'reactstrap';
import { BUTTON } from './style';
interface Props {
  col: string;
  imgsrc: string;
  label: string;
  onClick(): void;
  style?: any;
}

export const Card: FC<Props> = (props: Props) => {
  return (
    <Col
      xs='12'
      sm='12'
      md={props.col}
      lg={props.col}
      style={{
        height: '234px',
        position: 'relative',
        marginBottom: '1rem',
        ...props.style,
      }}
    >
      <BUTTON onClick={props.onClick}>
        <img
          src={props.imgsrc}
          alt='Src not available'
          style={{
            height: '30%',
            width: '40%',
            display: 'block',
            margin: '20% auto 16px auto',
          }}
        />
        {props.label}
      </BUTTON>
    </Col>
  );
};
