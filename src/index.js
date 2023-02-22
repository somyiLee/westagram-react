import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './style/reset.scss';
import './style/common.scss';
import './style/mixin.scss';
import './style/variable.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
