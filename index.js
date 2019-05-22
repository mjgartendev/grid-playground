import App from './components/App.html';
import store from './store.js'

const AppComponent = new App({
  target: document.querySelector('#root'),
  store
});

window.store = store;