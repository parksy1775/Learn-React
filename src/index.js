import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; //확장자 생략


const rootElement = document.getElementById(('root'));
ReactDOM.render(<App/>, rootElement);
/*
if(module.hot){
  module.hot.accept();
}
*/
