import { FC } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { Button } from '../button/Button';
import { Label } from '../label/Label';
interface Props {
  onLogout(): void;
}

export const Topbar: FC<Props> = (props: Props) => {
  return (
    <Container fluid={true}>
      <div
        className='d-flex 
      flex-sm-row
      flex-md-row
      flex-lg-row
      flex-column 
      justify-content-sm-between
      justify-content-md-between
      justify-content-lg-between
      justify-content-start
      mb-2
      align-items-center'
        style={{ minHeight: '100px' }}
      >
        <img
          src={logo}
          alt='logo'
          width='100'
          height='50'
          className='mb-3'
          style={{ maxWidth: '400px' }}
        />
        <Label
          title='Honda Power of Dreams'
          style={{
            textTransform: 'uppercase',
            fontSize: '18px',
          }}
        />

        <Button title='Log Out' id='logout' onClick={props.onLogout} />
      </div>
    </Container>
  );
};
