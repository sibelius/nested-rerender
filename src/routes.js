import Main from './Main';
import NestedTab from './NestedTab';
import NestedTabA  from './NestedTabA';
import NestedTabB  from './NestedTabB';
import Another from './Another';

export const routes = {
  name: 'rootRoutes',
  path: '/',
  exact: false,
  component: Main,
  routes: [
    {
      name: 'nested',
      path: '/nested',
      component: NestedTab,
      exact: false,
      routes: [
        {
          name: 'nested.tabA',
          path: '/nested/tabA',
          exact: true,
          component: NestedTabA,
        },
        {
          name: 'nested.tabB',
          path: '/nested/tabB',
          exact: true,
          component: NestedTabB,
        },
      ]
    },
    {
      name: 'another',
      path: '/another',
      component: Another,
      exact: true,
    },
  ],
};
