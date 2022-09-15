import React             from 'react';
import ReactDOM          from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HoxRoot } from 'hox';
import App               from './App';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <HoxRoot>
      <App />
    </HoxRoot>
  </BrowserRouter>,
);
