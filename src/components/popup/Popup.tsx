import { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Label } from '../label/Label';
interface Props {
  toggle(value: boolean): void;
  data: any;
}

export const Popup: FC<Props> = (props: Props) => {
  return (
    <Modal
      isOpen={true}
      toggle={() => props.toggle(false)}
      style={{ transform: 'translate(0,30%)' }}
    >
      <ModalHeader toggle={() => props.toggle(false)}>
        <Label
          title={'Details'}
          style={{
            fontSize: '16px',
          }}
        />
      </ModalHeader>
      <ModalBody>
        <Label
          title={'details will be shown here'}
          style={{
            textTransform: 'none',
          }}
        />
      </ModalBody>
    </Modal>
  );
};
