import page from 'page';
const router = page;

import { Home } from './pages/home/home';
import './index.scss';

(function () {

  const loadPage = {
    home: () => new Home(),
  };
  router('/', loadPage.home);
  router.start({});

})();
