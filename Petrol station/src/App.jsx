import { useState, useEffect } from 'react'
import { CustomRoutes } from './Routes/routes';
import { BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
// import { Collapse, initTE } from "tw-elements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidenav, Collapse, initTE } from "tw-elements";

function App() {
  useEffect(() => {
    initTE({ Collapse, Sidenav });
  }, []);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>{...CustomRoutes()}</Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            hideProgressBar={false}
            draggable
            pauseOnHover
            theme="light"
            closeButton={false} 
            bodyClassName={() => "text-base font-medium flex mx-auto my-auto font-mont"}
          />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;