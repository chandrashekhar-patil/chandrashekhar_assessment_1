import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../components/table/Table';
import { Context } from '../../Context';
import { callApi } from '../../helpers/api';
import { url } from '../../helpers/constants';
import { columns, dataMap } from './jsons';

export const List = () => {
  //useContext
  const { store, setStore }: any = useContext(Context) || {};
  const list = store?.list || [];

  // useState
  const [selectedRows, selectRow]: any = useState([]);

  //useNavigate
  const navigate = useNavigate();

  //useState
  const [loading, setLoader] = useState(false);

  const getList = async () => {
    try {
      // if (list.length === 0) {
      const resp = await callApi(url + 'list', {
        method: 'GET',
      });
      if (resp) {
        setStore({
          ...store,
          list: resp,
        });
      }
      // }
    } catch (e: any) {
      setStore({
        ...store,
        list: [],
      });
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      getList();
      setLoader(false);
    }, 2000);
  }, []);

  const onCellClick = (column: string, celldata: any, row: any) => {
    if (column === 'name') {
      navigate(`/details/${row['_id']}`, {});
    }
  };

  const onHeaderSelect = (isSelectAll: boolean) => {
    if (isSelectAll) {
      const rows = list.map((row: any) => row['_id']);
      selectRow(rows);
    } else {
      selectRow([]);
    }
  };

  const onRowSelect = (row: any, key: string) => {
    const rows: Array<string> = [...selectedRows];
    if (rows.length > 0) {
      const index = rows.findIndex((selected: any) => {
        return selected === row[key];
      });
      if (index === -1) {
        rows.push(row[key]);
      } else {
        rows.splice(index, 1);
      }
    } else {
      rows.push(row[key]);
    }

    selectRow(rows);
  };

  const renderList = () => {
    return (
      <Table
        columns={columns}
        rows={list}
        dataMap={dataMap}
        loading={loading}
        loaderNos={10}
        onCellClick={onCellClick}
        hasCheckbox={true}
        onHeaderSelect={onHeaderSelect}
        onRowSelect={onRowSelect}
        uniqueKey={'_id'}
        selectedRows={selectedRows}
      />
    );
  };

  return <div className='mx-4'>{renderList()}</div>;
};
