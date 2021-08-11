import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import microApps from './micro-apps'

const apps = microApps

console.log(apps)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerMicroApps(apps, {
  beforeLoad: [app => {
    console.log(`${app.name}-beforeLoad`)
  }],
  beforeMount: [app => {
    console.log(`${app.name}-beforeMount`)
  }],
  afterMount: [app => {
    console.log(`${app.name}-afterMount`)
  }],
  beforeUnmount: [app => {
    console.log(`${app.name}-beforeUnmount`)
  }],
  afterUnmount: [app => {
    console.log(`${app.name}-beforeUnmount`)
  }]
});

setDefaultMountApp('/app-vue')
// 启动 qiankun
start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
