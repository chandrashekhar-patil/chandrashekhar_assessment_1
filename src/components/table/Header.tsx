import { FC } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { Th } from './Th';
interface Props {
  columns: Array<string>;
  rows: Array<any>;
  dataMap: any;
  hasCheckbox?: boolean;
  selectedRows?: Array<string>;
  onHeaderSelect?(isSelect: boolean): void;
}

export const Header: FC<Props> = (props: Props) => {
  const columns = props.columns || [];
  const dataMap = props.dataMap || {};
  const selectedRows: any = props.selectedRows || [];
  const rows: any = props.rows || [];

  const getHeader = () => {
    const isSelectAll = selectedRows.length === rows.length ? true : false;
    return (
      <tr>
        {props.hasCheckbox && (
          <Th
            style={{ width: '45px', borderRight: 'none', textAlign: 'center' }}
          >
            <Checkbox
              isChecked={isSelectAll}
              onClick={() => props.onHeaderSelect?.(!isSelectAll)}
            />
          </Th>
        )}
        {columns.map((column: string, index: number) => {
          const style = dataMap[column]?.header?.style || {};
          return (
            <Th style={{ borderLeft: index === 0 ? 'none' : '', ...style }}>
              {dataMap[column]?.name}
            </Th>
          );
        })}
      </tr>
    );
  };
  return (
    <thead
      style={{
        textTransform: 'uppercase',
      }}
    >
      {getHeader()}
    </thead>
  );
};
