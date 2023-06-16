import { useState } from 'react'
import { CustomRoutes } from './Routes/routes';
import { BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';

function App() {
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