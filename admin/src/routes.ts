// import { CategoriesList } from './views/news/CategoriesList';
// import Dashboard from './views/dashboard/Dashboard';

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const CategoriesList = React.lazy(() => import('./views/news/CategoriesList'));

import Dashboard from './views/dashboard/Dashboard';
import CategoriesList from './views/news/CategoriesList';
import FormSource from './views/news/FormSource';
import SourcesList from './views/news/SourcesList';

const routes = [
  { path: '/', exact: true, name: 'Главная', component: Dashboard},

  { path: '/news', exact: true, name: 'Новости', component: null},
  { path: '/news/categories', name: 'Категории', component: CategoriesList},
  { path: '/news/tags', name: 'Теги', component: null },
  { path: '/news/sources', exact: true, name: 'Источники', component: SourcesList },
  { path: '/news/sources/:id', exact: true, name: 'Редактирование источника', component: FormSource },
  { path: '/news/sources/add', exact: true, name: 'Создание источника', component: FormSource },
];

export default routes;