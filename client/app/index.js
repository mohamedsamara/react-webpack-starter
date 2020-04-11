import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// Import application sass styles
import './styles/sass/style.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
