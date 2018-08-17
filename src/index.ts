import { Router } from 'director/build/director';

import { Home } from './pages/home/home';
import './index.scss';

(function () {

  const loadPage = {
    home: () => new Home(),
  };
  new Router({
    '/': loadPage.home,
  }).init('/');

})();
