import { FC, Fragment } from 'react';
import { Label } from '../label/Label';
import { INPUT } from './style';

interface Props {
  id: string;
  name: string;
  onChange(e: any, name: string): void;
  value: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  title?: string;
  required?: boolean;
  style?: any;
}

export const Input: FC<Props> = (props: Props) => {
  return (
    <div className={'mb-4'}>
      <div>
        {props.title && (
          <Fragment>
            <Label title={props.title} className='mb-2' />
            {props.required && <span style={{ fontSize: '12px' }}>*</span>}
          </Fragment>
        )}
      </div>
      <div>
        <INPUT
          type={props.type || 'text'}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder || ''}
          onChange={(e: any) =>
            props.onChange(props.name, e?.target?.value || '')
          }
          name={props.name}
          required={props.required}
          autoComplete='off'
          style={props.style}
        />
      </div>
    </div>
  );
};
