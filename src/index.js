import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the router
// The RouterProvider provides the router created by createBrowserRouter to our application, so it can use React-Router's client-side routing.
root.render(<RouterProvider router={router} />);
