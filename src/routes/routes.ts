import { LazyExoticComponent, lazy } from 'react';
import NoLazyLoad from '../01-lazy-load/pages/NoLazyLoad';

type JSXComponent = () => JSX.Element;

interface Route {
 to: string;
 path: string;
 name: string;
 Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
 () =>
  import(
   /* webpackChunkName: "LazyLayout"*/ '../01-lazy-load/layout/LazyLayout'
  )
);

export const routes: Route[] = [
 {
  path: '/lazylayout/*',
  to: '/lazylayout/',
  name: 'LazyLayout',
  Component: LazyLayout,
 },
 {
  to: '/no-lazy',
  path: 'no-lazy',
  name: 'No lazy load',
  Component: NoLazyLoad,
 },
];
