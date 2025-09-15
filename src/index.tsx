import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import OwnTheView from './pages/owntheview';
import MakingMyName from './pages/makingmyname';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="albums" >
      <Route path="owntheview" element={<OwnTheView />}/>
      <Route path="makingmyname" element={<MakingMyName />}/>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>,
);

