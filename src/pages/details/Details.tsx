import { useParams } from 'react-router';
import { Label } from '../../components/label/Label';

export const Details = () => {
  // useParam
  const params = useParams();

  return <Label title={'Car Details: ' + params?.key} />;
};
