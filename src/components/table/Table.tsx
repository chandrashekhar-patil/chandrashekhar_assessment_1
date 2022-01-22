import { FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Table as TABLE } from 'reactstrap';
import { TableLoader } from '../loader/TableLoader';
import { Body } from './Body';
import { Header } from './Header';
interface Props {
  loading: boolean;
  loaderNos: number;

  //binding
  columns: Array<string>;
  rows: Array<any>;
  dataMap: any;

  //checkbox
  hasCheckbox?: boolean;
  uniqueKey?: string;
  onHeaderSelect?(isSelect: boolean): void;
  onRowSelect?(row: any, key: string): void;
  selectedRows?: Array<string>;

  //scroll
  height?: string;

  //cell
  onCellClick?(column: string, celldata: any, row: any): void;
}

export const Table: FC<Props> = (props: Props) => {
  if (props.loading) {
    return <TableLoader rowNos={props.loaderNos} />;
  }

  return (
    <Scrollbars
      autoHide={true}
      hideTracksWhenNotNeeded={true}
      autoHeight={true}
      autoHeightMax={props.height ? props.height : '800px'}
    >
      <TABLE bordered size='sm'>
        <Header
          rows={props.rows}
          columns={props.columns}
          dataMap={props.dataMap}
          hasCheckbox={props.hasCheckbox}
          onHeaderSelect={props.onHeaderSelect}
          selectedRows={props.selectedRows}
        />
        <Body
          columns={props.columns}
          rows={props.rows}
          dataMap={props.dataMap}
          hasCheckbox={props.hasCheckbox}
          uniqueKey={props.uniqueKey}
          onRowSelect={props.onRowSelect}
          selectedRows={props.selectedRows}
          onCellClick={props.onCellClick}
        />
      </TABLE>
    </Scrollbars>
  );
};
