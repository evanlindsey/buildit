export class Page {

  constructor(page) {
    const app = document.getElementById('app');
    app.innerHTML = page.toString();
  }

}
