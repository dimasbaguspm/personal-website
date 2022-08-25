import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RouteWrapper from './core/route-wrapper';
import PageLayout from 'core/page-layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <PageLayout>
      <RouteWrapper />
    </PageLayout>
  </React.StrictMode>
);
