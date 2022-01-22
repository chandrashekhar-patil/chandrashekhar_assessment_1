import { Fragment } from 'react';
import ContentLoader from 'react-content-loader';

interface LoaderProps {
  style: any;
}
const Loader = (props: LoaderProps) => {
  return (
    <ContentLoader height={40} width={1160} speed={2} {...props}>
      <rect x='0' y='13' rx='6' ry='6' width='40' height='12' />
      <rect x='64' y='13' rx='6' ry='6' width={'1120'} height='12' />
    </ContentLoader>
  );
};

interface Props {
  rowNos: number;
}
export const TableLoader = (props: Props) => {
  return (
    <Fragment>
      {Array(props.rowNos)
        .fill('')
        .map((e, i) => (
          <Loader key={i} style={{ opacity: Number(2 / i).toFixed(1) }} />
        ))}
    </Fragment>
  );
};
