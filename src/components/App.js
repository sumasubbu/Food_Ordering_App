import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './Header';
import Body from './Body';

import '../../index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
