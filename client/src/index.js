import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminApp from '../src/components/AdminDashboard/AdminApp';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';
import App from './App';
import Login from './components/Login/Login';
import PatientDetail from './components/PatientDetail/PatientDetail';
import Register from './components/Register/Register';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/patient-detail/:id",
    element: <PatientDetail/>
  },
  {
    path: "/Admin",
    element: <ProtectedRoute component={<AdminApp />}/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
