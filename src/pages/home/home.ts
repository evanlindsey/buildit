import { Page } from '../page';
import * as home from './home.html';

declare var require: any;
const img = require('../../assets/dreams.png');

export class Home extends Page {

  constructor() {
    super(home);

    const dreams = <HTMLImageElement>document.getElementById('dreams');
    dreams.src = img;
  }

}
