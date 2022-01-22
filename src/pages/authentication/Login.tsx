import { useTheme } from '@emotion/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { Label } from '../../components/label/Label';
import { Context } from '../../Context';
import { callApi } from '../../helpers/api';
import { url } from '../../helpers/constants';

export const Login = () => {
  //useTheme
  const theme: any = useTheme();

  // useNavigate
  const navigate = useNavigate();

  //useContext
  const { store, setStore } = useContext(Context);

  //useState
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const login = async () => {
    return await callApi(url + 'authenticate', {
      method: 'POST',
      body: JSON.stringify({
        username: state.username,
        password: state.password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    try {
      setError('');
      const resp: any = await login();
      if (resp) {
        setStore({
          ...store,
          auth: resp,
          isUserAuthenticated: true,
        });

        navigate('/dashboard');
      }
    } catch (e: any) {
      setError(e);
    }
  };

  const onChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='mx-4 mt-1 mb-5'>
        <div>
          <img
            src={logo}
            alt='logo'
            width='100%'
            height='150'
            className='mb-3'
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
      <div className='mx-4 mt-1 mb-2'>
        <Label
          style={{
            fontSize: '24px',
            lineHeight: '29px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          title='Welcome Admin'
        />
      </div>

      <Form onSubmit={onSubmit}>
        <div className='d-flex flex-column align-items-center'>
          <Input
            id='username'
            name='username'
            value={state.username}
            placeholder='Enter Username'
            required={true}
            onChange={onChange}
            style={{
              width: '400px',
              height: '38px',
            }}
          />
          <Input
            id='password'
            type='password'
            name='password'
            value={state.password}
            placeholder='Enter Password'
            required={true}
            onChange={onChange}
            style={{
              width: '400px',
              height: '38px',
            }}
          />
          <Label
            className='mb-4'
            title={error || 'Error'}
            style={{
              color: theme.colors.red,
              visibility: error ? '' : 'hidden',
            }}
          />
          <Button
            onClick={() => {}}
            id='login'
            title='Login'
            type='submit'
            style={{
              fontSize: '18px',
              lineHeight: '22px',
              textTransform: 'capitalize',
              height: '48px',
              width: '228px',
            }}
          />
        </div>
      </Form>
    </div>
  );
};
