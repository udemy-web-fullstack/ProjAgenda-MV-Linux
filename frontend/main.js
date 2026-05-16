import 'core-js/stable';
import 'regenerator-runtime';

import Login from './modules/Login';
import Contato from './modules/Contato';

import './assets/css/style.css';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Login('.form-contato');

login.init();
cadastro.init();
contato.init();