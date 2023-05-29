import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InputForm from "./components/inputForm/InputForm";
import Timer from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputForm/>
      <Timer/>
  </React.StrictMode>
);
