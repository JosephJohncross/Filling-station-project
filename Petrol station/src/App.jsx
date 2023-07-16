import { useState, useEffect } from 'react'
import { CustomRoutes } from './Routes/routes';
import { BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import { Collapse, initTE } from "tw-elements";

function App() {
  useEffect(() => {
    initTE({ Collapse });
  }, []);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>{...CustomRoutes()}</Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;