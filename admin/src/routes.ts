import React from 'react';
// import { CategoriesList } from './views/news/CategoriesList';
// import Dashboard from './views/dashboard/Dashboard';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CategoriesList = React.lazy(() => import('./views/news/CategoriesList'));



const routes = [
  { path: '/', exact: true, name: 'Главная', component: Dashboard},

  { path: '/news', exact: true, name: 'Новости', component: null},
  { path: '/news/categories', name: 'Категории', component: CategoriesList},
  { path: '/news/tags', name: 'Теги', component: null },
  { path: '/news/sources', name: 'Источники', component: null },
];

export default routes;