import { Fragment } from 'react';

export function NonAuthLayout({ children }: { children: JSX.Element }) {
  return <Fragment>{children}</Fragment>;
}
