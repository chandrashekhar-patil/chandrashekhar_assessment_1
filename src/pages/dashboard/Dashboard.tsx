import { useContext, useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { Card } from '../../components/card/Card';
import { Label } from '../../components/label/Label';
import { Popup } from '../../components/popup/Popup';
import { Context } from '../../Context';
import { callApi } from '../../helpers/api';
import { imageUri, url } from '../../helpers/constants';

export const Dashboard = () => {
  //useContext
  const { store, setStore }: any = useContext(Context) || {};
  const list = store?.list || [];

  //useState
  const [showPopup, togglePopup] = useState(false);

  const getList = async () => {
    try {
      const resp = await callApi(url + 'list', {
        method: 'GET',
      });
      console.log(resp);
      if (resp) {
        setStore({
          ...store,
          list: resp,
        });
      }
    } catch (e: any) {
      setStore({
        ...store,
        list: [],
      });
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCards = () => {
    if (list.length === 0) {
      return <Label title='No Cars found' />;
    }
    return list.map((car: any) => {
      const uri = imageUri + car.imageUri;
      return (
        <Card
          col='3'
          imgsrc={uri}
          label={car.title}
          onClick={() => togglePopup(true)}
        />
      );
    });
  };

  return (
    <Row className='mx-5 d-flex'>
      {renderCards()}
      {showPopup && <Popup data={{}} toggle={() => togglePopup(false)} />}
    </Row>
  );
};
