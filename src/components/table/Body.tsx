import { FC, Fragment, ReactNode } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { LinkBtn } from '../button/LinkBtn';

import { Td } from './Td';
interface Props {
  //binding
  columns: Array<string>;
  rows: Array<any>;
  dataMap: any;

  //checkbox
  hasCheckbox?: boolean;
  uniqueKey?: string;
  onRowSelect?(row: any, key: string): void;
  selectedRows?: Array<string>;

  //cell
  onCellClick?(column: string, celldata: any, row: any): void;
}

export const Body: FC<Props> = (props: Props) => {
  const columns = props.columns || [];
  const rows = props.rows || [];
  const dataMap = props.dataMap || {};
  const selectedRows = props.selectedRows || [];
  const uniqueKey = props.uniqueKey || '';

  const getCell = (row: any): ReactNode => {
    const cell = columns.map((column: string, index: number) => {
      const info = dataMap[column];
      const celldata = row[info?.map] || '';
      const type = info?.type || '';
      const style = info?.cell?.style || {};
      if (type === 'link-btn') {
        return (
          <Td style={style}>
            <LinkBtn
              id={'column' + index}
              title={celldata}
              onClick={() => props.onCellClick?.(column, celldata, row)}
            />
          </Td>
        );
      }
      return <Td style={style}>{celldata}</Td>;
    });
    return cell;
  };

  const isRowSelected = (row: any): boolean => {
    if (row[uniqueKey]) {
      const index = selectedRows.findIndex((selected: any) => {
        return selected === row[uniqueKey];
      });
      if (index !== -1) return true;
      return false;
    }
    return false;
  };

  const getRows = (): ReactNode => {
    if (rows && Array.isArray(rows)) {
      if (rows.length === 0) {
        return (
          <tr>
            <Td
              style={{
                textAlign: 'center',
              }}
              colSpan={100}
            >
              No records to display
            </Td>
          </tr>
        );
      }

      const row = rows.map((row: any) => {
        return (
          <tr>
            {props.hasCheckbox && (
              <Td style={{ width: '45px', textAlign: 'center' }}>
                <Checkbox
                  isChecked={isRowSelected(row)}
                  onClick={() => props.onRowSelect?.(row, uniqueKey)}
                />
              </Td>
            )}
            {getCell(row)}
          </tr>
        );
      });
      return row;
    }
    return <Fragment />;
  };

  return <tbody style={{ borderTop: 'none' }}>{getRows()}</tbody>;
};
