import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../components/layout/Layout';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} />
    </Routes>
  )
}

export default AppRoutes